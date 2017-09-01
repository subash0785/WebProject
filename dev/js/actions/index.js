import * as actionType from './ActionType';
import Axios from 'axios';

const apiUrl = "http://192.168.1.47:7080/Cybersn/jobs";

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const fetchJobSuccess = (jobs)=>{
  console.log('jobs',jobs);
  return{
    type: actionType.FETCH_JOB_SUCCESS,
    jobs
  }
};

export const fatchJobs = () =>{
return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchJobSuccess(response.data))
        console.log('PPPPPPP',response.data);
      })
      .catch(error => {
        throw(error);
        
      });
  };
};