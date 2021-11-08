import React from "react"
import Layout from "src/core/layouts/Layout"

import style from "src/styles/index.module.scss"

const Blog = () => {
  return (
    <React.Fragment>
      <div className="pageContent"></div>
    </React.Fragment>
  )
}

Blog.suppressFirstRenderFlicker = true
Blog.getLayout = (page) => <Layout title="Blog - Inception">{page}</Layout>

export default Blog
