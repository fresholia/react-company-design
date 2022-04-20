import React from "react"
import Layout from "src/core/layouts/Layout"
import Image from "next/image"
import style from "src/styles/aboutus.module.scss"

type Worker = {
  id: number
  image: string
  name: string
  badge: string
  desc: string
}

const workers: Worker[] = [
  {
    id: 1,
    image: "",
    name: "David Beckham",
    badge: "CEO",
    desc: "He is rockstar.",
  },
]

const About = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.aboutLanding}>
          <h2>ekibimizi yakından tanıyın</h2>
        </div>
        <div className={style.workers}>
          {workers.map((worker) => {
            return (
              <div className={style.worker} key={worker.id}>
                <div className={style.photo}>
                  <Image src={"/" + worker.image} width="339" height="339" />
                </div>
                <div className={style.details}>
                  <h3>
                    {worker.name} <span>{worker.badge}</span>{" "}
                  </h3>
                  <p>{worker.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

About.suppressFirstRenderFlicker = true
About.getLayout = (page) => <Layout title="Hakkımızda - Inception">{page}</Layout>

export default About
