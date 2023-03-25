import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'



const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () =>{
      logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>My Todo List</h1>
        </Link>

        <nav>
          {user && (
            <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
          </div>
          )}


          {!user && (
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
//when user logged in only show log out and user email
//when user logged out only show log in and signin