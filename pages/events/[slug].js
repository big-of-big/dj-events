import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "/components/Layout"

const EventPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>Event Page</h1>
      <Link href="/">Homeへ</Link>
      <h3>{router.query.slug}</h3>
    </Layout>
  )
}
export default EventPage