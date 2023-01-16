
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login'
import PostCreate from './Components/PostCreate';
import AllNote from './Components/AllPost';
import Navbar from './Components/Navbar';
import UpdatePost from './Components/UpdatePost';
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Social Media APP</h1>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/create" element={<PostCreate/>}></Route>
        <Route path="/posts" element={<AllNote/>}></Route>
        <Route path="/update" element={<UpdatePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;