import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddDisease from "./components/add-disease.component";
import Disease from "./components/disease.component";
import DiseasesList from "./components/diseases-list.component";

// Import translations
import { withTranslation } from 'react-i18next';


class App extends Component {
  render() {
    // Translations as props
    const { t } = this.props;
    

    return (
      
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/diseases" className="navbar-brand">
            {t('nameOfTheGame')}
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/diseases"} className="nav-link">
              {t('diseases')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
              {t('addDisease')}
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/diseases"]} component={DiseasesList} />
            <Route exact path="/add" component={AddDisease} />
            <Route path="/diseases/:id" component={Disease} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withTranslation()(App);
