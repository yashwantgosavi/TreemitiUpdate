import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import CoursePage from './components/CoursePage';
import ErrorPage from './components/ErrorPage';
import FeaturePage from './components/FeaturePage';
// import CareerGuide from './components/CareerGuide';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <React.Fragment>
                 <Navbar />
                 <Main></Main>
                 <Footer></Footer>
               </React.Fragment>,
      errorElement:<ErrorPage />,         
      children:[
        {
          path:"/",
          element:<Template guidePath ="/careerGuidance"/>,
        },
        {
          path:"/graphic-designing",
          element:<CoursePage  index ="0" />,
        },
        {
          path:"/uiux-designing",
          element:<CoursePage  index ="1"/>,
        },
        {
          path:"/web-designing",
          element:<CoursePage  index ="2"/>,
        },
        {
          path:"/web-developement",
          element:<CoursePage index ="3"/>,
        },
        {
          path:"/digital-marketing",
          element:<CoursePage index ="4" />,
        },
        {
          path:"/app-development",
          element: <CoursePage index ="5"/>,
        },
        {
          path:"/aiml",
          element:<CoursePage index ="6"/>,
        },
        {
          path:"/dev-ops-specialist",
          element:<CoursePage index ="7"/>,
        },
        {
          path:"/career-guidance",
          element:<FeaturePage  index ="0" />,
        },
        {
          path:"/industrial-syllabus",
          element:<FeaturePage  index ="1"/>,
        },
        {
          path:"/experienced-faculties",
          element:<FeaturePage  index ="2"/>,
        },
        {
          path:"/trusted-certifications",
          element:<FeaturePage index ="3"/>,
        },
        {
          path:"/personel-development",
          element:<FeaturePage index ="4" />,
        },
        {
          path:"/placement-assistance",
          element: <FeaturePage index ="5"/>,
        },
        {
          path:"/careerGuidance",
          element:<CareerGuide />,
        },
      ],     
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
export default App;
