import Head from 'next/head'
import Body from '../containers/body'
import BodyLayout from '../containers/layouts/body-layout'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <Body>
          <h1>This is a text</h1>
        </Body>
      </BodyLayout>
    </div>
  )
}
