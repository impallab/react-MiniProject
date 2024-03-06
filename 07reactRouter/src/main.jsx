import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,Contact,User,Github,GithubInfo } from './components'


//Router creation - Syntax-1:
const routerOne = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:id", //Dynamic route parameter :id
        element:<User/>
      },
      {
        loader:{GithubInfo},
        path:"github",
        element:<Github/>
      }
      
    ]
  }
])

//Router creation - Syntax-2:
const routerTwo = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about'element={<About/>}/>
      <Route path="contact"element={<Contact/>}/>
      <Route path="user/:id"element={<User/>}/>
      <Route loader={GithubInfo} path="github"element={<Github/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerTwo}/>
  </React.StrictMode>,
)
