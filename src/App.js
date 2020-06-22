import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./Utils/ApolloClient";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MHeader from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import HomePage from './Routes/HomePage';
import Evaluation from './Routes/PoolEvalutation';
import Products from './Routes/Products';
import SingleProduct from './Routes/SingleProduct'
import Contact from './Routes/Contact';
import TopBar from './Components/Shared/TopBar'
import Thankyou from './Routes/Thankyou'

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App max-w-100 ">
        <TopBar/>
        <MHeader />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/Evaluation" component={Evaluation}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Product/:id" component={SingleProduct}/>
            <Route path="/Thankyou/" component={Thankyou}/>
          </Switch>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;


