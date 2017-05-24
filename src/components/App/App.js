import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => <h1>Home page</h1>;

const About = () => <h1>About page</h1>;

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);

export default App;
