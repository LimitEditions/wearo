import { useEffect, useState } from "react";
import Style from './style.module.css'

interface ProgressProps {
  needChangeIndex: () => void;
  pause: boolean
}

export const Progress = ({ needChangeIndex, pause }: ProgressProps) => {
  const [ progressValue, setProgressValue ] = useState(0);

  useEffect(() => {
    if (!pause) return;

    if (progressValue >= 100) {
      needChangeIndex();
      return;
    }
    const timer = setTimeout(() => {
      setProgressValue((x) => x+1);
    }, 100)

    return () => {
      clearTimeout(timer);
    }
  
  }, [ 
    progressValue, 
    pause, 
    // Не будет обновляться
    // поставил чтоб еслинт не ругался
    needChangeIndex 
  ])

  return (
    <div>
      <progress className={["w-full", Style['progress-class']].join(' ')} value={progressValue} max="100"/>
    </div>
  )
}