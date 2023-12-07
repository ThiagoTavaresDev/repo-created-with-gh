import backGround from './design/assets/images/background-pattern-desktop.svg'
import plusIcon from './design/assets/images/icon-plus.svg'
import starIcon from './design/assets/images/icon-star.svg'
import minusIcon from './design/assets/images/icon-minus.svg'
function App() {
    const faq = ['Is Frontend Mentor free?','Can I use Front-end Mentor projects in my portfolio?', "How can i get help if i'm stuck on a challenge?"]

  return (
    <>
      <div className="">
            <header className=''>
                   <img src={backGround} alt="image-background" className='w-full absolute -z-10'/>
            </header>
            <main className='w-9/12 xl:w-4/12 top-20 mx-auto py-16'>
                <div id='modal' className=' p-6 h-auto rounded-xl shadow-xl bg-white w-[348px] sm:w-auto my-0 mx-auto' >
                    <h1 className='text-5xl font-bold text-principal flex items-center gap-8 mb-8'> 
                    <span>
                    <img src={starIcon} alt="icon" />
                    </span>
                       FAQs
                    </h1>
                    <p className='font-bold text-lg flex justify-between mb-8 text-principal items-center gap-6'>What is Front Mentor, and how will it help me? 
                    <span>
                        <img src={minusIcon} alt="minus icon" className='h-[3rem] min-w-[46px]'/>
                        </span>
                    </p>
                    <p className='text-secundaria font-semibold mb-8'>
                        Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. it s suitable for all levels and ideal for portfolio building
                    </p>
                        {faq.map((item,index) =>{
                            return(
                            <p className='flex items-center justify-between text-principal font-bold mb-8 gap-6 hover:text-terciaria cursor-pointer' key={index}>
                                {item}
                                <span>
                                <img src={plusIcon} alt="feature" className='h-[48px] min-w-[46px]'/>
                                </span>
                                </p>
                            )
                        })}
                </div>
            </main>
      </div>
    </>
  )
}

export default App
