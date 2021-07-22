import React, { Component, useEffect } from "react";
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

const code0 = ``.trim();

class ProjectLiveSplit extends Component {

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

export default connect(mapStateToProps, {updateCurrentPage})(ProjectLiveSplit);
