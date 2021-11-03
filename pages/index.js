import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';
import { getSession } from "next-auth/client";
import Sidebar from '../components/Sidebar';
import Feeds from '../components/Feeds';

export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      <main className="flex">
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feeds />
        {/* Widgets */}
      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}