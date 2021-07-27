import React, { Component, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
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

const code0 = `// Default movement parameters (here for attacking)
float speed = 8f;
float inertia = 20f;
float jumpHeight = 14f;


//gravity
if (projectile.tileCollide) {
    projectile.velocity.Y += 0.4f;
    // 0.1f for arrow gravity, 0.4f for knife gravity
}

// This check implements "terminal velocity". We don't want the projectile to keep getting faster and faster. 
// Past 16f this projectile will travel through blocks, so this check is useful.
if (projectile.velocity.Y > 16f) 
{
    projectile.velocity.Y = 16f;
}
if (canJump && projectile.velocity.Y < 0)
{
    canJump = false;
}

if (foundTarget)
{
    // Minion has a target: attack (here, fly towards the enemy)
    if (distanceFromTarget > 2f)
    {
        // The immediate range around the target (so it doesn't latch onto it when close)
        Vector2 direction = targetCenter - projectile.Center;
        direction.Normalize();
        direction *= speed;
        if(canJump)
        {
            projectile.velocity.Y = -jumpHeight;
        }

        projectile.velocity = (projectile.velocity * (inertia - 1) + direction) / inertia;
    }
}
else
{
    // Minion doesn't have a target: return to player and idle
    if (distanceToIdlePosition > 600f)
    {
        // Speed up the minion if it's away from the player
        speed = 16f;
        inertia = 60f;
    }
    else
    {
        // Slow down the minion if closer to the player
        speed = 12f;
        inertia = 80f;
    }
    if (distanceToIdlePosition > 40f)
    {
        // The immediate range around the player (when it passively floats about)

        // This is a simple movement formula using the two parameters and 
        // its desired direction to create a "homing" movement
        if (canJump && projectile.velocity.X == 0)
        {
            projectile.velocity.Y = -jumpHeight;
        }
        vectorToIdlePosition.Normalize();
        vectorToIdlePosition *= speed;
        projectile.velocity = (projectile.velocity * (inertia - 1) + vectorToIdlePosition) / inertia;
    }
    else
    {
        projectile.velocity = new Vector2(0, projectile.velocity.Y);
    }
}`.trim();

class ProjectSummonersDream extends Component {
    componentDidMount(){
        this.props.updateCurrentPage(3);
    }

  render() {
    return (
      <div className="project-page">
        <ScrollToTop/>
        <div className="project-page-container">
            <div className="project-page-title">
                <h1>Summoners Dream</h1>
                <div className="project-page-image-container">
                    <img src={Images[0]} alt="SummonersDream"/>
                    <img src={Images[21]} alt="SummonersDream"/>
                </div>
               <p>Summoner’s Dream is a mod made for the Summoner class with over 8000 downloads. It was made in Terraria using TModloader. This mod makes progressing through the early stages of the game a lot faster and easier. The new summons will accompany you until the late stages of the game where they will tend to struggle. Hopefully, by then you will have amassed some pretty good summoning gear to make the later bosses doable even in expert difficulty.</p>
            </div>
            <div className="project-page-description">
                <h1>New Terraria AI</h1>
                <SyntaxHighlighter className="project-code-block" language="csharp" style={ dracula }>
                    {code0}
                </SyntaxHighlighter>
                <p>One of the summons was a completely new melee summon I coded myself. Due to there being a limited amount of melee summons in Terraria and even other mods, there was no easy way to make the new AI. I enjoy the idea of them clumping up trying to attack the enemies without overlapping too much to be all in the same position. </p>
            </div>
            <div className="project-page-description">
                <h1>Sentries and summons in Terraria</h1>
                <div className="project-page-image">
                    <img src={Images[0]} alt="SummonersDream"/>                   
                </div>
                <div className="project-page-video">
                <ReactPlayer 
                  className="project-page-video-player"
                  width='100%'
                  height='506.25px'
                  url = "https://youtu.be/m-_lM5KdrWE"/>
              </div>
                <p>This mod adds 3 new summons and 1 new sentry turret. 2 of the summons and the sentry turret use existing AI already built into Terraria’s code. For each of the summons and sentries, I had to make new recipes to craft each item. I also had to balance the summons so they wouldn’t make all the boss battles trivial. These summons do enough consistent damage to allow you to play the summoners play style without relying too much on grinding for powerful rare summons.</p>
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
  
  export default connect(mapStateToProps, {updateCurrentPage})(ProjectSummonersDream);
