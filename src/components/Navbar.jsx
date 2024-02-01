

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BiCategory } from "react-icons/bi";
import { LuGift } from "react-icons/lu";
// import shady from '../images/brand shady.png'
// import icon from '../images/icon.png'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#About', current: false },
  { name: 'BestSales', href: '#BestSales', current: false },
  { name: 'Promotions', href: '#Promotions', current: false },
  { name: 'Blogs', href: '#Blogs', current: false },
  { name: 'Contact', href: '#Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
    <Disclosure as="nav" className="z-10 bg-white fixed top-0 w-full shadow-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1400px] px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md border-2 p-2 text-black hover:bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center gap-1 md:gap-5 ">
                <BiCategory className='text-green-500 text-2xl hidden lg:block'/>
                {/* <select className='p-2 cursor-pointer rounded-md border-none font-semibold' name="" id="" >
                <option value="">All Categories</option>
                </select> */}
                </div>
                <div className="hidden  sm:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-black' : 'text-black  hover:bg-gray-200',
                          'rounded-md px-3 py-2 text-lg font-semibold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <button className='bg-orange-500 text-white gap-3 p-4 font-semibold w-[150px] rounded-md h-[40px] flex items-center justify-center'><LuGift/> Gift Cards</button>

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-orange-600 text-green-600' : 'text-black hover:bg-gray-200 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   
    </>
  )
}

