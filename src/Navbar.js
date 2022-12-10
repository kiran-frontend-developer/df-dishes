import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar border border-primary">
      <h1 className='text-danger'>The Df Dishes</h1>
      <div className="links">
        <Link type="button" className="btn btn-danger me-2 p-1 text-decoration-none" to="/" >Home</Link>
        <Link type="button" className="btn btn-danger me-2 p-1 text-decoration-none" to="/create">New Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar;
