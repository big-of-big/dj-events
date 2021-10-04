import Link from "next/link"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <h1>ホーム</h1>
      <Link href="/about">Aboutページへ</Link>
      <br />
      <Link href="/events">Eventsページへ</Link>
      <br />
      <Link href="/events/hoge">Event-sulgページへ</Link>
    </Layout>
  )
}

export default Home