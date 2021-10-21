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
        <script src="/index.public.js" />
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
