import { IProps } from "@/interfaces/iProps.interface"
import PortFolioCard from "../cards/portfolioCard.component"
import { projectsList } from "@/data/projectsList"
import { IProject } from "@/interfaces/iProject.interface";

interface Props extends IProps {
}
export default function PortfolioList({ children, className, data, ...props }: Props) {
    const leftData: JSX.Element[] = [];
    const rightData: JSX.Element[] = [];
    projectsList.forEach((value: IProject, index: number) => {
        const card = <PortFolioCard data={value} key={value.name} />
        if (index % 2 == 0) {
            rightData.push(card);
        } else {
            leftData.push(card);
        }
    })
    return (
        <div className="grid grid-cols-1 gap-6 px-12 py-24 mx-12 md:mx-24 md:py-32 2xl:py-40 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-28 md:gap-x-14">
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