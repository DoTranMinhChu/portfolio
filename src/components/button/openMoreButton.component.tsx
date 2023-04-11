import { ReactNode, useState } from "react"
import "@/styles/Button.scss"
import { IProps } from "@/interfaces/iProps.interface"
interface Props extends IProps {
    href?: string | undefined,
    // any props that come into the component
}

export default function OpenMoreButton({ children, href, className, ...props }: Props) {

    return (
        <>

            <a href={href} className={`inline-block wrapper cursor-pointer ${className || ""}`}>
                <div className="inline-block h-6">{children}</div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`inline-block w-6 h-6 ml-3 icon-button`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>


                <div className="h-1.5 transition ease-in-out delay-150">
                    <div className="w-full mt-2 h-2/5 bg-slate-500">
                        <div className="h-full bg-slate-100 underline-button" >
                        </div>
                    </div>
                </div>

            </a >
        </>
    )
}