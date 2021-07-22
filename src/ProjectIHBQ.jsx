import React, { Component, useEffect} from "react";
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

class ProjectIHBQ extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(3);
  }

  render() {
    return (
      <div className="project-page">
        <ScrollToTop/>
        <div className="project-page-container">
          <div className="project-page-title">
            <h1>I HATE BORING QUESTS</h1>
            <div className="project-page-image">
            <img src={Images[1]} alt="IHBQ"/>
            </div>
            <p>I Hate Boring Quests (IHBQ) is a boss battler where you fight bosses for giving you standard boring quests. </p>
          </div>
          <div className="project-page-description">
            <h1>BOSS BATTLES</h1>
            <div className="project-page-image-container">
              <img src={Images[2]} alt="IHBQ"/>
              <img src={Images[3]} alt="IHBQ"/>
              <img src={Images[4]} alt="IHBQ"/>
              <img src={Images[5]} alt="IHBQ"/>
            </div>
            <div className="project-page-video-container">
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[0]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[1]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[2]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[5]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[6]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[9]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[10]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[11]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[14]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[15]}>
              </MutedPlayer>
			      </div>
            <h3>Here are 4 unique boss battles. Each required a diffrent quest to activate</h3>
          </div>
          <div className="project-page-description">
            <h1>Quest System</h1>
            <div className="project-page-video-container">
            <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[3]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[4]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[7]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[8]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[12]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[13]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[16]}>
              </MutedPlayer>
              <MutedPlayer
                className="project-page-video-player"
                autoPlay={true}
                loop={true}
                muted={true}
                src={Clips[17]}>
              </MutedPlayer>
			      </div>
            <p>I added all of the 4 basic quest types. Fetch quests, Kill quests, escort quests, and gathering quests. The system also allows for much more to be added in the future if I decide to add more content.</p>
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

export default connect(mapStateToProps, {updateCurrentPage})(ProjectIHBQ);
