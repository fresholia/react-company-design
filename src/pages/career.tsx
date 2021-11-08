import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/core/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"

import style from "src/styles/career.module.scss"

type openPosition = {
  id: number
  name: string
  desc: string
}

const openPositions: openPosition[] = [
  {
    id: 1,
    name: "Lua Developer (Remote)",
    desc: "Lua konusunda deneyimli, OOP, MVP konusunda bilgili, Docker ve Git kullanımını üst düzey bilen, günün belirli bir zamanını bize ayıracak part-time çalışma arkadaşları arıyoruz.",
  },
  {
    id: 2,
    name: "Next.js Developer (Remote)",
    desc: "React konusunda deneyimli ve belirli projelerde bulunmuş, Blitz.js bilgisine sahip, Node.js kullanımını bilen, TypeScript ve JavaScript yazabilen çalışma arkadaşları arıyoruz.",
  },
  {
    id: 3,
    name: "UI/UX Designer (Remote)",
    desc: "Paint kullanmasını bilen birisi işte.",
  },
  {
    id: 4,
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
                <div className={style.item} key={position.id}>
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
