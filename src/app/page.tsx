import HomeContent from './home.mdx'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-6 py-6'>
      {/* some wrappers for styling and additional content*/}
      <div className='prose mx-auto w-full max-w-[768px]'>
        <HomeContent />
      </div>
    </div>
  )
}
