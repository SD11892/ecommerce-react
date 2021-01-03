import '../styles/globals.css'
import Layout from '../components/layout'
import fetchCategories from '../utils/categoryProvider'

function Ecommerce({ Component, categories, pageProps }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

Ecommerce.getInitialProps = async () => {
  const categories = await fetchCategories()
  return {
    categories
  }
}

export default Ecommerce