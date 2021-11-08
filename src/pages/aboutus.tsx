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
    image: "wp_content/bt.jpg",
    name: "Batuhan Tonga",
    badge: "Manager",
    desc: "Şirket işleyişi ve geleceğiyle ilgili işlerden sorumlu. Inception'u 2010 yılında kurdu, 2017 yılında resmileştirdi.",
  },
  {
    id: 2,
    image: "wp_content/ea.jpg",
    name: "Enes Akıllıok",
    badge: "Development Team Leader",
    desc: "Inception'un teknolojik adamı. Tüm sunuculara, kodlara bu adam bakıyor. 2017 yılından beri Inception'da çalışıyor.",
  },
  {
    id: 3,
    image: "wp_content/fo.jpg",
    name: "Furkan Özulus",
    badge: "Lua Developer",
    desc: "Front-End ve Back-End geliştiricisi. Teknik işlerden iyi anladığı gibi her iki alanda da fazla başarılı.",
  },
  {
    id: 4,
    image: "wp_content/bs.jpg",
    name: "Burak Serdal",
    badge: "Human Resources",
    desc: "Topluluk ile ilgileniyor, yardımcı oluyor. Aynı zamanda oyun evrenini kontrol ediyor, yönetiminde bulunuyor.",
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
