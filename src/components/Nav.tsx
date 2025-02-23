import { NavLink } from "react-router"

const Nav = () => {
  return (
    <div className="nav">
      <h2>Nav</h2>
        <ul> 
          <NavLink to="/event" end>GO TO EVENT</NavLink>
        </ul>
    </div>
  )
}

export default Nav