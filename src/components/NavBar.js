const Navbar = () => {
    return (
        <nav className="nav-item">
            <div className="logo-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGhBWEaDZWIwGQUPqnswSLJIzMsIApmX7KSlMhRbEYQ&s=10" alt="Laptop" width="100" height="80"/>
            </div>

            <div className="list-item" >
                <ul className="nav-list-item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Product Details</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="nav-actions">

           <button className="cart-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LvqzbnYzS8wigzI4Q7sqWMcpRJfZPoMpTon8qErclg&s=10" height="20" width="20"/>
           </button>
           <button className="cart-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJLJoTQh4qr3iwpoZYC03EIABTDpm8AeWBXpStjG6Iw&s=10" width="20" height="20"/>
           </button>
            </div>

        </nav>
    )
}
export default Navbar;