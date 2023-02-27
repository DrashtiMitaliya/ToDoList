
import './App.css';
import Header from './AllComponents/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import { About } from './AllComponents/About';
import Home from './AllComponents/Home';


function App() {
  

  return (
    <div className="App">
      <Header title="My ToDo List" searchBar={false}></Header>
     
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='about' element={<About/>} />

      </Routes>
    </div>
  );

}
export default App;
