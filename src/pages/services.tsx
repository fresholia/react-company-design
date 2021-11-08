import React from "react"
import Layout from "src/core/layouts/Layout"
import style from "src/styles/index.module.scss"

type ServiceEnums = {
  id: number
  icon: string
  title: string
}

const services: ServiceEnums[] = [
  { id: 1, icon: "</>", title: "Web Tasarım" },
  { id: 2, icon: "", title: "" },
]

const Services = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.landingContent}>
          <h2 className={style.headerContent + " " + style.fullWidth}>
            Servislerimiz hakkında bilgi alın
          </h2>
          <p className={style.contentLabel + " " + style.fullWidth}>
            Inception Game Productions olarak teknoloji alanında birçok hizmetimiz mevcut. Bununla
            beraber internet sayfaları, oyun sunucu dosyaları, veritabanı optimizasyonları, sosyal
            medya asistanlığı gibi birçok konuda size yardımcı oluyoruz. Size en iyi imkanları
            sunarak en yüksek başarıya ulaşmanızı sağlıyoruz. Sizin için her şeyi yapmaya hazırız.
            Aşağıda hangi servislerimizin olduğu yazıyor.
          </p>
          <div className={style.serviceItems}>
            {services.map((service) => {
              return (
                <div className={style.item} key={service.id}>
                  <h2>{service.icon}</h2>
                  <span>{service.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Services.suppressFirstRenderFlicker = true
Services.getLayout = (page) => <Layout title="Servisler - Inception">{page}</Layout>

export default Services
