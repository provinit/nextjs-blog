import { PostCard, Categories, PostWidget } from "@/components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections/index";

export default function Home({ posts }) {
  return (
    <main className="container mx-auto px-5 md:px-10 mb-8 ">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.slug} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
