import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import Header from "./component/layout/Header/Header.js";
import Home from "./component/Home/Home";

function App(){
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    })
    }, [])  

    return (
      <Router>

      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         
      </Routes>
      <Footer/>
    </Router>
      // </BrowserRouter>

  );
}
export default App;
  
