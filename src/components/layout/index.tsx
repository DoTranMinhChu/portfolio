import Navbar from "../navbar";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}


export default function Layout({ children, ...props }: Props) {
    return (
        <div className="bg-gray-800">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}