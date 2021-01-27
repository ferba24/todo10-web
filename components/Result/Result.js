import Illustration from './Illustration'
import Button from '../Button'
import Link from 'next/link'

const defaultTitle = 'Thanks!'
const defaultDesc = 'Will be in contact really soon. Meanwhile you can know us better'
const defaultLink = '/about-us'
const defaultLinkLabel = 'About us'

export default function Result({
  title = defaultTitle,
  desc = defaultDesc,
  link = defaultLink,
  linkLabel = defaultLinkLabel
}) {
  
  return (
    <div className="text-center">
      <Illustration/>
      <h3 className="mt-5 mb-2">
        {title}
      </h3>
      <div className="text-lg max-w-xs mx-auto mb-6">
        {desc}
      </div>
      <Link href={link} prefetch={false}>
        <a>
          <Button>
            <div className="text-lg px-10">
              {linkLabel}
            </div>
          </Button>
        </a>
      </Link>
    </div>
  )
}