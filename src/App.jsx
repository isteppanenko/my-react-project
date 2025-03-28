import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import User from './components/User/User';
import users from './assets/users.json'

const App = () => {
  const name = "Niko";
  const message = 'Hello guys, whats up?'
  const age = 10;
  return (
    <>
      <Header />
      {/* <h3>Duo</h3>
      {name ? <h3>{`Hi, ${name}`}</h3> : <h3>Hello, Guest</h3>}
      <p>Lorem ipsum dolor sit, { message}amet consectetur adipisicing elit.</p> */}
      {/* <WelcomeSection /> */}
      {/* {age > 18 ? 'Hello, bro': 'Hello, kid'} */}
      {/* <Footer />   */}
      {/* <Message message ='Hi, there!' isOnline ={true}/>
      <Message author='Alex'message ='hey' isOnline ={true}/>
      <Message author='Alicon'message ='hi,sweety' isOnline ={false}/>
      <Message author='Jack' message='hi bro' isOnline={true} />
      {<ul>{[6, 7, 8, 9, 10].map(key => <li key={key}>{key}</li>)}</ul>} */}
      {<ul>{users.map(user =>
        <li key={user.id}>
          <img src= {user.avatar} alt="photo" width={200} />
          <h3>{user.name}</h3>
        </li>
      )}</ul>}

      {/* <User/> */}
    </>
  )
}
export default App;