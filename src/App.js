import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './page/MainPage';
import SigninPage from './page/SigninPage';
import SignupPage from './page/SignupPage';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 만약 메인페이지에 공통의 헤더가 사용되지 않을경우!
          헤더에 조건주기 */}
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/signin/" component={SigninPage} />
          <Route path="/signup/" component={SignupPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
