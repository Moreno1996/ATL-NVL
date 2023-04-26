import Modal from "@/components/Modal";
import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdSettings} from "react-icons/md";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const is_home = router?.pathname == "/"
  const [ modalOpen, setModalOpen ] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between p-4 text-white bg-slate-700">
        <Link href="/">{ is_home? <FaHome /> : <BiArrowBack />}</Link>
        {is_home && <MdSettings onClick={()=>{setModalOpen(true)}}/>}
        
      </div>
      <div className="container pb-4 mx-auto">
        <Component {...pageProps} />
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
      </div>
    </div>
  );
}
