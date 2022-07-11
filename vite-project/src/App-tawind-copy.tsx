interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps ) {
  return <button className="bg-violet-500 px-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {//TSX
  return (
    <div className="flex gap-2">
    <h1> Hello World</h1>
    <button>Ok</button>
    <Button text="Ok" />
    <Button text="Enviar" />
    </div>
  )
}

export default App
