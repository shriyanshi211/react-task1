import './Home.css';
import picture from '../images/picture.jpg'
import Login from './Login';



function Home() {
  return (
    <div className="Home">
      <aside className="imageside">
       <div className='imagesidecontent'>
        <img src = {picture} className="image" alt="image"/>
        
        <h1>Fitness Made Easy </h1>
        <p>FIBO helps you track your fitness goals and manage your gyms,clients and branches in a one stop solution, saving you time and money!</p>
       
       </div>
      </aside>
      <section className="login">
        <div className="login-content">
        <h1>FITNESS</h1>
         <h2>Login to your Account</h2>
         <h3>Your Own Digital Campaign </h3> 
         <Login/> 
        </div>
      </section>
    </div>
  );
}

export default Home;