import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Problems from "./Component/Problems";
import googledata from "./Data/google.json";
import Navbar from "./Component/Navbar";

function App() {
  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", "Facebook", "Tesla","Netflix", "Alibaba", "PayPal", "Adobe", 
    "Nike", "IBM"
]
  return (
    <Router>
      <Navbar/>
      <Route exact path={"/"}>
            <Problems company="Google" data={googledata} />
        </Route>
      <Switch>
      {companies.map((company) => {
        const companyName = company.toLowerCase().replace(/ /g, "").replace(/(,)/g, "").replace(/\(/g, "").replace(/\)/g, "");

        const companyData = require(`./Data/${companyName}.json`);

        return (
          <Route exact path={`/${companyName}`} key={company}>
            <Problems company={company} data={companyData} />
          </Route>
        );
      })}
    </Switch>

    </Router>
  );
}

export default App;
