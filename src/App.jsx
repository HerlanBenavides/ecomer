import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Card from './pages/Card'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'
import LoginScreen from './pages/LoginScreen'


function App() {
/*
  useEffect(() => {

    const URL ='https://e-commerce-api.academlo.tech/api/v1/users'

    const data = {
      firstName: 'Herlan',
      lastName: 'Benavides',
      email:'herlanbenavidesp@gmail.com',
      password: 'pass123456',
      phone: '9876543210',
      role: 'admin'
    }

    axios.post(URL, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])*/

  //90 04 34 040

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/login' element={<LoginScreen />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/card' element={<Card />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
