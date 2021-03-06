import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';
import Images from "./components/Images.js";
import ReactPlayer from 'react-player';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProjectImmortalProtector extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(3);
  }

  render() {
    return (
      <div className="project-page">
        <ScrollToTop/>
        <div className="project-page-container">
          <div className="project-page-title">
            <h1>Immortal Protector</h1>
   
              <div className="project-page-image-container">
                <img src={Images[7]} alt="ImmortalProtector"/>
                <img src={Images[6]} alt="ImmortalProtector"/>
              </div>
              <div className="project-page-video">
              <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/DcxcFay6A0Q"/>
              </div>
            
            <p>Immortal protector is the winner of the “48 secret jam - September 2018” with the themes ‘Island’ and ‘Life.</p>
          </div>
          <div className="project-page-description">
            <h1>Leadership</h1>
            <p>I was the leader of this game jam in a team of 4 people. I guided people on what we needed if they were unsure of what to do for the game jam. I especially helped the other programmer as he was a novice programmer in Unity, so I made sure he still contributed with his skill set.</p>
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

export default connect(mapStateToProps, {updateCurrentPage})(ProjectImmortalProtector);
