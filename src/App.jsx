import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./page/Main";
import Loading from "./animation/Loading";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import About from "./components/About/About";
function App() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  })
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title> | Naman Parashar</title>
        <meta name="description" content="Naman Parashar Portfolio" />
        <meta name="keywords" content="Naman, Parashar, Portfolio, nparashar150, NamanParashar" />
      </Helmet>
    {
      loader === false ? (
        <Router>
          <Switch>
            <Route exact path="/" component={ Main } />
          </Switch>
          <Switch>
            <Route exact path="/about" component={() => (<About />)} />
          </Switch>
      </Router>
      ) : (
        <Loading />
      )
    }
    </>
  );
}

export default App;
