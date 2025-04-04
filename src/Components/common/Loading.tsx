export function LoadingComponent() {
  return (
    <div className="absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center bg-zinc-200/75 z-[1000000]">
      <img className='animate-logo-loading' src="/images/wearo-logo.svg" alt="wear-logo"/>
    </div>
  )
}