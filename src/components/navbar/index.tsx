import { menuNavbarList } from "@/data/menuNavbarLists";
import { useRouter } from "next/router";
import { useState } from "react"

export default function Navbar() {
    const router = useRouter()
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const handleToggleOpenMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    return (
        <>
            <nav className="bg-gray-800">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" onClick={handleToggleOpenMobileMenu} className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                            <div className="flex items-center flex-shrink-0">
                                <a href="/" className="px-3 py-2 text-sm font-medium text-white">DoTranMinhChu</a>

                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {
                                        menuNavbarList.map((item: TItemNavbar) => {
                                            const classNameActive = "px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md";
                                            const classNameUnactive = "px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white";
                                            return (
                                                <a href={item.slug} className={router.asPath == item.slug ? classNameActive : classNameUnactive} key={item.name}>{item.title}</a>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={openMobileMenu ? "hidden" : "" + " sm:hidden"} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {
                            menuNavbarList.map((item: TItemNavbar) => {
                                const classNameActive = "block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md";
                                const classNameUnactive = "block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white";
                                return (
                                    <a href={item.slug} className={router.asPath == item.slug ? classNameActive : classNameUnactive} key={item.name}>{item.title}</a>

                                )
                            })
                        }
                    </div>
                </div>
            </nav >

        </>
    )
}