import React, { Component, useEffect} from "react";
import Images from "./components/Images.js";
import Project from "./Project.jsx";
import { connect } from 'react-redux';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.handleProjects = this.handleProjects.bind(this);
    this.state = {
      projects: [
        {
          key: 0,
          title: "Polabi's Adventure",
          madeWith: ["C++", "Unreal Engine"],
          image: Images[20],
          link: "/projectpage/polabisadventure",
          highlights: <ul>
            <li>Cloth Physics</li>
            <li>Bone Chain</li>
            <li>Player Spell System</li>
            <li>AI Buddy</li>
            <li>Cutscenes</li>
            <li>Shaders</li>
          </ul>
        },
        {
          key: 1,
          title: "Summoner's Dream",
          madeWith: ["C#", "Mod"],
          image: Images[0],
          link: "/projectpage/summonersdream",
          highlights: <ul>
            <li>Sentries and Summons in Terraria</li>           
            <li><br/>New Terraria AI</li>
          </ul>
        },
        {
          key: 2,
          title: "I Hate Boring Quests",
          madeWith: ["C#", "Unity"],
          image: Images[1],
          link: "/projectpage/ihbq",
          highlights: <ul>
            <li>Boss battles</li>
            <li>Quest System</li>
          </ul>
        },
        {
          key: 3,
          title: "Immortal Protector",
          madeWith: ["C#", "Unity", "Teamwork", "Game Jam Winner"],
          image: Images[7],
          link: "/projectpage/immortalprotector",
          highlights: <ul>
            <li>Game Jam winner</li>
            <li>Leadership</li>
          </ul>
        },
        {
          key: 4,
          title: "Luminator",
          madeWith: ["C#", "Unity", "Teamwork", "Game Jam"],
          image: Images[8],
          link: "/projectpage/luminator",
          highlights: <ul>
            <li>Initiative and Leadership</li>
          </ul>
        },
        {
          key: 5,
          title: "LiveSplit",
          madeWith: [
            "C#",
            "Contribution"
          ],
          image: Images[0],
          link: "/projectpage/livesplit",
          highlights: <ul>
            <li>Fixed Crash</li>
          </ul>
        }
      ]
    };
  }

  componentDidMount() {
    this.handleProjects();
  }

  handleProjects() {
    let projectElementsArray = [];
    this.state.projects.forEach(element => {
      const project = <Project project={element} key={element.key} />;
      projectElementsArray.push(project);
    });
    this.setState({ projectElements: projectElementsArray });
  }

  render() {
    return (
      <div className="project-container">
        {this.props.currentPage !== 1 && <ScrollToTop/>}
        <div className="personal-projects">
          <div className="main-projects">
            <h1>Projects</h1>
            <div className="main-projects-display">
              <Project project = {this.state.projects[0]} key={this.state.projects[0].key}/>
              <Project project = {this.state.projects[1]} key={this.state.projects[1].key}/>
              <Project project = {this.state.projects[2]} key={this.state.projects[2].key}/>
              <Project project = {this.state.projects[3]} key={this.state.projects[3].key}/>
              <Project project = {this.state.projects[4]} key={this.state.projects[4].key}/>
            </div>
          </div>         
        </div>
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

export default connect(mapStateToProps, {})(ProjectPage);
