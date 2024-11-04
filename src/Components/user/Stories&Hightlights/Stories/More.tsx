import Style from './style.module.css'

interface MoreProps {
  close: () => void;
}

export const More = ({ close } : MoreProps) => {
  return (
    <div className={Style.more}>
        <div className={Style.more__back} onClick={close}></div>
        <div className={Style.more__container}>Какой-то контент</div>
    </div>
  )
}