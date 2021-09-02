import Head from 'next/head'
import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import Post from '../components/Post';
import { sortByDate } from '../utils'


export default function Home({ posts }) {
  console.log(posts);
  return (
    <div >
      <Head>
        <title>Dev blog</title>
      </Head>

      <main >
        <div className="posts">
          {posts.map((post, index) =>
            <Post post={post} key={index} />

          )}
        </div>
      </main>

      <footer >

      </footer>
    </div>
  )
}


export async function getStaticProps() {
  // get files from the post directory
  const files = fs.readdirSync(path.join('posts'))

  // get slug and frontmatter from posts

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')

    // get the frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    const { data: frontmatter } = matter(mdWithMeta)



    return {
      slug,
      frontmatter
    }
  })



  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}

