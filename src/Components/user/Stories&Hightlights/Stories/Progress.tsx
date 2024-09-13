import { useEffect, useState } from "react";
import Style from './style.module.css'

interface ProgressProps {
  needChangeIndex: () => void;
  pause: boolean
  storiesCount: number
  currentStoryIndex: number
}

interface ProgressItemProps {
  index: number
  currentIndex: number
  isPause: boolean
  doneFunc: () => void
}

function ProgressItem({ doneFunc, index, currentIndex, isPause }: ProgressItemProps) {
  const [ progressValue, setProgressValue ] = useState(0);

  useEffect(() => {
    if (index !== currentIndex && progressValue > 0) {
      setProgressValue(0);
    }

    if (index !== currentIndex || isPause) return

    if (progressValue >= 100) {
      doneFunc();
      return;
    }
    let timer: any
    timer = setTimeout(() => {
      setProgressValue((x) => x + 1)
    }, 100);

    return () => {
      clearTimeout(timer);
    }
  }, [progressValue, isPause, index, currentIndex, doneFunc])

  let value = progressValue;

  if (index < currentIndex) {
    value = 100
  }

  return (
    <progress 
      className={["w-full","flex-1", Style['progress-class']].join(' ')}
      value={value}
      max="100"
    />
  )
}

export const Progress = ({ needChangeIndex, pause, storiesCount, currentStoryIndex }: ProgressProps) => {
  return (
    <div className="flex gap-[4px] mb-1">
      {
        Array(storiesCount).fill(0).map((_, index) => {
          return (
            <ProgressItem
              key={index}
              index={index}
              currentIndex={currentStoryIndex}
              isPause={pause}
              doneFunc={needChangeIndex}
            />
          )
        })
      }
    </div>
  )
}