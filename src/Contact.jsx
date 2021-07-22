import React, { Component } from "react";
import ResumePDF from './components/Documents/CallumScholesCV.pdf'; 
import {connect} from 'react-redux';
import { updateCurrentPage, updateProjectPageFadeLeft } from './actions/pageActions'

class Contact extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(2);
    this.props.updateProjectPageFadeLeft(true);
  }
  componentWillUnmount(){
    this.props.updateProjectPageFadeLeft(false);
  }

  handleCopyToClipboard(textToCopy){
    navigator.clipboard.writeText(textToCopy);
    this.handleResetAnimation();
  }

  handleGoToSite(siteToGoTo){
    window.location.href = siteToGoTo;
  }

  handleResetAnimation(){
    var element = document.getElementById('copied-animation');
    element.style.animation = 'none';
    void element.offsetHeight;
    element.style.animation = 'popup 1s ease-in-out 1';
  }

  render() {
    return (
      <div className="contact-section">
        <div className= "center-wrapper">
          <h1>Contact</h1>
          <div className = "email-contact">           
            <h3 onClick={()=>this.handleCopyToClipboard("callum.scholes74@gmail.com")}>callum.scholes74@gmail.com</h3>
          </div>
          <div className = "linkedin-contact">            
            <h3 onClick={()=>this.handleGoToSite("https://www.linkedin.com/in/callum-scholes-71b654123/")}>LinkedIn</h3>
          </div>
          <div className = "github-contact">           
            <h3 onClick={()=>this.handleGoToSite("https://github.com/hapyprogrammer")}>Github</h3>
          </div>
          <div className = "resume-contact">      
            <a href={ResumePDF} target="_blank" rel="noreferrer">
              <h3>Resume</h3>
            </a>        
          </div>
        </div>
        <div className="copy-confirm">
          <h2 id = "copied-animation">Copied!</h2>
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

export default connect(mapStateToProps, {updateCurrentPage, updateProjectPageFadeLeft})(Contact);
