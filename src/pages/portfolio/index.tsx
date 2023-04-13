import OpenMoreButton from "@/components/button/openMoreButton.component";
import PortfolioList from "@/components/portfolioList";
import { projectsList } from "@/data/projectsList";
import { NextSeo } from "next-seo";


export default function Projects() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Projects | Do Tran Minh Chu"
        description="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...."
        openGraph={{
          url: '/portfolio',
          title: 'Projects | Do Tran Minh Chu',
          description: 'Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,....',
          images: [
            {
              url: '/image/home_page.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/image/home_page.png',
              width: 1200,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            }
          ],
          siteName: 'DoTranMinhChu',
        }}
      />
      {/* */}
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
