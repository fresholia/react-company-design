import React, { ReactNode } from "react"
import { Head, useRouter, Link } from "blitz"

import Logo from "app/core/layouts/Logo"
import { SocialIcon } from "react-social-icons"
import style from "app/styles/footer.module.scss"

type socialItem = {
  id: number
  icon: string
  href: string
}

const socialMediaLinks: socialItem[] = [
  { id: 1, icon: "instagram", href: "https://www.instagram.com/inceptionroleplay" },
  { id: 2, icon: "discord", href: "https://discord.gg/nMNXg45X" },
  { id: 3, icon: "youtube", href: "https://www.youtube.com/c/InceptionMedya/" },
  { id: 4, icon: "github", href: "https://github.com/inceptionnet" },
  { id: 5, icon: "linkedin", href: "#" },
]

const Layout = () => {
  return (
    <React.Fragment>
      <div className={style.footer}>
        <div className="pageContent">
          <h2>Bize Ulaşın</h2>
          <p>Bize ulaşmaktan çekinmeyin! Her zaman sizin için buradayız, bir mail uzağınızdayız.</p>
          <p className={style.noPaddingLabel}>İletişim Bilgileri:</p>
          <p className={style.noPaddingLabel}>
            Telefon: <span>+90 535 955 33 67</span>
          </p>
          <p className={style.noPaddingLabel}>
            Adres:{" "}
            <span>
              Cumhuriyet Mah. Mahmut Bey Sok. No:4/3 - Inception Game Productions Office,
              Tekirdağ/TÜRKİYE
            </span>
          </p>

          <div className={style.altContents}>
            <div className={style.content}>
              <Logo color="white" />
              <div className={style.socialLinks}>
                {socialMediaLinks.map((item) => {
                  return (
                    <SocialIcon
                      url={item.href}
                      network={item.icon}
                      bgColor="#ffffff88"
                      key={item.id}
                      style={{ height: 32, width: 32, marginRight: 25 }}
                    />
                  )
                })}
              </div>
            </div>
            <div className={style.content}>
              <p className={style.rightAligned}>
                Inception 2010 yılında start-up olarak kuruldu. Kurulduğundan bu yana ekibini
                büyütmeye ve kendisini geliştirmeye devam ediyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
