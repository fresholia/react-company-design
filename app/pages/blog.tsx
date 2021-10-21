import React from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

import style from "app/styles/index.module.scss"

const Blog: BlitzPage = () => {
  return (
    <React.Fragment>
      <div className="pageContent"></div>
    </React.Fragment>
  )
}

Blog.suppressFirstRenderFlicker = true
Blog.getLayout = (page) => <Layout title="Blog - Inception">{page}</Layout>

export default Blog
