import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ATL } from '@/data/ATL'
import Questionaire from '@/components/Questionaire'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div className='container mx-auto p-4'>

   <Questionaire questionaire={ATL}/>
  </div>);
}
