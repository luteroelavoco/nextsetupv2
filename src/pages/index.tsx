import React from 'react'
import Head from 'next/head'
const Home: React.FC = () => {

  return (
    <div className="container-home">
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Brevemente Disponível</h1>
        <p>@Copyright 2020 Lutero Elavoco. All rights reserved.</p>
      </main>
    </div>
  )
}
export default Home
