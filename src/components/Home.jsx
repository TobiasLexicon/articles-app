import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to='about'>About</Link>
        <Link to='articles'>Articles</Link>
        <Link to='contact'>Contact</Link>
        <Link to='add-article'>Add Article</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
};
