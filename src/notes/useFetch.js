import { useState } from "react"

export function GetAll() {
    const [backEndData, setBackEndData] = useState([{}])
    fetch("/notes").then(
        response => response.json()
      ).then(
        data=>{
          setBackEndData(data)
        }
      )
      return backEndData
}