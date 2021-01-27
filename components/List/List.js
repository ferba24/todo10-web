
export default function List({items, primary}) {
  return (
    <ul className={`list-custom ${primary ? 'primary' : ''}`}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}