import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import User from './components/User/User';
import users from './assets/users.json';
import CustomButton from './components/CustomButton/CustomButton';
import UseStateButton from './components/CustomButton/UseStateButton/UseStateButton';

const App = () => {
  const handleClick = evt => {
    return console.log(evt);
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <CustomButton message={'Hello bro'} />
      <UseStateButton />
    </>
  );
};
export default App;
