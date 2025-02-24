import Layout from "./Containers/layout"
import FormLogin from "./Forms/form-login"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Layout>
            <FormLogin
                setEmail={setEmail}
                setPassword={setPassword}
                
            />
        </Layout>
    )
}

export default Login
