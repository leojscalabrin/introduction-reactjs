import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(10, 20)} name="Leonardo Scalabrin" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 20)} name="Ednaldo Pereira" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
