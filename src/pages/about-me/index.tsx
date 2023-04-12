import Navbar from "@/components/navbar";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
    
      <div className="px-4 py-12 sm:py-18 md:py-24 sm:px-8 md:px-24 xl:px-48">
        <section>
          <h1 className="mb-8 text-6xl font-semibold"> I&apos;m Minh Chu,<br/>Fullstack Web Developer.</h1>
          <p className="max-w-3xl ml-2 text-lg">Full stack autodidact with demonstrable capacity to assess and manage complex business needs and surmount obstacles in the way thereof thus producing refined and accessible work products.</p>
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
                <Link className="inline-block mx-2 text-blue-700 hover:text-blue-600" href={"https://hitek.com.vn"} target="_blank">Hitek software</Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem consectetur
                quas repellendus itaque fuga non eaque quaerat labore placeat cumque inventore nesciunt modi facilis,
                rem iusto illo, aliquam reprehenderit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nesciunt similique alias molestiae minus,
                tempora dignissimos maxime, aperiam esse quasi nam! Omnis unde, cum facere quibusdam earum dolor culpa officia.
              </p>
            </div>
          </div>
        </section >
        <section className="py-2 sm:py-4 md:py-8 xl:py-12">
          <h1 className="mb-5 text-4xl font-semibold">Education</h1>
          <div>
            <div className="py-4 text-2xl font-semibold">
              <span className="text-blue-700">/</span>
              <span className="mx-1 ">Oct 2019 - Current</span>
            </div>
            <div className="ml-2">
              <div className="mb-2 text-xl">
                <span className="text-xl">Software Engineer -</span>
                <Link className="inline-block mx-2 text-blue-700 hover:text-blue-600" href={"https://fpt.edu.vn"} target="_blank">FPT University</Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem consectetur
                quas repellendus itaque fuga non eaque quaerat labore placeat cumque inventore nesciunt modi facilis,
                rem iusto illo, aliquam reprehenderit.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur excepturi quod officiis repellendus cumque distinctio,
                sit vero sed fugit necessitatibus, minus ratione assumenda eligendi debitis officia ad? Maxime, facere sed.
              </p>

            </div>
          </div>
        </section >
      </div>

    </>
  )
}
