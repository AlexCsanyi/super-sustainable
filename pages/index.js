import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Super Sustainable</title>
          </Head>
          <div className="flex justify-end pt-4 items-center">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AlexCsanyi" className="text-primary pr-2 font-bold cursor-pointer hover:text-accent">Twitter<span className="text-accent font-extrabold">.</span></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexCsanyi" className="text-primary pr-2 font-bold cursor-pointer hover:text-accent">GitHub<span className="text-accent font-extrabold">.</span></a>
            {theme === 'light' ? <Moon className="text-accent cursor-pointer" size={32} onClick={switchTheme} /> : <Sun className="text-accent cursor-pointer" size={32} onClick={switchTheme} />}
          </div>
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
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
}
