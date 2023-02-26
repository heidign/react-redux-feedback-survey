import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route} from 'react-router-dom';
function App() {

  return (
    <Router>
    <div className='App'>
        <Header />
        <Route exact path="/feeling">
          <Feeling/>
        </Route>
        
        <Route exact path="/understanding">
          <Understanding/> 
        </Route>

        <Route exact path="/supported">
         <Supported/> 
        </Route>

        <Route exact path="/comments">
          <Comments/>
        </Route>

        <Route exact path="/review">
          <Review/>  
        </Route>

        <Route exact path="/submission">
          <Submission/>
        </Route>

        <Route exact path="/admin">
          <Admin/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
