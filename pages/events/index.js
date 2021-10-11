import Link from "next/link"
// エイリアスをつけなくてもrootpathからできた
import Layout from "/components/Layout"
import { API_URL } from "/config"
import EventItem from "/components/EventItem"

const EventsPage = ({ events }) => {
  
  return (
    <Layout>
      <h1>イベント一覧</h1>
      {events.length === 0 && <h3>イベントはありません</h3>}
      {events.map(evt => (
        <EventItem key={evt.id} evt={evt}/>
      ))}
    </Layout>
  )
}

// この関数はビルド時に実行される
// returnで上のコンポーネントにデータを渡すことができる
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: { events }
  }
}

export default EventsPage