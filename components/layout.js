import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div className="container mx-auto px-5 mt-5 mb-20">
                <Nav />
            </div>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
}
