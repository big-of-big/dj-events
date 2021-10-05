import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"
import Showcase from "./Showcase"
import { useRouter } from "next/router"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="discription" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>
        {children}
      </div>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: "DJ event | 最も熱いパーティーがここにある",
  description: "イベントを探すサイトです。",
  keywords: "music, dj"
}

export default Layout