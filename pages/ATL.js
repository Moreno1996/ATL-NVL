import { ATL } from '@/data/ATL'
import Questionaire from '@/components/Questionaire'
import Link from 'next/link';


export default function Home() {
  return (<div className='container p-4 mx-auto'>
   

   <Questionaire questionaire={ATL}/>
  </div>);
}
