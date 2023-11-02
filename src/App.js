// import './App.css';
//We Import css Properties From The App.css File which Not Only Affects Our App.js File But Also
// It Affects Anything that Component That's Rendered In The Browser That Time

import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' Component={Home} />   {/* Here is Where Yoe Initialize The Path Of Your Website */}

            <Route path='/Create' Component={Create} /> {/* Route path to Create Component*/}

            <Route path='blogs/:id' Component={BlogDetails} /> {/* Route path that Shows Your Blog Details*/}

            <Route path='*' Component={NotFound} /> {/* Route path that Prompts When User inputs an Unkown url*/}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
