import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobListComponent extends Component {
  constructor(props){
    super(props);
    console.log('JobListComponent',props);
  }

  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>Job List</h1>
          {this.props.children}
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
    console.log('JobListComponentstate',state);
  return {
    jobs: state.jobReducer,
  };
}
export default connect(mapStateToProps)(JobListComponent);