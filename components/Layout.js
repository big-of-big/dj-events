import Head from "next/head"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="discription" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </>
  )
}

Layout.defaultProps = {
  title: "DJ event | 最も熱いパーティーがここにある",
  description: "イベントを探すサイトです。",
  keywords: "music, dj"
}

export default Layout