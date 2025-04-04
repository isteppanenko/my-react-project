import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import User from './components/User/User';
import users from './assets/users.json';

const App = () => {
  const handleClick = () => {
    return alert('I`m clicked!');
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
export default App;
