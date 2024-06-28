import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./Login";
import Start from "./Welcome";
import Footer from "./Footer"
import Media from "./Media"
import Challenge from "./Challenge"
import Welcome from "./Welcome"


function App() {
  let ifLogin = false
  if (ifLogin) {
    return <Login></Login>
  }
  else return (
    <div className="App">

          <Routes>
              <Route path="start" element={<StartPage />} />
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="media" element={<Media />} />
              <Route path="challenge" element={<Challenge />} />
              <Route path="login" element={<Login />} />
              <Route path="Welcome" element={<Welcome />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes> 
    </div>
  );
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/start">start</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home kk</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function StartPage() {
  return (<Start></Start>);
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
