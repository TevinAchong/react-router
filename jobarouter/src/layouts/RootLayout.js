import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Jobarouter</h1>
                {/* As opposed to Link, NavLink gives you a class attribute for your a tag */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}
