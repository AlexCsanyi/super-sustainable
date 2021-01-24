import Container from "./container";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-accent">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-primary text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Take Notes <span className="text-accent text-4xl font-bold ">.</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="/contact">
                <a className="mx-3 bg-accent hover:bg-primary hover:text-primary border border-accent text-inverse font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                    Contact
                </a>
            </Link>
            <a
              href="https://alexcsanyi.me/"
              className="text-secondary mx-3 font-bold hover:underline"
            >
              Visit my personal site
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
