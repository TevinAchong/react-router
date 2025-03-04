import { Outlet } from 'react-router-dom';

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>
        Every shinobi has a role to play in shaping the future. Whether you're a strategist, 
        a frontline warrior, or a behind-the-scenes tactician, your next mission awaits. 
        Explore a world of opportunities, prove your strength, and rise through the ranks—your ninja way starts here.
        </p>
        <Outlet />
    </div>
  )
}
