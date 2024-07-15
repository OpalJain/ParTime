import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListUserComponents from './components/ListUserComponents'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserComponent from './components/UserComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = { <ListUserComponents />}></Route>
            {/* // http://localhost:3000/users */}
            <Route path='/users' element = { <ListUserComponents />}></Route>
            {/* // http://localhost:3000/add-user */}
            <Route path='/add-user' element = { <UserComponent />}></Route>
            {/* // http://localhost:3000/edit-user/1 */}
            <Route path='/edit-user/:id' element = { <UserComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
