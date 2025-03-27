import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';

const App = () => {
  const name = "Niko";
  const message = 'Hello guys, whats up?'
  return (
    <>
      <Header />
      <h3>Duo</h3>
      {name ? <h3>{`Hi, ${name}`}</h3> : <h3>Hello, Guest</h3>}
      <p>Lorem ipsum dolor sit, { message}amet consectetur adipisicing elit.</p>
      <WelcomeSection />
      <Footer />
    </>
  )
}
export default App;