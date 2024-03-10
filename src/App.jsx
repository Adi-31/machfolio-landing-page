import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <Router>
      <>
      <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path='/dashb' element={<Dashboard/>} />
          
          {/* <Route path="*" element={<NotFound />} />   */}
        </Routes>
      </>
    </Router>
  );
}

export default App;