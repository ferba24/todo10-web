import List from '../List'
import Button from '../Button'
import Link from 'next/link'

export default function Plan({
  title,
  price,
  desc,
  list,
  primary,
  url = '/'
}) {
  return (
    <div className="p-5 md:p-2">
      <h4 className="text-center mb-2 text-sm font-semibold">{title}</h4>
      <h2 className="text-center text-blue text-5xl font-bold">${price}</h2>
      <div className="text-center text-sm mt-2 mb-5">{desc}</div>
      <List
        items={list}
        primary={primary}
      />
      <Link href={url}>
        <Button
          type={primary ? 'primary' : 'blue'}
          className="w-full mt-6"
        >
          Get plan
        </Button>
      </Link>
    </div>
  )
}