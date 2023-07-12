// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppHeader from './components/header/Header';
import AppHero from './components/hero/Hero';
import AppAbout from './components/about/About';
import AppFeatures from './components/features/Features';
import AppCounter from './components/counter/Counter';
import AppMenu from './components/menu/Menu';
import AppChefs from './components/chefs/Chefs';
import AppBook from './components/book-table/Book';
import AppTestimonials from './components/testimonials/Testimonials';
import AppEvents from './components/events/Events';
import AppGallery from './components/gallery/Gallery';
import AppContact from './components/contact/Contact';
import AppFooter from './components/footer/Footer';
import AppScrollBtn from './components/scroll-btn/Scroll-btn';
import Aos from 'aos';

import PureCounter from "../node_modules/@srexi/purecounterjs/dist/purecounter_vanilla";
const pure = new PureCounter();
new PureCounter();

Aos.init();
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <header>
        <AppHeader/>
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
        <AppFeatures/>
        <AppCounter/>
        <AppMenu/> 
        <AppTestimonials/>
        <AppEvents/>
        <AppChefs/> 
        <AppBook/> 
        <AppGallery/> 
        <AppContact/> 
        <AppFooter/> 
        <AppScrollBtn/> 
      </main>
    </>
  );
}

export default App;
