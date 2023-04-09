import SkillCard from "@/components/cards/skillCard.component";
import { skillsList } from "@/data/skillsList";
import { ICardSkills } from "@/interfaces/iCardSkills.interface";
import { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";
export default function SkillsList() {
    const boxList = useRef<any>(null)
    const [translateXPosition, setTranslateXPosition] = useState<number>(0);
    const [pressed, setPressed] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [dataList, setDataList] = useState<ICardSkills[]>(skillsList);
    const handleMouseDown = (e: MouseEvent) => {
        setStartX(e.clientX - translateXPosition);
        setPressed(true);

    }
    const handleMouseMove = (e: MouseEvent) => {
        if (!pressed) return;
        const windowWidth = window.innerWidth;
        const childrenWidth = boxList.current.children[0].offsetWidth;
        const minItemDisplay = Math.ceil(windowWidth / childrenWidth);
        const minPositionToLeft = - (childrenWidth * (skillsList.length - minItemDisplay + 2));
        const newtranslateXPosition = e.clientX - startX;
        setTranslateXPosition(e.clientX - startX);
        if (newtranslateXPosition > 0) setTranslateXPosition(0)
        if (newtranslateXPosition < minPositionToLeft) setTranslateXPosition(minPositionToLeft);

    }
    const handleMouseUp = (e: MouseEvent) => {
        setPressed(false);
    }

    return (
        <>

            <div className="flex cursor-pointer duration-0 min-w-max" style={{ transform: `translateX(${translateXPosition}px)` }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={boxList}>
                {
                    dataList.map((item: ICardSkills) => {
                        return (
                            <div className="m-4 pointer-events-none">
                                <SkillCard data={item} />
                            </div>

                        )
                    })
                }
            </div >

        </>

    )
}