import { FaExclamationTriangle } from "react-icons/fa"
import Link from "next/link"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <h1>
        <FaExclamationTriangle />
        404 Not Found!!
      </h1>
      <p>ここには何もありません＞＜</p>
      <Link href="/">ホームへ戻る</Link>
    </Layout>
  )
}

export default NotFoundPage