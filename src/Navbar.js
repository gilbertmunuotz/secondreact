import { NavLink, } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <h1>Recipes</h1>
            <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Create" style={{ color: "white", backgroundColor: '#f1356d', borderRadius: '8px' }}>New</NavLink>
                    {/* Using Inline css In React We pass The Properties and Values as Objects 
                Inside Double Curley Brackets */}
            </div>
        </div>
    )
}

export default Navbar