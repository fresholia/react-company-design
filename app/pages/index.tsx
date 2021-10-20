import React, { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import style from "app/styles/index.module.scss"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
}

export async function getStaticProps(context) {
  const res = await fetch("https://www.inception.com.tr/api/v1/game/total_players.php")
  const data = await res.json()

  return {
    props: {data}
  }
}

const Home: BlitzPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const totalPlayersCount: number = data ? data.total : 0
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.landingContent}>
          <h2 className={style.headerContent}>Oyunların ne kadar gerçekçi olabileceğini hayal edin.</h2>
          <p className={style.contentLabel}>Multi Theft Auto oyun istemcisinin içerisinde gerçek hayatı oyuncularımıza yaşatıyoruz. Oyun gerçekçiliği hakkında sürekli çalışıyor ve belirli kurallar ile oyun hissini en doruklara çıkarıyoruz.</p>
          <div className={style.onlinesContent}>
            <div className={style.greenDot}></div>
            <span>Hizmetlerimizi anlık olarak {totalPlayersCount} kişi kullanıyor.</span>
          </div>
          <img className={style.headerImage} src="right-content.png"></img>
        </div>

        <div className={style.ourServices}>
          <h4>hizmetlerimiz</h4>
          <div className={style.serverList}>
            {
              Object.keys(data).map(key => {
                if (key != 'total') {
                  const row = data[key];
                  return (
                    <div className={style.item}>
                        <span>{row.name}</span>
                        <p>Platform: {row.platform}</p>
                        <p>Oyuncu: {row.players}</p>
                        <p>IP: {row.ip}</p>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className={style.longLabels}>
          <div className={style.absolutePath}>
          
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Ana Sayfa - Inception">{page}</Layout>

export default Home
