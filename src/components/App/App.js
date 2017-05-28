import React from 'react';
import { Route, Link } from 'react-router-dom';

import ShoppingListContainer from '../../containers/ShoppingListContainer/ShoppingListContainer';

const About = () => { return <h1>About page</h1>; };

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route exact path="/" component={ShoppingListContainer} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
