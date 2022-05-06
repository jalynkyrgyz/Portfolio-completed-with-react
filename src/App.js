import {Routes, Route} from "react-router-dom";
import { Navbar, Footer } from "./components";

import { Home, About, Blog, Services, Contact, Notfound } from "./Pages";

import './app.scss';

function App() {
  return (
    <div className="app">
      <header>         
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="blog" element = {<Blog/>} />
          <Route path="services" element = {<Services/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="*" element = {<Notfound/>} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
