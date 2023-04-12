import OpenMoreButton from "@/components/button/openMoreButton.component";
import PortfolioList from "@/components/portfolioList";
import SkillsList from "@/components/skillsList";
import SocialsList from "@/components/socialsList";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Do Tran Minh Chu Portfolio" />
        <meta property="og:image" content="/image/home_page.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:site_name" content="dotranminhchu" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:description"
          content="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...."
          key="desc"
        />
        <meta property="author" content="Do Tran Minh Chu" />
        <meta property="keywords" content="Do Tran Minh Chu, dotranminhchu, portfolio, nextjs, nodejs" />
      </Head>
      {/* Top Body Home Page */}
      <section className="mx-auto tracking-wider">
        <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h1 className="mb-8 text-6xl font-semibold">Hi,<br></br> I&apos;m Minh Chu,<br></br>Fullstack Web Developer.</h1>
            <div className="flex flex-wrap gap-6 my-3">
              <SocialsList />
            </div>
            <p className="text-gray-200">Front End / Back End / WordPress</p>
          </div>
          <div className="divide-y divide-gray-500 ">
            <div className="py-6">
              <h1 className="py-3 text-2xl font-medium uppercase">About me</h1>
              <p>Full stack autodidact with demonstrable capacity to assess and manage complex business needs and surmount obstacles in the way thereof thus producing refined and accessible work products.</p>
              <OpenMoreButton href="/about-me" className="mt-5 uppercase"><h5>Learn More</h5></OpenMoreButton>
            </div>

            <div className="py-6 my-4">
              <h2 className="py-3 text-2xl font-medium uppercase">My work</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima quia assumenda! Repellendus, numquam commodi eos optio expedita nemo debitis, quis laudantium nisi tempore quo, repellat incidunt eaque laboriosam asperiores?</p>
              <OpenMoreButton href="/portfolio" className="mt-5 uppercase"><h5>Browse portfolio</h5></OpenMoreButton>
            </div>
          </div>
        </div>
      </section>

      {/* About me Body Home Page */}
      <section className="bg-gray-800">
        <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="py-4 text-2xl font-semibold uppercase">
              <span className="text-blue-700 h-14">/</span> About me
            </div>
            <h2 className="py-2 text-5xl font-semibold">I’ve been developing websites since 2020</h2>
            <p className="py-5 text-lg text-gray-300">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            <OpenMoreButton href="/about-me" className="py-3 text-xl font-bold ">More about me</OpenMoreButton>
          </div>
          <div className="p-4 lg:pt-14">
            <div className="grid grid-cols-1 gap-6 xl:gap-40 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
              <div className="flex">
                <div className="text-6xl font-bold">04</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Years of <br></br> experience</div>
              </div>
              <div className="flex">
                <div className="text-6xl font-bold">012</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Successful projects</div>
              </div>
            </div>
            <p className="py-5 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

        </div>
      </section>

      {/* My Skills Body Home Page */}
      <section className="p-4 py-12 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24">
        <div className="">
          <div className="py-4 text-2xl font-semibold uppercase">
            <span className="text-blue-700 h-14">/</span> My skills
          </div>
          <h2 className="py-2 text-5xl font-semibold md:mt-5">My extensive list of skills</h2>
          <SkillsList />
        </div>
      </section >
      {/* My Portfolio Body Home Page */}
      <section className="bg-gray-800">
        <PortfolioList>
          <div>
            <div className="py-4 text-2xl font-semibold uppercase">
              <span className="text-blue-700 h-14">/</span> My portfolio
            </div>
            <h2 className="py-2 text-5xl font-semibold">Take a look at the latest projects I’ve done</h2>
            <OpenMoreButton className="py-3 text-xl font-bold ">Browse all projects</OpenMoreButton>
          </div>
        </PortfolioList>
      </section>

    </>
  )
}
