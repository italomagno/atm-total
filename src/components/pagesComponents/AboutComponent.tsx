"use client"
import { Layout } from "../shared/Layout";
import { Carrousel } from "../shared/Carrousel";
import { CardProfile } from "../shared/CardProfile";
import { SharedBody } from "./shared/SharedBody";
import { useNavMenu } from "@/hooks/useNavMenu";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { link } from "fs";




export function AboutComponent(){
    const pathName = usePathname()

     const itens = {
        category: "",
        links:[
            {
                href:"/about",
                name:"Sobre",
                isActive:false,

                node:<>
                <p className="ml-3 text-sm font-bold mb-2 text-justify">
        
                    O Projeto TOTAL ATM (Gerenciamento do Tráfego Aéreo, do inglês Air Traffic Management) emerge como uma iniciativa estratégica, visando otimizar a gestão do tráfego aéreo de forma abrangente e eficiente. Coordenado pelo Departamento de Controle do Espaço Aéreo (DECEA) em colaboração com a Organização Europeia para a Segurança da Navegação Aérea (EUROCONTROL), esse projeto representa um avanço significativo no setor de controle aéreo.
                </p><p className="ml-3 text-sm font-bold mb-2 text-justify">
        
        
                        O objetivo primordial do Projeto TOTAL ATM é promover a harmonização entre a demanda de tráfego aéreo e a capacidade dos controladores, visando aprimorar a eficiência operacional e a segurança dos sistemas de controle aéreo. Ao concentrar esforços nessa área crucial, o projeto busca explorar novas abordagens e tecnologias para enfrentar os desafios dinâmicos do tráfego aéreo moderno.
                    </p><p className="ml-3 text-sm font-bold mb-4 text-justify">
        
        
                        Portanto, o Projeto TOTAL ATM no CINDACTA III representa um marco importante no avanço da gestão do tráfego aéreo no Brasil. Com o compromisso contínuo das partes interessadas e a implementação de soluções inovadoras, espera-se alcançar melhorias significativas na eficiência, segurança e desempenho dos sistemas de controle aéreo, beneficiando toda a comunidade da aviação.
                    </p></>,
                
            },
            {
                href:"/about/staff",
                name:"Integrantes",
                isActive:false,
                node:<>
                    <CardProfile/>
                </>
            },
            {
                href:"/",
                name:"Retornar Para Página Inicial",
                isActive:false,
                node:<>
                </>
            },

        ]
    }
    const {handleSelectedNavItem,nav} = useNavMenu(itens)
    
    useEffect(()=>{
        const index = nav.links.findIndex(index=>index.href === pathName)
        handleSelectedNavItem(index)
    },[])
    return(
        <Layout>
            <SharedBody
            asideMenu={[nav]}
            >
            <Carrousel
            slides={nav.links.map(link=>link.node)}
            selectSlide={handleSelectedNavItem}
            href={nav.links.map(link=>link.href)}
            /> 
            </SharedBody>
        </Layout>
    )
}