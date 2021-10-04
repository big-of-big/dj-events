import { useRouter } from "next/router"
import Link from "next/link"

const EventPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <h1>Event Page</h1>
      <Link href="/">Homeへ</Link>
      <h3>{router.query.slug}</h3>
    </>
  )
}
export default EventPage