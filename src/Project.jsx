import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { updateCurrentPage, updateProjectPageFadeLeft } from './actions/pageActions'

class Project extends Component {
  constructor(props) {
    super(props);
    this.handleProjectMadeWith = this.handleProjectMadeWith.bind(this);

    this.state = { isHovering: false, isClicked: false };
  }

  componentDidMount() {
    this.handleProjectMadeWith();
    this.props.updateCurrentPage(1);
  }

  handleProjectMadeWith() {
    let madeWithElements = [];
    let key = 0;
    this.props.project.madeWith.forEach(element => {
      let newBackgroundColor = this.handleProjectLanguageColor(element);
      const madeWithElement = <p key={key} style= {{backgroundColor: newBackgroundColor}}>{element}</p>;
      madeWithElements.push(madeWithElement);
      key++;
    });
    this.setState({ madeWithElement: madeWithElements });
  }

  handleIsHovering(hoverState) {
    this.setState({ isHovering: hoverState });
    if (!hoverState) {
      this.setState({ isClicked: hoverState });
    }
  }

  handleIsClicked(clickState) {
    this.setState({ isClicked: clickState });
  }

  handleProjectLanguageColor(language){
    //switch for each language
    let newColor= "blueviolet";
    switch(language){
      case "C++":
        newColor = "lightblue";
        break;
      case "C#":
        newColor = "lightcoral";
        break;
      case "Unity":
        newColor = "lightgreen";
        break;
      case "Unreal Engine":
        newColor = "lightpink"
        break;
      case "Teamwork":
        newColor = "lightsalmon";
        break;
      case "Game Jam Winner":
        newColor ="lightyellow";
        break;
      case "Contribution":
        newColor ="palevioletred";
        break;
      case "Game Jam":
        newColor = "lightseagreen";
        break;

      default:
        break;
    }
    // return color
    return newColor;
  }

  render() {
    return (
      <NavLink
        to={this.props.project.link}
        className="project-section"
        onMouseEnter={() => this.handleIsHovering(true)}
        onMouseLeave={() => this.handleIsHovering(false)}
        activeClassName="active"
      >
        <h2 className="project-title">{this.props.project.title}</h2>
        <div className="project-languages-used">
          {this.state.madeWithElement}
        </div>
        <div className="project-background">
          <div>
            <div className="project-background-image"/>
          </div>
        </div>
        <div className="project-image-wrapper">
          <img className="project-image" src={this.props.project.image} alt={this.props.project.title}/>

        </div>
        <div className="project-description-wrapper">
          <div className="project-highlights-container">
            <ul className="project-highlights">
              {this.props.project.highlights}
            </ul>
          </div>
        </div>
      </NavLink>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    projectPageLeftFade: state.projectPageLeftFade,
  }
}

export default connect(mapStateToProps, {updateCurrentPage, updateProjectPageFadeLeft})(Project);
