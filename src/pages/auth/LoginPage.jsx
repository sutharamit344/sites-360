import { useState } from "react"


const LoginPage = () => {
    const [frmField, setFrmField] = useState({
        name: "",
        phone: "",
        role: "",
        createdAt: ""
        })


  return (
    <div>Login</div>
  )
}

export default LoginPage