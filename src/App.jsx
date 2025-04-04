import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import User from './components/User/User';
import users from './assets/users.json';
import CustomButton from './components/CustomButton/CustomButton';

const App = () => {
  const handleClick = evt => {
    return console.log(evt);
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <CustomButton message={'Hello bro'} children={'Bro greed'} />
    </>
  );
};
export default App;
