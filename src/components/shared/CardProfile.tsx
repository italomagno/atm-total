import Image from "next/image";
import tsgt from "@/assets/terceirosargento.png"
import ssgt from "@/assets/segundosargento.png"
import capt from "@/assets/cap-aeronautica.png"


export function CardProfile(){
    return(
        <div className="grid grid-cols-3 w-full">
        <div className="p-1 flex flex-col rounded-xl group sm:flex   bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div className="mx-auto">
          <Image src={capt} alt="art cover" loading="lazy" width="400"  className="sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          </div>
          <div className="p-5">
              <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-cyan-900">Cap <br/> Jonathan</h4>
                <p className="text-gray-600 text-sm text-justify">O Cap Jonathan é um líder exemplar da Força Aérea Brasileira, reconhecido por sua dedicação.</p>
              </div>
          </div>
        </div>
        <div className="p-1 flex flex-col rounded-xl group sm:flex   bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div className="mx-auto">
          <Image src={ssgt} alt="art cover" loading="lazy" width="400"  className="sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          </div>
          <div className="p-5">
              <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-cyan-900">2S <br/> Kayo</h4>
                <p className="text-gray-600 text-sm text-justify">O 2S Kayo é uma figura valorosa na FAB, reconhecido por sua determinação.</p>
              </div>
          </div>
        </div>
        <div className="p-1 flex flex-col rounded-xl group sm:flex   bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div className="mx-auto">
          <Image src={tsgt} alt="art cover" loading="lazy" width="400"  className="sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          </div>
          <div className="p-5">
              <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-cyan-900 ">3S <br/> Italo</h4>
                <p className="text-gray-600 text-sm text-justify">O 3S Ítalo militar dedicado da FAB, conhecido pelo seu compromisso com a excelência.</p>
              </div>
          </div>
        </div>
      </div>
    )
}