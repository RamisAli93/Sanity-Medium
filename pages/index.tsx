import Head from "next/head"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Posts from "../components/Posts"
import { Post } from "../typings"
import { sanityClient, urlFor } from "../sanity"
import { GET_ALL_POSTS } from "../dorq/queries"

interface Props {
  data: [Post] // posts is a type of Post Array
}
const Home = ({ data }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Posts posts={data} />
    </div>
  )
}

export default Home
export const getServerSideProps = async () => {
  const data = await sanityClient.fetch(GET_ALL_POSTS)
  return {
    props: {
      data,
    },
  }
}
