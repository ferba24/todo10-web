import List from '../List'
import Button from '../Button'

export default function Plan({
  title,
  price,
  desc,
  list,
  primary,
}) {
  return(
    <div className="p-5 md:p-2">
      <h3 className="text-center mb-2">{title}</h3>
      <h2 className="text-center text-blue text-5xl font-bold">${price}</h2>
      <div className="text-center text-sm my-4">{desc}</div>
      <List
        items={list}
        primary={primary}
      />
      <Button
        type={primary ? 'primary' : 'blue'}
        className="w-full mt-6"
      >
        Get plan
      </Button>
    </div>
  )
}