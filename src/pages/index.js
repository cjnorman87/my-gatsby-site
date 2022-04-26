import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import MyComponent from '../components/my-component'

const IndexPage = () => {
	return (
    <Layout pageTitle="Home Page">
					<p> I'm making this by following the Gatsby Tutorial.</p>
          <MyComponent></MyComponent>
    </Layout>
	)
}

export default IndexPage
