import Link from "next/link"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout title="Aboutページ">
      <h1>About Page</h1>
      <Link href="/">Homeへ</Link>
    </Layout>
  )
}
export default About