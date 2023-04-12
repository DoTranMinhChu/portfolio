import { IProps } from "@/interfaces/iProps.interface";
import Navbar from "../navbar";
import React, { ReactNode } from "react";
import Footer from "../footer";



export default function Layout({ children, ...props }: IProps) {
    return (
        <div className="bg-gray-900">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer/>
        </div>
    )
}