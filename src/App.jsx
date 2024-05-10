import { Hero, Albums, Aboutus, Footer, Videos, Contact, Marketplace } from "./sections";
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
      <Marketplace />
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