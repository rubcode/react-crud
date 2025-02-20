import Layout from './Containers/layout.js';
import Nav from './Containers/nav.js';
function Users() {
    return (
        <>
            <Nav>
                <ul className='items'>
                    <li key="nav_menu_tareas"><a href='/'>Tareas</a></li>        
                </ul>
            </Nav>
            <Layout>
                <h1 className='title'>Usuarios</h1>
            </Layout>
        </>
    )
}

export default Users
