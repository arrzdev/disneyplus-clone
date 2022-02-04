import Head from 'next/head'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}

//server side rendering
export async function getServerSideProps(context){
  
}

export default Home