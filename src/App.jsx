import { Hero, Albums, Aboutus, Footer, Videos, Contact } from "./sections";
import Nav from './components/Nav';

const App = () => (
  <main className="relative overflow-x-hidden">
    <section>
      <Nav />
    </section>  
    <section >
      <Hero />
    </section>
    <section >
      <Aboutus />
    </section>
    <section>
      <Albums />
    </section>
    <section>
      <Videos />
    </section>
    <section>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;