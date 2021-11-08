import Head from "next/head"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const statusCode = 404
  const title = "İstediğiniz sayfa bulunamadı"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <h2>Error: {statusCode}</h2>
      <p>{title}</p>
    </>
  )
}
