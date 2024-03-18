import Link from 'next/link'

const FooterList = ({ title, items }) => (
  <>
    <div className="font-medium text-lg">
      {title}
    </div>
    {items.map(({ label, path, style, key }) => (
      <div
        key={key || path}
        className="my-1 text-sm"
        style={style}
      >
        {path ? (
          <Link href={path} prefetch={false} shallow={true}>
            {label}
          </Link>
        ) : (
          label
        )}

      </div>
    ))}
  </>
)
export default FooterList