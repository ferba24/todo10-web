import { useState } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 400
  },
  input: {
    border: '3px solid #66F',
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#66F',
    color: 'white',
    padding: 10,
    borderRadius: 10
  }
}

export default function Age() {

  const [age, setAge] = useState(null)

  const calc = () => {
    alert("tu edad es: " + age)
  }
  
  return (

    <div style={styles.container}>
      <div><label htmlFor="age">Tu edad:</label></div>
      <input
        type="text"
        id="age"
        value={age}
        onChange={e => setAge(e.target.value)}
        style={styles.input}
      />
      <div><button style={styles.button} onClick={calc}>Calcular edad</button></div>
    </div>
  )
}