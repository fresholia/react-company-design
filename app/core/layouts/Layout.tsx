import { ReactNode } from "react"
import { Head, useRouter, Link } from "blitz"

import style from "app/styles/layout.module.scss"

import Logo from "app/core/layouts/Logo"

type LayoutProps = {
  title?: string
  children: ReactNode
}

interface NavItem {
  name: string
  href: string
}

const leftMenus: NavItem[] = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Servisler", href: "/services" },
  { name: "Hakkımızda", href: "/aboutus" },
  { name: "Kariyer", href: "/career" },
]

const rightMenus: NavItem[] = [
  { name: "Blog", href: "/blog" }, // imported to medium
  { name: "Bize Ulaşın", href: "/contactus" },
]

const Layout = ({ title, children }: LayoutProps) => {
  const { asPath } = useRouter()
  return (
    <div className={style.pageContent}>
      <div className={style.linesbg}></div>
      <Head>
        <title>{title || "inceptioncomtr"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Inception.com.tr - Bir oyundan daha fazlası" />
        <meta
          name="description"
          content="Inception Roleplay oyunu GTA: San Andreas üzerinde rol yapmanızı sağlayan bir sunucudur. Oyun içerisinde polis, iş adamı, medyacı, doktor, çete, mafya olabilirsiniz. Yapacaklarınız tamamen hayalinize kalmış ve Amerika'da yaşıyorsunuz!"
        />
        <meta
          name="keywords"
          content="gta roleplay, mta roleplay, roleplay, inception roleplay, irp, mta, irp mta, gtasa roleplay, samp roleplay,  fivem roleplay, gta sa roleplay, roleplay oyunu, roleplay oyunlar, roleplaygame, roleplay game, irpmta, inceptionroleplay, Inception Roleplay, inception Roleplay, Inception roleplay"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no shrink-to-fit=no"
        />
        <meta name="robots" content="index" />
        <meta name="language" content="Turkish" />
        <meta name="author" content="github.com/cleoppa" />
      </Head>
      <div className={style.pageHeader}>
        <div className={style.logoSection}>
          <Logo color="black" />
        </div>
        <div className={style.navsSection}>
          <div className={style.navsPadding}>
            <div className={style.leftNavs}>
              {Object.keys(leftMenus).map((value) => {
                const row = leftMenus[value]
                return (
                  <div
                    className={style.navItem + (asPath == row.href ? " " + style.activeNav : "")}
                    key={value}
                  >
                    <Link href={row.href}>
                      <a>{row.name}</a>
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className={style.rightNavs}>
              {Object.keys(rightMenus).map((value) => {
                const row = rightMenus[value]
                return (
                  <div
                    className={style.navItem + (asPath == row.href ? " " + style.activeNav : "")}
                    key={value}
                  >
                    <Link href={row.href}>
                      <a>{row.name}</a>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
