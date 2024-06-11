import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [textAvoz, setTextoAvoz] = useState('')
  const [vozATexto, setvozATexto] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
    
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
  }
  
  function Ingresar() {
    if (usuario == 'admin' && clave == 'admin') {
      alert('Ingresaste')
    }else {
      alert('Datos guardados exitosamente')
    }
  }

  function cambiarTexto(evento) {
    setTextoAvoz(evento.target.value)
  }

  function convertirTextoAvoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textAvoz)
    synth.speak(utterThis)
  }
  
 
  function grabarvozATexto(){
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
    
  }

  

  return (
    <>
    <h1>Inicio de sesion</h1>
     <input  placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
     <input placeholder="Clave"  type="password" name="clave" id="clave"  value={clave} onChange={cambiarClave}/>
     <button onClick={Ingresar}>Ingresar</button>

     <h1>Conversor de voz a texto</h1>
     <br />
     <h3>Conversor de texto a voz</h3>
     <input type="text" id="textAvoz" value={textAvoz} onChange={cambiarTexto}/>
     <button onClick={convertirTextoAvoz}>Convertir</button>

     <h3>Conversor de voz a texto</h3>
     <button onClick={grabarvozATexto}>Grabar</button>
     {vozATexto}
    </>
  )
}

export default App
