import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/Images"

const blog = () => {
  return (
    <Layout>
      <h1>backroads blog</h1>
      <Link to="">home</Link>
      <Images />
    </Layout>
  )
}

export default blog
