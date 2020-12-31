import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Contact() {
  return (
    <>
        <Head>
            <title>Contact | Super Sustainable</title>
        </Head>
        <Layout>
            <Container>
                
                <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-secondary text-primary rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Don't be a stranger!</h2>
                        <div className="text-secondary mt-8">
                        Hate forms? Why not head over to <span className="underline">Twitter</span> instead.
                        </div>
                    </div>
                    <div className="mt-8">
                        <Header />
                    </div>
                    </div>
                    <div className="">
                    <div>
                        <span className="uppercase text-sm text-secondary font-bold">Full Name</span>
                        <input className="w-full bg-primary text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-secondary font-bold">Email</span>
                        <input className="w-full bg-primary text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-secondary font-bold">Message</span>
                        <textarea
                        className="w-full h-32 bg-primary text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                        className="p-3 bg-accent hover:bg-primary hover:text-primary border border-accent text-inverse font-bold w-full duration-200 transition-colors">
                        Send Message
                        </button>
                    </div>
                    </div>
                </div>
            </Container>
        </Layout>
    </>
  );
}

