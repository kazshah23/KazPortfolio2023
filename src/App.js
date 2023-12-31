import './App.css';
import Home from './Home-Screen/home.js'
import AboutMe from './AboutMe/AboutMe.js'
import Languages from './ProgrammingLanguages/Languages';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';
// import NavBar from './NavBar/NavBar';
import { inject } from '@vercel/analytics';
 


function App() {
  inject();
  return (
    <div className="container">
      {/* <NavBar /> */}
      <Home/>
      <AboutMe />
      <Languages/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
