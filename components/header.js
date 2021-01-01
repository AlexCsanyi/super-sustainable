import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-accent text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      .
    </h2>
  )
}
