
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=10; 
  const apiKey=process.env.REACT_APP_NEWS_API;
  // state={
  //   progress:0
  // }
  // setState({progress:0})
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country="IN" category="general"/> */}
       <Routes>
       
            <Route exact path="/general" element={<News setProgress={setProgress}  apikey={apiKey} key="general" pageSize={pageSize} country="IN" category="General" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business" pageSize={pageSize} country="IN" category="Business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={pageSize} country="IN" category="Entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health" pageSize={pageSize} country="IN" category="Health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science" pageSize={pageSize} country="IN" category="Science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports" pageSize={pageSize} country="IN" category="Sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology" pageSize={pageSize} country="IN" category="Technology" />} />
        
          
        </Routes>
       </Router>
      </div>
    )
  
}
export default App;

