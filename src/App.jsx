import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import User from './components/User/User'
import Github, {githubLoader} from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route path='home' element={<Home />} />
  <Route path='contact' element={<Contact />} />
  <Route path='about' element={<About />} />
  <Route path='user/:userid' element={<User />} />
  <Route path='github' loader={githubLoader} element={<Github />} />

</Route>
 )
)

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Use RouterProvider to provide the router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
