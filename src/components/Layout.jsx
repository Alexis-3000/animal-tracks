import { NavLink, Outlet } from "react-router-dom";

function Layout({ isRabbit }) {
    
  return (
    <>
    <h1><NavLink to={"/"}>Animal Tracks</NavLink></h1>
    <nav>
        <NavLink to={"/fox"}>Fox</NavLink>
        <NavLink to={"/deer"}>Deer</NavLink>
        <NavLink to={"/crow"}>Crow</NavLink>
        <NavLink to={"/rabbit"}>Rabbit</NavLink>
        {
            isRabbit && <NavLink className="more" to={"learn-more"}>Learn More</NavLink>
        }
    </nav>

    <main>
        <Outlet />
    </main>
    </>
  )
}

export default Layout;