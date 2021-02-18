import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./componants/Home";
import About from "./componants/About";
import SinglePost from "./componants/SinglePost";
import Post from "./componants/Post";
import Project from "./componants/Project";
import NavBar from "./componants/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      < Route component= {Home} path='/'exact />
      < Route component= {About} path='/about'/>
      < Route component= {SinglePost} path='/post/:slug'/>
      < Route component= {Post} path='/post'/>
      < Route component= {Project} path='/project'/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
