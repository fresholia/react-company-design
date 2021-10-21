import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import style from "app/styles/career.module.scss"

type openPosition = {
  name: string
  desc: string
}

const openPositions: openPosition[] = [
  {
    name: "Lua Developer (Remote)",
    desc: "Lua konusunda deneyimli, OOP, MVP konusunda bilgili, Docker ve Git kullanımını üst düzey bilen, günün belirli bir zamanını bize ayıracak part-time çalışma arkadaşları arıyoruz.",
  },
  {
    name: "Next.js Developer (Remote)",
    desc: "React konusunda deneyimli ve belirli projelerde bulunmuş, Blitz.js bilgisine sahip, Node.js kullanımını bilen, TypeScript ve JavaScript yazabilen çalışma arkadaşları arıyoruz.",
  },
  {
    name: "UI/UX Designer (Remote)",
    desc: "Paint kullanmasını bilen birisi işte.",
  },
  {
    name: "Human Resources (Tekirdağ)",
    desc: "İnsanlarla iletişimi güçlü, en az önlisans mezunu, stres yönetimi sertifikasına sahip, bilgisayar oyunları ile arası iyi olan insan kaynaklarına arkadaş arıyoruz.",
  },
]

const Career: BlitzPage = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.pageContent}>
          <h2>Açık Pozisyonlar</h2>
          <div className={style.list}>
            {openPositions.map((position) => {
              return (
                <div className={style.item}>
                  <h4>{position.name}</h4>
                  <p>{position.desc}</p>
                </div>
              )
            })}
          </div>
          <p>
            Başvurunuz için CV belgenizle beraber e-posta yoluyla{" "}
            <span className={style.bold}>tech@inception.com.tr </span>
            adresine başvurun.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

Career.suppressFirstRenderFlicker = true
Career.getLayout = (page) => <Layout title="Kariyer - Inception">{page}</Layout>

export default Career
