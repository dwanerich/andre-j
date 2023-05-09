import '../index.css'
import { NavLink } from "react-router-dom";


const Work = () => {
  return (
    <div>
      <div className="App-header"
      style={{backgroundColor: 'gold'
      }}>
        <br />
         <p style={{border: 'solid 2px rgb(42, 214, 244)', borderRadius: '20px',
        textDecorationLine: 'underline'}}>
        services
        </p>

      <div className="main">
        <NavLink
        to="http://blog.fabric-frequency.com">
        <div className="work">
          rss
        </div>

        </NavLink>

        <NavLink
        to="http://www.dwanerich.com">
        <div className="work">
          apps
          </div>
        </NavLink>
          <NavLink
          to="https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf">
          <div className="work">
          sound
        </div>

          </NavLink>

        <NavLink
          to="/drumkit"
          exact
        >
        <div className="work">
          u/i
          </div>

        </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Work;
