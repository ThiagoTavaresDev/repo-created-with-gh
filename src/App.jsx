import backGround from './design/assets/images/background-pattern-desktop.svg'
function App() {

  return (
    <>
      <div className="">
            <header className=''>
                   <img src={backGround} alt="image-background" className='w-full'/>
            </header>
            <main className='z-10 absolute w-6/12 top-44 left-96  rounded-md'>
                <div id='modal' className='bg-white p-6'>
                    <h1 className='text-[40px] font-bold text-principal '>FAQs</h1>
                     
                </div>
            </main>
      </div>
    </>
  )
}

export default App
