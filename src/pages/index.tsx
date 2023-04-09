import OpenMoreButton from "@/components/button/openMoreButton.component";
import SkillCard from "@/components/cards/skillCard.component";
import { skillsList } from "@/data/skillsList";
import { ICardSkills } from "@/interfaces/iCardSkills.interface";

export default function Home() {

  return (
    <>
      {/* Top Body Home Page */}
      <div className="mx-auto tracking-wider">
        <div className="grid grid-cols-1 gap-6 m-12 md:m-24 md:grid-cols-1 lg:grid-cols-2">
          <div className="p-12">
            <h1 className="mb-8 text-6xl font-semibold ">Hi,<br></br> I'm Minh Chu,<br></br> Web Developer.</h1>
            <p className="text-gray-200">Front End / Back End / WordPress</p>
          </div>
          <div className="p-12 divide-y divide-gray-500">
            <div className="py-6">
              <h1 className="py-3 text-2xl font-medium uppercase">About me</h1>
              <p>Full stack autodidact with demonstrable capacity to assess and manage complex business needs and surmount obstacles in the way thereof thus producing refined and accessible work products.</p>
              <OpenMoreButton href="/about-me" className="mt-5 uppercase"><h5>Learn More</h5></OpenMoreButton>
            </div>

            <div className="py-6 my-4">
              <h2 className="py-3 text-2xl font-medium uppercase">My work</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima quia assumenda! Repellendus, numquam commodi eos optio expedita nemo debitis, quis laudantium nisi tempore quo, repellat incidunt eaque laboriosam asperiores?</p>
              <OpenMoreButton href="/about-me" className="mt-5 uppercase"><h5>Browse portfolio</h5></OpenMoreButton>
            </div>
          </div>
        </div>
      </div>

      {/* About me Body Home Page */}
      <div className="bg-gray-800 ">
        <div className="grid grid-cols-1 gap-6 px-12 py-24 m-12 md:m-24 md:grid-cols-1 lg:grid-cols-2 gap-x-40">
          <div className="">
            <div className="py-4 text-2xl font-semibold uppercase">
              <span className="text-blue-700 h-14">/</span> About me
            </div>
            <h2 className="py-2 text-5xl font-semibold">I’ve been developing websites since 2020</h2>
            <p className="py-5 text-lg text-gray-300">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            <OpenMoreButton className="py-3 text-xl font-bold ">More about me</OpenMoreButton>
          </div>
          <div className="p-4 lg:pt-14">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
              <div className="flex">
                <div className="text-6xl font-bold">04</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Years of <br></br> experience</div>
              </div>
              <div className="flex">
                <div className="text-6xl font-bold">015</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Successful projects</div>
              </div>
            </div>
            <p className="py-5 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

        </div>
      </div>


      <div className="p-12 ">
        <div className="max-w-7xl md:m-24">

          <div className="py-4 text-2xl font-semibold uppercase">
            <span className="text-blue-700 h-14">/</span> My skills
          </div>
          <h2 className="py-2 text-5xl font-semibold">My extensive list of skills</h2>
          {
            skillsList.map((item: ICardSkills) => {
              return (
                <SkillCard data={item} />
              )
            })
          }

        </div>

      </div >

    </>
  )
}
