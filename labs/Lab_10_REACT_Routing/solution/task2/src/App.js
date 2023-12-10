import { Routes, Route, Link } from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Users from './Pages/Users'
import User from './Pages/User'

function App() {
  return (
    <>
      <body>
        <div><Link to="/">Main</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/*">404</Link></div>
        <div><Link to='/users'>Users</Link></div>
        <div><Link to='/users/1'>User 1</Link></div>
        <div><Link to='/users/2'>User 2</Link></div>
        <div><Link to='/users/3'>User 3</Link></div>
      </body>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/users' element={<Users/>}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
