/* import  */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./components/05_pages/Top";
import KixDetail from "./components/05_pages/KixDetail";
import Search from "./components/05_pages/Search";
import Favorite from "./components/05_pages/Favorite";
import NotFound from "./components/05_pages/NotFound";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        {/* top */}
        <Route exact path="/" component={Top} />
        {/* kix detail */}
        <Route exact path="/detail/:styleId" component={KixDetail} />
        {/* search */}
        <Route exact path="/search" component={Search} />
        {/* favorite */}
        <Route exact path="/favorite" component={Favorite} />
        {/* not found */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;