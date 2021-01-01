import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <Layout>
                <Container>
                <Head>
                    <title>Super Sustainable</title>
                </Head>
                <Intro />
                {heroPost && (
                    <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts(["title", "date", "category", "slug", "author", "coverImage", "excerpt"]);

    return {
        props: { allPosts },
    };
}
