import { IProps } from "@/interfaces/iProps.interface"
import PortFolioCard from "../cards/portfolioCard.component"

import { IProject } from "@/interfaces/iProject.interface";

interface Props extends IProps {
    projectsList: IProject[],
    cardClassName?: string
}
export default function PortfolioList({ children, className, projectsList, cardClassName, data, ...props }: Props) {
    const leftData: JSX.Element[] = [];
    const rightData: JSX.Element[] = [];
    projectsList.forEach((value: IProject, index: number) => {
        const card = <PortFolioCard data={value} key={value.name} className={cardClassName ? cardClassName : ""} />
        if (index % 2 == 0) {
            rightData.push(card);
        } else {
            leftData.push(card);
        }
    })
    return (
        <div className="grid grid-cols-1 gap-0 p-4 py-12 sm:gap-12 md:gap-20 lg:gap:-40 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
            <div>
                {children}
                {leftData.map((item) => item)}
            </div>
            <div>
                {rightData.map((item) => item)}
            </div>
        </div >
    )
}