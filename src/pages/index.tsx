import OpenMoreButton from "@/components/button/openMoreButton.component";
import PortfolioList from "@/components/portfolioList";
import SkillsList from "@/components/skillsList";
import SocialsList from "@/components/socialsList";
import { projectsList } from "@/data/projectsList"
import { NextSeo } from "next-seo";


export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Do Tran Minh Chu"
        description="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...."
        openGraph={{
          url: '/',
          title: 'Do Tran Minh Chu Portfolio',
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
      {/* Top Body Home Page */}
      <section className="mx-auto tracking-wider">
        <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-40 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
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
              <p>Fullstack web developer with experience designing, developing, and maintaining web applications. Proficient in a variety of programming languages and web development frameworks, with a strong focus on user experience and responsive design. Seeking a challenging position in a dynamic and fast-paced environment.</p>
              <OpenMoreButton href="/about-me" className="mt-5 uppercase"><h5>Learn More</h5></OpenMoreButton>
            </div>

            <div className="py-6 my-4">
              <h2 className="py-3 text-2xl font-medium uppercase">My work</h2>
              <p>Design and develop user-friendly, responsive web applications using a variety of programming languages and web development frameworks. Collaborate with cross-functional teams to identify requirements and develop technical solutions to meet business needs. Implement web security best practices, including encryption, authentication, and access control. Perform code reviews and optimize application performance through testing and debugging.
              </p>
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
                <div className="text-6xl font-bold">02</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Years of <br></br> experience</div>
              </div>
              <div className="flex">
                <div className="text-6xl font-bold">010</div>
                <div className="items-center m-auto ml-4 text-lg font-bold">Successful projects</div>
              </div>
            </div>
            <p className="py-5 text-lg text-gray-300">
              As a full-stack web developer with 2 years of experience, I have extensive knowledge of the Node.js runtime environment and its ecosystem of libraries and tools.In addition, I have specialized in using Next.js, a popular React framework for server-side rendering, static site generation, and hybrid rendering. With Next.js, I have developed SEO-friendly and high-performance websites that provide fast initial page loads and smooth client-side transitions.
              My experience also includes working with various databases, such as MongoDB, MySQL, and PostgreSQL, and integrating them with Node.js and Next.js applications using ORMs, such as Mongoose and TypeORM, Sequelize, Prisma, ...
</p>
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
        <PortfolioList projectsList={projectsList.slice(0, 4)} cardClassName="bg-gray-900">
          <div>
            <div className="py-4 text-2xl font-semibold uppercase">
              <span className="text-blue-700 h-14">/</span> My portfolio
            </div>
            <h2 className="py-2 text-5xl font-semibold">Take a look at the latest projects I’ve done</h2>
            <OpenMoreButton href="/portfolio" className="py-3 text-xl font-bold">Browse all projects</OpenMoreButton>
          </div>
        </PortfolioList>
      </section>

    </>
  )
}
