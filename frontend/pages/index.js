import Head from "next/head"
import Link from "next/link"
import groq from "groq"

import { getClient } from "../lib/sanity.server"
import Card from "../components/Card"

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className="dashboard">
      <Head>
        <title>Nomad Travel Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>

      <div className="posts-container">
        {posts?.map((post) => (
          <Link
            key={post._id}
            href="/"
          >
            <Card post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}

// request to Sanity DB
export async function getStaticProps({ preview = false}) {  // not in preview mode
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "username": author->username,
      "categories": categories[]->{id, title},
      "authorImage": author->avatar,
      body,
      mainImage,
      slug,
      publishedAt
    }
  `)
  return {
    props: {
      posts,
    }
  }
}

export default Home
