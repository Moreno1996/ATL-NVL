import '@/styles/globals.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import { BiArrowBack } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log("router",router)
  return <div>
     <div className="p-4 text-white bg-slate-700">
        <Link href="/">
          {router?.pathname ?<FaHome/> :<BiArrowBack />}
        </Link>
      </div>
    <Component {...pageProps} />
    </div>
}
