import { NextSeo } from "next-seo";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="About | Do Tran Minh Chu"
        description="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...."
        openGraph={{
          url: "/about-me",
          title: "About | Do Tran Minh Chu",
          description:
            "Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,....",
          images: [
            {
              url: "/image/home_page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/home_page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "DoTranMinhChu",
        }}
      />
      {/* */}
      <div className="px-4 py-12 sm:py-18 md:py-24 sm:px-8 md:px-24 xl:px-48">
        <section>
          <h1 className="mb-8 text-6xl font-semibold">
            {" "}
            I&apos;m Minh Chu,
            <br />
            Fullstack Web Developer.
          </h1>
          <p className="max-w-3xl ml-2 text-lg">
            Fullstack autodidact with demonstrable capacity to assess and manage
            complex business needs and surmount obstacles in the way thereof
            thus producing refined and accessible work products.
          </p>
        </section>
        <section className="py-2 sm:py-4 md:py-8 xl:py-12">
          <h1 className="mb-5 text-4xl font-semibold">Work experience</h1>
          <div>
            <div className="py-4 text-2xl font-semibold">
              <span className="text-blue-700">/</span>
              <span className="mx-1 ">Apr 2022 - Apr 2023</span>
            </div>
            <div className="ml-2">
              <div className="mb-2 text-xl">
                <span className="text-xl">Backend Developer -</span>
                <Link
                  className="inline-block mx-2 text-blue-700 hover:text-blue-600"
                  href={"https://hitek.com.vn"}
                  target="_blank"
                >
                  Hitek software
                </Link>
              </div>
              <ul className="pl-8 list-disc">
                <li>
                  Design and develop user-friendly, responsive web applications
                  using a variety of programming languages and web development
                  frameworks, including ExpressJS, NestJS, Kotlin Spring
                  Boot,...
                </li>

                <li>
                  Collaborate with cross-functional teams to identify
                  requirements and develop technical solutions to meet business
                  needs.
                </li>

                <li>
                  Implement web security best practices, including encryption,
                  authentication, and access control.
                </li>

                <li>
                  Perform code reviews and optimize application performance
                  through testing and debugging.
                </li>

                <li>
                  Manage deployment processes and ensure web applications are
                  running smoothly and securely in production environment.s
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-4 text-2xl font-semibold">
              <span className="text-blue-700">/</span>
              <span className="mx-1 ">May 2023 - Aug 2023</span>
            </div>
            <div className="ml-2">
              <div className="mb-2 text-xl">
                <span className="text-xl">Fullstack Developer Freelance -</span>
                <Link
                  className="inline-block mx-2 text-blue-700 hover:text-blue-600"
                  href={"https://findicator.vn/"}
                  target="_blank"
                >
                  Findicator
                </Link>
              </div>
              <ul className="pl-8 list-disc">
                <li>
                  As a software engineer at this company, my primary
                  responsibility is to design and develop an application that
                  provides users with real-time access to the indexes of various
                  industries in the Vietnamese stock market. This includes
                  providing insights into the sales, profit, and overall
                  strength of each stock code.
                </li>

                <li>
                  To achieve this, I will be utilizing the NestJS and NextJS
                  frameworks to design and implement the application.
                </li>

                <li>
                  Throughout the development process, I will also be responsible
                  for testing and debugging the application, as well as ensuring
                  that it meets performance and security standards.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-4 text-2xl font-semibold">
              <span className="text-blue-700">/</span>
              <span className="mx-1 ">Jul 2023 - Current</span>
            </div>
            <div className="ml-2">
              <div className="mb-2 text-xl">
                <span className="text-xl">Backend Developer -</span>
                <Link
                  className="inline-block mx-2 text-blue-700 hover:text-blue-600"
                  href={"https://greenagri.com.vn/"}
                  target="_blank"
                >
                  GREEN Agri
                </Link>
              </div>
              <ul className="pl-8 list-disc">
                <li>
                  Developed GraphQL-based backend development for critical
                  projects Maximized Residue Limits query system for crop
                  cultivation and E-commerce platform.
                </li>

                <li>
                  Ensured seamless integration with frontend teams, optimizing
                  user experience.
                </li>

                <li>
                  Led backend development for the e-commerce platform,
                  integrating third-party services for enhanced functionality.
                </li>

                <li>
                  Demonstrated expertise in Node.js and GraphQL development,
                  delivering scalable solutions in the agricultural technology
                  sector.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-2 sm:py-4 md:py-8 xl:py-12">
          <h1 className="mb-5 text-4xl font-semibold">Education</h1>
          <div>
            <div className="py-4 text-2xl font-semibold">
              <span className="text-blue-700">/</span>
              <span className="mx-1 ">Oct 2019 - Apr 2024</span>
            </div>
            <div className="ml-2">
              <div className="mb-2 text-xl">
                <span className="text-xl">Software Engineer -</span>
                <Link
                  className="inline-block mx-2 text-blue-700 hover:text-blue-600"
                  href={"https://fpt.edu.vn"}
                  target="_blank"
                >
                  FPT University
                </Link>
              </div>

              <ul className="pl-8 list-disc">
                <li>
                  Studied software, including coursework in algorithms, data
                  structures, programming languages, and computer architecture.
                </li>

                <li>
                  Completed a many project on the design and development of a
                  web application using the ReactJS, NextJS, NestJS,
                  ExpressJS,... framework and MongoDB, MySQL database.
                </li>

                <li>
                  {" "}
                  Participated in various hackathons and coding competitions.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
