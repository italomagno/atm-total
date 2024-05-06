import { asideAboutMenu } from "@/constants";
import { Layout } from "../shared/Layout";
import { NavMenu } from "../shared/NavMenu";
import { headers } from 'next/headers'




export function AboutComponent(){

    return(
        <Layout>
            <div className=" w-full flex items-center justify-center col-span-2">
                <div className="w-fit bg-white rounded-l-lg p-6 bg-opacity-70 h-full">
                <NavMenu
                bgCategory=" bg-opacity-70"
                bgColor=" bg-opacity-70"
                textColor="text-black"
                title="ATM Total | Recife"
                //@ts-ignore
                asideMenu={asideAboutMenu}
                />
                
                </div>
               

                    <div className="w-[700px] h-[440px] bg-white bg-opacity-70  rounded-r-md shadow-md p-6">
                    {
                    headers().get("next-url") &&
                        <>
                        <p className="ml-3 text-sm font-bold mb-2 text-justify">

                            O Projeto TOTAL ATM (Gerenciamento do Tráfego Aéreo, do inglês Air Traffic Management) emerge como uma iniciativa estratégica, visando otimizar a gestão do tráfego aéreo de forma abrangente e eficiente. Coordenado pelo Departamento de Controle do Espaço Aéreo (DECEA) em colaboração com a Organização Europeia para a Segurança da Navegação Aérea (EUROCONTROL), esse projeto representa um avanço significativo no setor de controle aéreo.
                        </p><p className="ml-3 text-sm font-bold mb-2 text-justify">


                                O objetivo primordial do Projeto TOTAL ATM é promover a harmonização entre a demanda de tráfego aéreo e a capacidade dos controladores, visando aprimorar a eficiência operacional e a segurança dos sistemas de controle aéreo. Ao concentrar esforços nessa área crucial, o projeto busca explorar novas abordagens e tecnologias para enfrentar os desafios dinâmicos do tráfego aéreo moderno.
                            </p><p className="ml-3 text-sm font-bold mb-4 text-justify">


                                Portanto, o Projeto TOTAL ATM no CINDACTA III representa um marco importante no avanço da gestão do tráfego aéreo no Brasil. Com o compromisso contínuo das partes interessadas e a implementação de soluções inovadoras, espera-se alcançar melhorias significativas na eficiência, segurança e desempenho dos sistemas de controle aéreo, beneficiando toda a comunidade da aviação.
                            </p></>

               
}
                </div>
            </div>
        </Layout>
    )
}