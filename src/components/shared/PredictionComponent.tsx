"use client"
import * as tf from '@tensorflow/tfjs';

import { useEffect, useState } from 'react';
import { NavBody } from '../NavBody';
import { SharedBody } from '../pagesComponents/shared/SharedBody';
import { Layout } from './Layout';
import { CardSection } from '../CardSections';
import { ActionSection } from '../ActionSection';
import { NavItemsProps } from '@/types';
import { useModalContext } from '@/contexts/useModalContext';
import { usePathname } from 'next/navigation';
import { ShowFilesSection } from '../ShowFilesComponent';
import { DownloadCsvTogetherModal } from '../Modal/DownloadCsvTogetherModal';
import { ButtonPicker } from './ButtonPicker';
import { useNavMenu } from '@/hooks/useNavMenu';



/* 
<div>
        <h1>Modelo de Regressão Linear</h1>
        {trainedModel ? (
          <div>
            <p>Treinamento concluído!</p>
            <p>Previsão para entrada 5: {prediction}</p>
          </div>
        ) : (
          <p>Treinando o modelo...</p>
        )}
      </div>
    );

*/

export function PredictionComponent(){

    const [trainedModel, setTrainedModel] = useState<tf.Sequential>();
    const [prediction, setPrediction] = useState(null);
    const {isOpen} = useModalContext()
    const pathName = usePathname()
  
    const navMenu:NavItemsProps[] = [{
      category:"Análise de Dados SOT",
      links:[
      {
          href:"/predictionsSot/sot",
        name:"sot",
        isActive:true,
        node: <>
        <CardSection
        config={true}
        /><ActionSection />
        <ShowFilesSection />
        {
          isOpen
          ?
          <DownloadCsvTogetherModal />
          :
          null 
        }
        </>
        },
        {
        href:"/predictionsSot/preview",
        name:"Verificar previsão de consoles",
        isActive:false,
        node:<>
            <div className="flex p-4 w-full bg-gray-600 rounded-md mb-4">
              <p>Selecione a pasta dos arquivos para verificar se há arquivos faltantes.</p>
            </div>
            <ButtonPicker
            disabled={false}
            >
            </ButtonPicker> 
        </>
        },
        
      ]
    }]
    const {handleSelectedNavItem,nav} = useNavMenu(navMenu[0])
      
      useEffect(()=>{
          const index = nav.links.findIndex(index=>index.href === pathName)
          handleSelectedNavItem(index)
      },[])
  
  
    useEffect(() => {
      const createAndTrainModel = async () => {
        // Criar um modelo sequencial
        const model = tf.sequential();
  
        // Adicionar uma camada densa ao modelo
        model.add(tf.layers.dense({ inputShape: [1], units: 1 }));
  
        // Compilar o modelo
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
  
        // Dados de exemplo para treino (X e Y)
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
  
        // Treinar o modelo
        await model.fit(xs, ys, { epochs: 250 });
  
        setTrainedModel(model);
  
        // Fazer uma previsão após o treinamento
        const output = model.predict(tf.tensor2d([5], [1, 1]));
        // @ts-ignore
        setPrediction(output.dataSync()[0]);
      };
  
      createAndTrainModel();
    }, []);
  
    return (
      <Layout>
      <SharedBody
      asideMenu={[nav]}
      >
        <NavBody 
        nav={nav}
      />
      </SharedBody>
   

</Layout>
      );
      
}