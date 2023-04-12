import Link from "next/link";
import OpenMoreButton from "../button/openMoreButton.component";
import SocialsList from "../socialsList";

export default function Footer() {
    return (
        <>
            <footer className="border-t lg:pt-2 border-t-slate-500">
                <div className="grid grid-cols-1 p-4 py-12 border-b sm:gap-16 md:gap-40 xl:gap-24 2xl:gap:40 sm:m-8 md:m-24 xl:mx-48 sm:my-4 md:my-6 md:grid-cols-2 border-b-slate-500">
                    <div className="flex justify-center">
                        <div>
                            <h2 className="my-1 text-3xl font-semibold">Do Tran Minh Chu</h2>
                            <h2 className="my-1 text-2xl font-semibold text-slate-500">Fullstack Web Developer</h2>
                            <div className="flex flex-wrap gap-6 my-3">
                                <SocialsList />

                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 3xl:grid-cols-2">
                        <div className="flex justify-center">
                            <div>
                                <div className="my-2">
                                    <h1 className="text-2xl font-bold">Email me:</h1>
                                    <OpenMoreButton href={"mailto:dotranminhchu@gmail.com"} className="text-xl font-bold ">
                                        dotranminhchu@gmail.com
                                    </OpenMoreButton>
                                </div>
                                <div className="my-2">
                                    <h1 className="text-2xl font-bold">Call me:</h1>
                                    <OpenMoreButton  href={"tel:0947875625"} className="text-xl font-bold ">
                                        0947875625
                                    </OpenMoreButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-6 text-center">
                    <p className="inline">© {new Date().getFullYear()} Copyright:</p>
                    <Link
                        className="font-semibold text-neutral-600 dark:text-neutral-400"
                        href="https://github.com/DoTranMinhChu"
                    > Do Tran Minh Chu</Link>
                </div>

            </footer >
        </>
    )
}