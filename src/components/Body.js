import mentor from '../mentor.gif';
import Mind from './Mind';
import Contact from './Contact';



const Body = () => {
  return (
    <div>
      <header className="App-header">
      <br /> <br />
      <img src={mentor} className="banner" alt="logo" />
      </header>
      <Mind />
      <Contact />
    </div>
  );
}

export default Body;
