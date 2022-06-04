import Head from 'next/head'
import Main from '../components/layouts/main'
import MainContainer from '../containers/main'
import LeftNav from '../containers/nav/leftNav'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <Main>
        <LeftNav />
        <MainContainer />
      </Main>
    </div>
  )
}
