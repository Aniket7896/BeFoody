import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
<div >
   <Navbar/>
   <AllRoutes/>
   <Footer/>
</div>
  );
}

export default App;
