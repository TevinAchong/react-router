import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
        <h2>Lost in the Shadows?</h2>
        <p>
        The page you seek is hidden deep within the Hidden Leaf archives… or it simply doesn't exist.
        Return to safety by heading back to the homepage, or continue your quest elsewhere. 
        A true shinobi never stops searching.
        </p>

        <p>Go to the <Link to="/">Homepage</Link> </p>
    </div>
  )
}
