import Head from 'next/head'
import Main from '../components/layouts/main'
import Header from '../containers/header/header'
import MainContainer from '../containers/main'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <Main>
        <Header />
        <MainContainer />
      </Main>
    </div>
  )
}
