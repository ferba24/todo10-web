import { useState } from 'react'

export default function RadioGroup({children, className, onChange = () => {}}) {

  const [value, setValue] = useState(undefined)

  const childClicked = value => {
    setValue(value)
    onChange({detail: { value }})
  }

  if(!children) return null
  const isArray = Array.isArray(children)
  const childrenArr = isArray ? children : [children]

  const newChildren = childrenArr.map(child => {
    const newChild = { ...child }
    const newProps = { ...newChild.props }
    newProps.onClick = () => childClicked(child.props.value)
    newProps.checked = child.props.value == value
    newChild.props = newProps
    return newChild
  })

  return (
    <div className={className}>
      {newChildren}
    </div>
  )
}