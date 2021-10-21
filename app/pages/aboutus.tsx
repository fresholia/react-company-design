import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import style from "app/styles/aboutus.module.scss"

type Worker = {
  image: string
  name: string
  badge: string
  desc: string
}

const workers: Worker[] = [
  {
    image: "wp_content/bt.jpg",
    name: "Batuhan Tonga",
    badge: "Manager",
    desc: "Şirket işleyişi ve geleceğiyle ilgili işlerden sorumlu. Inception'u 2010 yılında kurdu, 2017 yılında resmileştirdi.",
  },
  {
    image: "wp_content/ea.jpg",
    name: "Enes Akıllıok",
    badge: "Development Team Leader",
    desc: "Inception'un teknolojik adamı. Tüm sunuculara, kodlara bu adam bakıyor. 2017 yılından beri Inception'da çalışıyor.",
  },
  {
    image: "wp_content/fo.jpg",
    name: "Furkan Özulus",
    badge: "Lua Developer",
    desc: "Front-End ve Back-End geliştiricisi. Teknik işlerden iyi anladığı gibi her iki alanda da fazla başarılı.",
  },
  {
    image: "wp_content/bs.jpg",
    name: "Burak Serdal",
    badge: "Human Resources",
    desc: "Topluluk ile ilgileniyor, yardımcı oluyor. Aynı zamanda oyun evrenini kontrol ediyor, yönetiminde bulunuyor.",
  },
]

const About: BlitzPage = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.aboutLanding}>
          <h2>ekibimizi yakından tanıyın</h2>
        </div>
        <div className={style.workers}>
          {workers.map((worker) => {
            return (
              <div className={style.worker}>
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
