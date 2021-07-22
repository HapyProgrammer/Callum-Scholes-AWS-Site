import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';
import Images from "./components/Images.js";
import Clips from "./components/Clips.js";
import { MutedPlayer } from "react-muted-video-player";

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
            <div className="project-page-image">
              <div className="project-page-image-container">
                <img src={Images[7]} alt="ImmortalProtector"/>
                <img src={Images[6]} alt="ImmortalProtector"/>
              </div>
              <div className="project-page-video">
                <MutedPlayer
                  className="project-page-video-player"
                  autoPlay={false}
                  loop={true}
                  muted={true}
                  src={Clips[18]}>
                </MutedPlayer>
              </div>
            </div>
            <p>Immortal protector is the winner of the “48 secret jam - September 2018” with the themes ‘Island’ and ‘Life.</p>
          </div>
          <div className="project-page-description">
            <h1>Leadership</h1>
            <p>I was the leader of this game jam in a team of 4 people. I mostly just guided people on what we needed if they were lost on what to do for the game jam. I especially helped the other programmer as he was a novice programmer in Unity, so I made sure he still was able to contribute a lot with his skill set.</p>
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
