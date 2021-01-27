const validateChildren = children => {
  if(!children) return false
  if(Array.isArray(children)) {
    console.error('You can only pass one child to a <Form.Item>')
    return false
  }
  if(typeof children != 'object') {
    console.error('The child of this <Form.Item> is not a valid component.')
    return false
  }
  return true
}
export default validateChildren