import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import JobListComponent from './../containers/JobListComponent';

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br/>
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
        <div className="column auto">
          <JobListComponent></JobListComponent>
        </div>
      </div>
      </div>
  )
}
export default App;
