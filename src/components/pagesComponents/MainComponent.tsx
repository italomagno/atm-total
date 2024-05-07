import Link from "next/link";
import { Layout } from "../shared/Layout";


export function MainComponent(){

  return(
    <Layout>
      <div className=" w-full flex items-center justify-center col-span-2">
                <div className="w-[700px] h-[440px]  rounded-r-md shadow-md p-6">
                  <h1 className="text-3xl font-black text-gray-50">
                  Bem vindo |  ATM total Recife
                  </h1>
                  <br/>
                  <br/>
                  <Link
                  href={"/about"}
                  className="mx-auto text-center hover:opacity-50 text-3xl font-black text-gray-50 p-4 bg-backgroudBlue-100 rounded-md shadow-md"
                  >
                    Conheça sobre o projeto
                  </Link>

                </div>
      </div>
    </Layout>
  )
}