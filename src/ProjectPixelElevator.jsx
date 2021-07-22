import React, { Component, useEffect} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { connect } from 'react-redux';
import { updateCurrentPage } from './actions/pageActions';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const code0 = `void Spawn()
{
  //on unit check how many objects to spawn in background
  foreach (Spawnable s in items)
  {
    //check if does not overlap with previous object
    if (delay >= s.canSpawnOnThisY)
    {
      //if no % = current frquency
      //random number
      float rand = Random.Range(0f, 1f);
      //check if spawn
      if (rand < s.currentFrequency)
      {
        //if yes spawn
        Instantiate(s.gO[Random.Range(0, s.gO.Length)], new Vector3(Random.Range(-2.5f, 2.5f), Random.Range(delay, delay + scale)), Quaternion.Euler(0, 0, 0));
        s.canSpawnOnThisY = delay + s.size;
      }
      //if no dont spawn
    }
    //if yes % = 0
    //increase frequency due to frequency rate
    if (s.currentFrequency < s.frequencyMaxPerUnit)
    {
      s.currentFrequency += s.frequencyRate;
    }

    else if (s.currentFrequency >= s.frequencyMaxPerUnit)
    {
      s.currentFrequency = s.frequencyMaxPerUnit;
    }
  }
}`.trim();

const code1 = `public class Spawnable{

	public string name;

	public GameObject[] gO; // game object

	public float size;

	//how common they will be at the start and over time
	[Range(0f,1f)]
	public float frequencyMinPerUnit; //min per unit
	[Range(0f, 1f)]
	public float frequencyMaxPerUnit; // max per unit
	public float frequencyRate; // how much increase per units till its max
	[HideInInspector]
	public float currentFrequency;
	[HideInInspector]
	public float canSpawnOnThisY = 10;

}`.trim();

class ProjectPixelElevator extends Component {

  componentDidMount(){
    this.props.updateCurrentPage(1);
  }

  render() {
    return (
      <div>
        <ScrollToTop/>
        <SyntaxHighlighter className="project-code-block" language="csharp" style={ dracula }>
            {code0}
        </SyntaxHighlighter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps, {updateCurrentPage})(ProjectPixelElevator);
