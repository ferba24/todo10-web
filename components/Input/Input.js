
export default function Input(props) {
  return (
    <input
      className="form-control"
      {...props}
    />
  )
}

Input.Textarea = props => (
  <textarea
    className="form-control"
    {...props}
  />
)