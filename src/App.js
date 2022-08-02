import ReactDOM from "react-dom/client";
import { BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import Header from "./Header";
import Home from './Home'
function App() {

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Checkout/>} />
        <Route path='/profile' element={<Checkout/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

// function Home(){
//   return(
//     // <h1>this is the home page</h1>
//   )
// }

export default App;
