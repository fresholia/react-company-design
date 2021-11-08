import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/core/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"

import style from "src/styles/contactus.module.scss"

const Contact: BlitzPage = () => {
  return (
    <React.Fragment>
      <div className="pageContent">
        <div className={style.pageSection}>
          <h3>Bize Ulaşın</h3>

          <div className={style.frameSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.133916917339!2d28.00786437101976!3d41.29931360131835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b528af77da714f%3A0xaac32ace1415dc7d!2zQmHEn2zEsWssIE1haG11dGJleSBTay4sIDU5NTAwIMOHZXJrZXprw7Z5L1Rla2lyZGHEnw!5e0!3m2!1str!2str!4v1634841751318!5m2!1str!2str"
              loading="lazy"
            ></iframe>
          </div>
          <h4>Adres Bilgileri</h4>
          <p>
            <span>Cumhuriyet Mah. Mahmut Bey Sok. No:4/3 - 2Tekirdağ/TÜRKİYE</span>
          </p>
          <p>contact@inception.com.tr</p>
        </div>
      </div>
    </React.Fragment>
  )
}

Contact.suppressFirstRenderFlicker = true
Contact.getLayout = (page) => <Layout title="İletişim - Inception">{page}</Layout>

export default Contact
