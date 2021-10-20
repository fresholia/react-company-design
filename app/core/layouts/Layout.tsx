import { ReactNode } from "react"
import { Head, useRouter, Link } from "blitz"

import style from "app/styles/layout.module.scss"

type LayoutProps = {
  title?: string
  children: ReactNode
}

interface NavItem {
  name: string,
  href: string
}

const leftMenus: NavItem[] = [
  {name: 'Servisler', href: '/'},
  {name: 'İş', href: '/'},
  {name: 'Hakkımızda', href: '/'},
  {name: 'Kariyer', href: '/'}
]

const rightMenus: NavItem[] = [
  {name: 'Blog', href: '/'},
  {name: 'Bize Ulaşın', href: '/'}
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
          <svg id="logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1380.000000pt" height="170.000000pt" viewBox="0 0 1380.000000 170.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1130 1510 l0 -195 677 -650 c372 -357 680 -651 685 -653 4 -2 8 363 8 812 l0 816 -145 0 -145 0 0 -500 c0 -275 -3 -500 -7 -500 -5 0 -248 240 -540 532 l-533 533 0 -195z"/> <path d="M12100 1510 l0 -195 677 -650 c372 -357 680 -651 685 -653 4 -2 8 363 8 812 l0 816 -145 0 -145 0 0 -500 c0 -275 -3 -500 -7 -500 -5 0 -248 240 -540 532 l-533 533 0 -195z"/> <path d="M3685 1658 c-2 -7 -11 -71 -20 -143 -9 -71 -19 -138 -21 -147 -5 -16 1 -17 68 -12 84 7 167 -10 250 -52 68 -34 168 -135 202 -203 23 -45 31 -52 49 -47 12 3 82 20 155 37 72 18 132 36 132 40 0 20 -54 127 -94 188 -111 167 -302 293 -508 335 -94 20 -207 21 -213 4z"/> <path d="M10787 1533 c-24 -191 -28 -175 41 -168 133 15 279 -42 387 -150 113 -113 155 -215 155 -377 0 -292 -222 -518 -510 -518 -245 0 -453 172 -505 417 -18 85 -18 121 -1 205 19 86 56 164 106 221 22 25 40 50 40 57 0 12 -89 312 -94 318 -2 1 -32 -20 -67 -47 -156 -121 -270 -318 -300 -521 -14 -97 -7 -247 16 -335 22 -86 105 -250 164 -322 102 -124 274 -232 435 -273 109 -27 302 -28 408 -1 533 137 787 737 515 1221 -57 102 -196 240 -299 298 -133 75 -267 112 -408 112 l-66 0 -17 -137z"/> <path d="M330 845 l0 -795 155 0 155 0 0 795 0 795 -155 0 -155 0 0 -795z"/> <path d="M4880 845 l0 -795 500 0 500 0 0 120 0 120 -345 0 -345 0 0 555 0 555 324 0 323 0 27 113 c14 61 26 115 26 120 0 4 -227 7 -505 7 l-505 0 0 -795z"/> <path d="M6300 845 l0 -795 155 0 155 0 2 257 3 258 240 6 c259 6 312 15 409 67 72 38 157 126 190 195 76 161 74 390 -5 538 -37 69 -121 151 -196 192 -72 38 -192 67 -282 67 l-76 0 -57 -123 -57 -122 112 -8 c135 -9 202 -37 254 -105 40 -52 53 -98 53 -183 0 -114 -65 -208 -169 -244 -34 -11 -90 -15 -233 -15 l-188 0 0 405 0 405 -155 0 -155 0 0 -795z"/> <path d="M7730 1500 l0 -140 615 0 615 0 0 140 0 140 -615 0 -615 0 0 -140z"/> <path d="M9320 845 l0 -795 155 0 155 0 0 795 0 795 -155 0 -155 0 0 -795z"/> <path d="M3220 1486 c-143 -114 -252 -299 -286 -486 -79 -436 185 -855 605 -961 74 -19 104 -21 230 -16 160 5 209 16 326 73 157 77 281 199 361 358 24 48 44 93 44 100 0 7 -57 26 -137 45 -76 19 -145 36 -153 38 -10 2 -25 -15 -44 -52 -57 -111 -152 -193 -272 -236 -83 -30 -225 -30 -308 0 -172 62 -292 202 -331 387 -18 86 -18 122 0 207 16 78 53 155 100 213 l34 41 -48 163 c-27 90 -52 165 -57 167 -5 2 -34 -17 -64 -41z"/> <path d="M8190 620 l0 -570 155 0 155 0 0 513 0 512 -93 34 c-50 18 -120 44 -154 57 l-63 23 0 -569z"/> <path d="M5391 865 c-34 -63 -61 -117 -61 -120 0 -3 108 -5 240 -5 l240 0 0 120 0 120 -179 0 -179 0 -61 -115z"/> <path d="M1130 484 l0 -434 145 0 145 0 0 399 c0 372 -1 400 -17 405 -10 3 -75 19 -145 34 l-128 29 0 -433z"/> <path d="M12100 484 l0 -434 145 0 145 0 0 399 c0 372 -1 400 -17 405 -10 3 -75 19 -145 34 l-128 29 0 -433z"/> </g>
          </svg>
        </div>
        <div className={style.navsSection}>
          <div className={style.navsPadding}>
            <div className={style.leftNavs}>
              {
                Object.keys(leftMenus).map(value => {
                  const row = leftMenus[value];
                  return (
                    <div className={style.navItem + (asPath == row.href ? ' ' + style.activeNav : '')}>
                      <Link href={row.href}>
                        <a>{row.name}</a>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
            <div className={style.rightNavs}>
            {
                Object.keys(rightMenus).map(value => {
                  const row = rightMenus[value];
                  return (
                    <div className={style.navItem + (asPath == row.href ? ' ' + style.activeNav : '')}>
                      <Link href={row.href}>
                        <a>{row.name}</a>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
