import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface PopupProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export const Popup = (props: PopupProps) => {
  const { onClose, open, title, children } = props

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" onClose={onClose}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-[35px] bg-popup-bg pt-16 px-10 pb-12 text-left align-middle shadow-xl transition-all">
                <button
                  onClick={onClose}
                  className="absolute flex items-center justify-center z-20 -top-2 -right-2 w-10 h-10 rounded-full bg-[#FFC543]"
                >
                  <span className="icon-Vector-4"></span>
                </button>
                <Dialog.Title className="text-2xl text-center font-bold text-white mb-14">
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
