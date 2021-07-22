import React, { Component, useEffect} from "react";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';
import Images from "./components/Images.js";
import Clips from "./components/Clips.js";

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
            <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[0]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[1]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[2]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[5]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[6]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[9]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[10]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[11]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[14]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[15]} type="video/mp4"/>
              </video>
			      </div>
            <h3>Here are 4 unique boss battles. Each required a diffrent quest to activate</h3>
          </div>
          <div className="project-page-description">
            <h1>Quest System</h1>
            <div className="project-page-video-container">
            <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[3]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[4]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[7]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[8]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[12]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[13]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[16]} type="video/mp4"/>
              </video>
              <video
                className="project-page-video-player"
                muted
                controls>
                <source src={Clips[17]} type="video/mp4"/>
              </video>
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
