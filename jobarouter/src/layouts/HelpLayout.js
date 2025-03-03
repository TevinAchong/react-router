import { Outlet, NavLink } from "react-router-dom";


export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>
            Need assistance navigating Shinobi Jobs? Our Website Help section will guide you through mission 
            applications, profile setup, and everything you need to rise through the ranks like a true shinobi.
        </p>

        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
