import OpenMoreButton from "@/components/button/openMoreButton.component";

export default function Home() {
  return (
    <>
      <div className="container m-12 mx-auto tracking-wider max-w-7xl md:m-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-12 ">
            <h1 className="mb-8 text-6xl font-semibold ">Hi,<br></br> I'm Minh Chu,<br></br> Web Developer.</h1>
            <p className="text-gray-200">Front End / Back End / WordPress</p>
          </div>
          <div className="p-12 divide-y divide-gray-500">
            <div className="py-6">
              <h1 className="py-3 text-2xl font-medium uppercase">About me</h1>
              <p>Full stack autodidact with demonstrable capacity to assess and manage complex business needs and surmount obstacles in the way thereof thus producing refined and accessible work products.</p>
              <OpenMoreButton href="/about-me" className="mt-5"><h5>Learn More</h5></OpenMoreButton>
            </div>

            <div className="py-6 my-4">
              <h2 className="py-3 text-2xl font-medium uppercase">My work</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima quia assumenda! Repellendus, numquam commodi eos optio expedita nemo debitis, quis laudantium nisi tempore quo, repellat incidunt eaque laboriosam asperiores?</p>
              <OpenMoreButton href="/about-me" className="mt-5"><h5>BROWSE PORTFOLIO</h5></OpenMoreButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
