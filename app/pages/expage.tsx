import React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, InferGetStaticPropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import style from "app/styles/index.module.scss"

const ExPage: BlitzPage = () => {
  return <React.Fragment>hi</React.Fragment>
}

ExPage.suppressFirstRenderFlicker = true
ExPage.getLayout = (page) => <Layout title="ExPage - Inception">{page}</Layout>

export default ExPage
