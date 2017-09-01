import * as actionType from '../actions/ActionType';

const jobReducer = (state=[], action) =>{
  console.log('jobReducer',state, action);
  switch (action.type){
    case actionType.FETCH_JOB_SUCCESS:
    default:
    return state;
  }

}
export default jobReducer;