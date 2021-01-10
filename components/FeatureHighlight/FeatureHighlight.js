import Link from 'next/link'
import Button from '../Button'

export default function FeatureHighlight({
  image,
  title,
  desc,
  link,
  linkLabel,
  reverse
}) {

  return (
    <div className={`flex flex-wrap items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-full md:w-4/12">
        <img
          className="w-8/12 max-w-sm mx-auto mb-10 md:mb-0"
          src={image}
        />
      </div>
      <div className="w-full md:w-8/12">
        <h3 className="text-3xl font-medium">
          {title}
        </h3>
        <div className="my-5">
          {desc}
        </div>
        {link && (
          <div className="text-center md:text-left">
            <Link href={link}>
              <a>
                <Button className="px-16">
                  {linkLabel}
                </Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}