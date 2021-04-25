import Link from 'next/link'
import Button from '../Button'

export default function FeatureHighlight({
  image,
  title,
  desc,
  link,
  linkLabel,
  reverse,
  leftExtra,
  imageStyle,
  onLinkClicked = () => {}
}) {

  const content = (
    <>
      <h3>
        {title}
      </h3>
      <div className="my-5">
        {desc}
      </div>
      {link && (
        <div className="text-center md:text-left">
          <Link href={link}>
            <a onClick={onLinkClicked}>
              <Button className="px-16">
                {linkLabel}
              </Button>
            </a>
          </Link>
        </div>
      )}
    </>
  )

  return (
    <div className={`flex flex-wrap items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-full md:w-5/12 relative flex items-center">
        <img
          className="w-8/12 max-w-xs mx-auto mb-10 md:mb-0 z-10"
          style={imageStyle}
          src={image}
        />
        {leftExtra}
      </div>
      <div className="w-full md:w-7/12">
        <div className="max-w-lg mx-auto">
          {content}
        </div>
      </div>
    </div>
  )
}