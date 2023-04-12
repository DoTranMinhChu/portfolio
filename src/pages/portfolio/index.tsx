import OpenMoreButton from "@/components/button/openMoreButton.component";
import PortfolioList from "@/components/portfolioList";
import { projectsList } from "@/data/projectsList";


export default function Projects() {
  return (
    <>
      <section className="bg-gray-800">

        <PortfolioList projectsList={projectsList} cardClassName="bg-gray-900">
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
