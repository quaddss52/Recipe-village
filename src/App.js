import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Recipe from './components/pages/Recipe';
import Alert from "./components/layouts/Alert"
import NotFound from './components/pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {TastyProvider} from './components/context/tasty/TastyContext'
import {AlertProvider} from './components/context/alert/AlertContext'
function App() {
  return (
    <TastyProvider>
      <AlertProvider>
    <Router>
       <div className="flex flex-col justify-between h-screen">
        <Navbar/>

        <main className="container mx-auto px-3 pb-12">
        <Alert/>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route  path='/recipe/:id' element={<Recipe/>}/>
            <Route  path='/notfound' element={<NotFound/>}/>
            <Route  path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
       </div>
    </Router>
    </AlertProvider>
    </TastyProvider>
  );
}

export default App;
