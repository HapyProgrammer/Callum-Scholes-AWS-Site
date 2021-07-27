import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';
import Images from "./components/Images.js";
import ReactPlayer from 'react-player'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProjectLuminator extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(3);
  }

  render() {
    return (
      <div className="project-page">
        <ScrollToTop/>
        <div className="project-page-container">
          <div className="project-page-title">
            <h1>Luminator</h1>        
              <div className="project-page-image-container">
                <img src={Images[8]} alt="Luminator"/>
                <img src={Images[9]} alt="Luminator"/>
              </div>
              <div className="project-page-video">
                <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/ugoWFUBbZrE"/>
              </div>
            </div>
            <p>Lumiator is a week-long game jam project with the theme ‘Light’.</p>
          
          <div className="project-page-description">
            <h1>Intiative and Leadership</h1>
            <p>This project taught me a lot about initiative and leadership. I was not the leader of this project at first. However, halfway through the game jam the artist, who was also the project lead, was suddenly unresponsive. I continued what I needed to do on the programming side, but other team members were frustrated with the lack of new art assets to add to the game. I took it upon myself to make the art assets while continuing to make scripts for the project. This gave the team a morale boost nearing the end of the game jam, which allowed us to finish the game on time.</p>
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

export default connect(mapStateToProps, {updateCurrentPage})(ProjectLuminator);
