import React, { Component } from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <h1>hello from tours page!!!</h1>
        <Button big>first button</Button>
        <Button color="yellow">second button</Button>
      </Layout>
    )
  }
}
