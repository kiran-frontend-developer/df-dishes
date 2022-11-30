
const Navbar = () => {
  return (
    <nav className="navbar border border-primary">
    <h1 className='text-danger'>The Df Dishes</h1>
    <div className="links">
        <button type="button" className="btn btn-danger me-2 p-1 text-decoration-none" href="/">Home</button>
        <button type="button" className="btn btn-danger me-2 p-1 text-decoration-none" href="/">New Blog</button>

    </div>
    </nav>
  )
}

export default Navbar;
