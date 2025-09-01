import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [msg, setMsg] = useState("Loading...")

    useEffect(() => {
        fetch("http://localhost:8080/api/hello")
            .then(res => res.text())
            .then(setMsg)
            .catch(() => setMsg("Backend not reachable"))
    }, [])

    return (
        <div style={{fontFamily: "sans-serif", padding: "20px"}}>
            <h1>Frontend + Backend Connected</h1>
            <p>{msg}</p>
        </div>
    )
}

export default App
