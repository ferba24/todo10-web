export default function parseDataForEmail(values) {
  let result = { ...values }
  for(const prop in values) {
    const value = values[prop]
    console.log(value)
    if(Array.isArray(value))
    result[prop] = value.join(', ')
  }
  return result
}