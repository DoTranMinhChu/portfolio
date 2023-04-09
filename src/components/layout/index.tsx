import { IProps } from "@/interfaces/IProps.interfact";
import Navbar from "../navbar";
import React, { ReactNode } from "react";



export default function Layout({ children, ...props }: IProps) {
    return (
        <div className="bg-gray-900">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}