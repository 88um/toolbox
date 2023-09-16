import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Wrapper from '../components/providers/Wrapper';
import InfoCard from '../components/cards/infocard';
import {BsFillPlayFill, BsFillPauseFill, BsFillStopFill} from 'react-icons/bs'
import {FaCheck} from 'react-icons/fa'
import {TbCheck} from 'react-icons/tb'
import { useToast } from '../components/ui/use-toast';
import { Button } from '../components/ui/button';
import { Overview } from '../components/graphs/Overview';
import { dummyGraphData } from '../constants';

function Home() {
  
  return (

    <React.Fragment>
      <Head>
        <title>Toolbox Desktop Client</title>
      </Head>
      <Wrapper>
        <div className='p-4 '>
          <div>
            <h1 className='bold text-zinc-400 font-medium'>
              General Overview
            </h1>
            
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4  mt-6 gap-4'>
            <InfoCard title={'active'} color="text-blue-500" bgColor='bg-blue-500/20' icon={BsFillPlayFill} text='60'/>
            <InfoCard title={'paused'} color="text-yellow-400" bgColor='bg-yellow-400/20' icon={BsFillPauseFill} text='60'/>
            <InfoCard title={'stopped'} color="text-red-400" bgColor='bg-red-400/20' icon={BsFillStopFill} text='60'/>
            <InfoCard title={'completed'} color="text-green-500" bgColor='bg-green-500/20' icon={TbCheck} text='60'/>
          </div>
          <Overview data={dummyGraphData}/>
        </div>
      </Wrapper>
    </React.Fragment>

  );
}

export default Home;
