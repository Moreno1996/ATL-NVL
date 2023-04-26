import useLocalStorage from "@/utils/useLocalStorage";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ isOpen, setIsOpen }) => {
    const [email,setEmail ]= useLocalStorage("moreno_email","");
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                    Email aanpassen
                    </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Je kan hieronder je email aanpassen
                  </p>
                </div>
                <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={email}
          onChange={(e)=>{
            console.log(e);
            setEmail(e.target.value);
        }}
        />
      </div>
    </div>
                <div className="mt-4">
                <button
          className="px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700"
                    type="button"
                    onClick={closeModal}
                  >
                    Afsluiten
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
