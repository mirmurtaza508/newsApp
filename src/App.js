
import './App.css';
import NavBar from './components/NavBar'
import React, { useState } from 'react'
import News from './components/News';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
const App = ()=> {
 const pageSizes = 5;
 const [progress, setProgress] = useState(0);
 let apiKey=process.env.REACT_APP_NEWS_API;
    return (
      <Router>
      <div style={{backgroundPosition: "center", background: "url(https://lh3.googleusercontent.com/Ja9k5IcRHfrvMqs-TYM9HJOytMi1TsTUJyPCTv0bIpM_mibBo1EMGyeprRhT0DiHW60ZF4raLPV6BHbXbh7d7X3E6Qw=w640-h400-e365-rj-sc0x00ffffff)",backgroundClip: "cover", color: "white", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
        <NavBar/>
        <LoadingBar color="#00FF00" height={3} progress={progress} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSizes} country="in"  category="general"/>}></Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSizes} country="in"  category="general"/>}></Route>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSizes} country="in"  category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSizes} country="in"  category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSizes} country="in"  category="health"/>}></Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSizes} country="in"  category="science"/>}></Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSizes} country="in"  category="sports"/>}></Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSizes} country="in"  category="technology"/>}></Route>
          </Routes>
        </div>
      </div>
      </Router>
    )
   }
   export default App;

