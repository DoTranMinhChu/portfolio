import { ReactNode, useState } from "react"
import "@/styles/CardSkills.scss"
import { ICardSkills } from "@/interfaces/iCardSkills.interface"
import { IProps } from "@/interfaces/IProps.interfact"

interface Props extends IProps {
    data: ICardSkills
}
export default function SkillCard({ children, className, data, ...props }: Props) {
    return (
        <>
            <div className="px-12 pt-32 bg-gray-800 hover:ease-in group rounded-3xl w-434-px h-504-px" aria-hidden="true">
                <img className="mb-8 duration-300 ease-in-out scale-100 group-hover:scale-105" src={data.imageSrc} loading="eager" alt="HTML5 - Developer X Webflow Template" aria-hidden="true" />
                <h3 className="mb-4 text-4xl font-bold text-gray-300 duration-300 ease-in-out group-hover:text-gray-100" aria-hidden="true">{data.name}</h3>
                <p className="text-2xl text-gray-400 duration-300 ease-in-out mb-11 line-clamp-2 group-hover:text-gray-200" aria-hidden="true">{data.detail}</p>
                <div className="group-hover:bg-gray-100 w-16 h-1.5 bg-gray-300 duration-300 ease-in-out" aria-hidden="true"></div>
            </div>

        </>

    )
}