import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./page/LandingPage/Main";
import Loading from "./animation/Loading";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Skills from "./components/Skills/Skills";
import Mouse from "./components/Shared/Mouse/Mouse";

function App() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  })
  return (
    <>
      <Mouse />
      <Helmet>
        <html lang="en" />
        <title> | Naman Parashar</title>
        <meta name="description" content="Naman Parashar Portfolio" />
        <meta name="keywords" content="Naman, Parashar, Portfolio, nparashar150, NamanParashar" />
        <meta name="google-site-verification" content="i85RmtUSgXAufFNybjnUCqxvPbcMAQT-C3sjmDtewIo" />
      </Helmet>
    {
      loader === false ? (
        <Router>
          <Switch>
            <Route exact path="/" component={ Main } />
          </Switch>
          <Switch>
            <Route exact path="/skills" component={ Skills } />
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
