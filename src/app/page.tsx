import Link from 'next/link'

import List from './components/List'

export default function Home() {
  return (
    <main>
      <div>
        <div>TODO(s)</div>
        <Link href="/add">Add</Link>
      </div>
      <List />
    </main>
  )
}
