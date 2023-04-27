import Modal from "@/components/Modal";
import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const is_home = router?.pathname == "/";
  const [modalOpen, setModalOpen] = useState(false);
  const page_name = router?.asPath.replace("/", "");
  const classIcon = "w-6 h-6 cursor-pointer";
  return (
    <div>
      <div className="flex flex-row items-center justify-between h-16 p-4 text-white bg-slate-700">
        <div className="flex flex-row items-center gap-4">
          <Link href="/" className="h-fit">
            {is_home ? (
              <FaHome className={classIcon} />
            ) : (
              <BiArrowBack className={classIcon} />
            )}
          </Link>
          {!is_home && page_name}
        </div>
        {is_home && (
          <MdSettings
            className={classIcon}
            onClick={() => {
              setModalOpen(true);
            }}
          />
        )}
      </div>
      <div className="container pb-4 mx-auto">
        <Component {...pageProps} />
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
      </div>
    </div>
  );
}
