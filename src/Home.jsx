import React, { Component, useEffect} from "react";
import { connect } from 'react-redux';  
import { updateCurrentPage, updateProjectPageFadeLeft } from './actions/pageActions';
import {NavLink} from "react-router-dom";
import Images from "./components/Images.js";



function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Home extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(0);
    this.props.updateProjectPageFadeLeft(false);
  }

  componentWillUnmount(){
    this.props.updateProjectPageFadeLeft(true);
  }

  render() {
    return (      
      <div className="home-container">
        <ScrollToTop/>
        <div className = "about-section">
          <div className="intro-container">
            <div>
            <h2>
              Hi, I'm Callum Scholes, a Melbourne based game developer who creates fun, unique interactive experiences.
            </h2>    
            </div>    
          </div>
        </div>
        <div className = "home-display-section">
          <div className = "home-display-carousel">
            <div className="home-display-card">
              <div className="home-display-image-container">
                <NavLink className="home-display-image-link" to="/projectpage/polabisadventure" activeClassName="active">
                  <div>
                  <img src={Images[20]} alt="Polabi's Adventure"/>

                  </div>
                </NavLink>
              </div>
            </div>
            <div className="home-display-card">
              <div className="home-display-image-container">
                <NavLink className="home-display-image-link" to="/projectpage/summonersdream" activeClassName="active">
                  <div>
                  <img src={Images[0]} alt="Summoners Dream"/>

                  </div>
                </NavLink>
              </div>
            </div>
            <div className="home-display-card-bottom">
              <div className="home-display-image-container-bottom">
                <NavLink className="home-display-image-link-bottom" to="/projectpage/ihbq" activeClassName="active">
                  <div>
                    <img src={Images[1]} alt="IHBQ"/>
     
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps, {updateCurrentPage, updateProjectPageFadeLeft})(Home);
