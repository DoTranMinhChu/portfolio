import { ReactNode, useState } from "react"
import "@/styles/Button.scss"
interface Props {
    children?: ReactNode,
    href?: string | undefined,
    className?: string,
    // any props that come into the component
}

export default function OpenMoreButton({ children, href, className, ...props }: Props) {

    return (
        <>
            <a href={href} className={`inline-block wrapper ${className || ""}`}>
                <div className="inline-block h-6 uppercase">{children}</div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-6 h-6 ml-3 icon-button">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>


                <div className="h-1 transition ease-in-out delay-150">
                    <div className="w-full mt-2 h-2/5 bg-slate-400">
                        <div className="h-full bg-slate-100 underline-button" >
                        </div>
                    </div>
                </div>

            </a>
        </>
    )
}