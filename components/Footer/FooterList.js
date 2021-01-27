import Link from 'next/link'

const FooterList = ({title, items}) => (
  <>
    <div className="font-medium text-lg">
      {title}
    </div>
    {items.map(({label, path, style}) => (
      <div
        key={path}
        className="my-1 text-sm"
        style={style}
      >
        <Link href={path} prefetch={false} shallow={true}>
          <a>{label}</a>
        </Link>
      </div>
    ))}
  </>
)
export default FooterList