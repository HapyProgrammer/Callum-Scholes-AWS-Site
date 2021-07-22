import React, { Component} from "react";
import { Route, NavLink, Switch} from "react-router-dom";
import ProjectPage from "./ProjectPage.jsx";
import ProjectPolabisAdventure from "./ProjectPolabisAdventure.jsx";
import ProjectSummonersDream from "./ProjectSummonersDream.jsx";
import ProjectIHBQ from "./ProjectIHBQ.jsx";
import ProjectImmortalProtector from "./ProjectImmortalProtector.jsx";
import ProjectLiveSplit from "./ProjectLiveSplit.jsx";
import ProjectLuminator from "./ProjectLuminator.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Style.css";
import { connect } from "react-redux";
import { updateProjectPageFadeLeft } from './actions/pageActions';


class App extends Component {
  
  handleChangePage(direction){
    let getCurrentPage = this.props.currentPage;
    let pageToSwitchTo = '';
   
    if(direction === 'left' && getCurrentPage > 0){
      getCurrentPage --;
    }
    
    if(direction === 'right' && getCurrentPage < 2){
      getCurrentPage ++;
    }

    switch(getCurrentPage){
      case 0:
        pageToSwitchTo = "/";
        break;
      case 1:
        pageToSwitchTo = "/projectpage";
        break;
      case 2:
        pageToSwitchTo = "/contact";
        break;
      default:
        pageToSwitchTo = "/";
        break;
    }

    return pageToSwitchTo;
  }

  handleNavBar(currentPageIndex, e){
    if(this.props.currentPage === currentPageIndex){
      e.preventDefault();
    }
  }

  handleProjectPageFadeDirection(direction){
    if (this.props.currentPage === 2){
      this.props.updateProjectPageFadeLeft(true)
      return;
    }

    if(this.props.currentPage === 0){
      this.props.updateProjectPageFadeLeft(false)
      return;
    }

    // if on middle
    if(direction === 'left'){
      this.props.updateProjectPageFadeLeft(true);
    }
    else{
      this.props.updateProjectPageFadeLeft(false);
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="header">
          <div className="header-container">
            <div className = "title-container">
              <h1 className="title">Callum Scholes</h1>
            </div>
            <div className="nav">
              <NavLink  onMouseOver={()=> this.handleProjectPageFadeDirection("right")} onClick={(e) =>this.handleNavBar(0,e)} to="/" className="nav-link" activeClassName="active">
                <div className="button-container">HOME</div>
              </NavLink>
              <NavLink onClick={(e) =>this.handleNavBar(1,e)} to="/projectpage" className="nav-link" activeClassName="active">
                <div className="button-container">PROJECTS</div>
              </NavLink>
              <NavLink  onMouseOver={()=> this.handleProjectPageFadeDirection("left")} onClick={(e) =>this.handleNavBar(2,e)} to="/contact" className="nav-link" activeClassName="active">
                <div className="button-container">CONTACT</div>
              </NavLink>
            </div>
          </div>
        </div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fadeleft">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  {this.props.projectPageLeftFade && <Route exact path="/projectpage" component={ProjectPage} />}                  
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
          
        />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="faderight">
                <Switch location={location}>
                  <Route exact path="/contact" component={Contact} />            
                  {!this.props.projectPageLeftFade && <Route exact path="/projectpage" component={ProjectPage} />}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route path="/projectpage/polabisadventure" component = {ProjectPolabisAdventure}/>
                  <Route path="/projectpage/summonersdream" component = {ProjectSummonersDream}/>
                  <Route path="/projectpage/ihbq" component = {ProjectIHBQ}/>
                  <Route path="/projectpage/immortalprotector" component = {ProjectImmortalProtector}/>
                  <Route path="/projectpage/livesplit" component = {ProjectLiveSplit}/>
                  <Route path="/projectpage/luminator" component = {ProjectLuminator}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    projectPageLeftFade: state.projectPageLeftFade,
  }
}

export default connect(mapStateToProps, {updateProjectPageFadeLeft})(App);


