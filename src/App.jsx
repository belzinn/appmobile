function app() {
  const[Message, setMessage] = useState('Olá, mundo')
  return (
    <div>
      <h1>{Message}</h1>
      <button onClick={
        ()=>{setMessage('Olá fui clicado');}
      }></button>
    </div>
  )
}
export default app