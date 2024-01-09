const customNav = {
    borderBottom: '2px solid #000', // สีขอบที่คุณต้องการ
};
const Navbar = () => {
    return (
        <nav style={customNav} className="navbar navbar-expand bg-body-white pt-3">
        <div className="container-fluid justify-content-end">
            <ul className="navbar-nav h4 gap-4 ">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href={'/'}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href={'/owner'}>Owner</a>
              </li>        
            </ul>
         
        </div>
      </nav>
       
    )
}

export default Navbar