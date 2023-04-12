import "@/styles/Button.scss"
import { IProps } from "@/interfaces/iProps.interface"
interface Props extends IProps {
    href?: string | undefined,
    active?: boolean,
    // any props that come into the component
}

export default function ItemMenuButton({ children, href, className, active, ...props }: Props) {

    return (
        <>
            <a href={href} className={`w-fit group cursor-pointer ${className || ""}`}>
                <div className="inline-block h-6">{children}</div>
                <div className="h-1.5 transition ease-in-out delay-150 relative">
                    <div className="absolute flex justify-center w-full mt-2 h-2/5">
                        <div className={`h-full duration-300 ease-in-out delay-75 bg-slate-100 underline-button group-hover:w-full ${active ? "w-full" : ""}`} >
                        </div>
                    </div>
                </div>

            </a >
        </>
    )
}