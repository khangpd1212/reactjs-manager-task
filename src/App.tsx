import React, { useState } from "react"
import "./App.css"
import initialData from "./common/data"
import Content from "./layout/Content"
import { Header } from "./layout/Header"
function App() {
  const [data, setData] = useState(initialData)

  return (
    <>
      <Header data={data} setData={setData} />
      <Content data={data} setData={setData} />
    </>
  )
}

export default App
