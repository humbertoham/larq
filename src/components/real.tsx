import { FaWhatsapp  } from "react-icons/fa";
export default function Real() {
    return (
      <>
<section className="real">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">Real State</h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 ">
	¡Descubre la oportunidad de tu vida en nuestros desarrollos exclusivos!</p>
    <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 ">
	No solo te ofrecemos terrenos con amenidades de primera categoría, sino también un sistema de referidos que te brinda beneficios adicionales. Con certeza jurídica respaldada, garantizamos tu inversión. Además, nuestra promesa de plusvalía asegura que tu patrimonio crezca con el tiempo. </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/realstate" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Aprender más
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B527551441259" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:text-black hover:bg-white focus:ring-4 focus:ring-gray-100">
                    <FaWhatsapp className=" mr-1" />
                Contáctanos
            </a>  
        </div>
        
    </div>
</section>

      
      </>
    )
  }
  