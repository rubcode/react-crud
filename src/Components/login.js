import Layout from "./Containers/layout"
import FormLogin from "./Forms/form-login"
import Nav from "./Containers/nav"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <Nav>
                <ul className='items'>
                        <li key="nav_menu_tareas"><a href='Tasks'>Tareas</a></li>
                </ul>
            </Nav>
            <Layout>
                <FormLogin
                    setEmail={setEmail}
                    setPassword={setPassword}
                    
                />
            </Layout>
            </>
        
    )
}

export default Login
