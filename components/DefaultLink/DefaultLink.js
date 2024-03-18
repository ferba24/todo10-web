import Link from 'next/link'

export default function DefaultLink({ url = '/', children }) {
  return (
    <Link href={url} prefetch={false} style={{ color: '#F79E8C' }} className="underline">
      {children}
    </Link>
  )
}