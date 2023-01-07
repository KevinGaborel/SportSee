import axios from "axios";
import PropTypes from "prop-types";
import {USER_MAIN_DATA as user, USER_AVERAGE_SESSIONS as average, USER_PERFORMANCE as perf, USER_ACTIVITY as activity} from "../datas/datas";
import User from "../models/user";
import Activity from "../models/activity";
import Average from "../models/average";
import Perf from "../models/perf";

/**
* It is a asynchronous function that takes an number and returns a promise data
* @param {number} id  data from a id user
* @return {Promise<object>} promise of data object
*/

export const getDatasApi = async (id) => {
  const baseUrl = "http://localhost:4000/user/";

  const endPoints = [
    `${baseUrl}${id}`,
    `${baseUrl}${id}/activity`,
    `${baseUrl}${id}/average-sessions`,
    `${baseUrl}${id}/performance`,
  ];

  return Promise
    .all(endPoints.map(endPoint => axios.get(endPoint)))
    .then(( [{data: user}, {data: activity}, {data: average}, {data: perf}] ) => {

      const userData = new User(user.data.id, user.data.keyData, user.data.todayScore ? user.data.todayScore : user.data.score, user.data.userInfos);
      const activityData = new Activity(activity.data.sessions, activity.data.userId);
      const averageData = new Average(average.data.sessions, average.data.userId);
      const perfData = new Perf(perf.data.data, perf.data.kind, perf.data.userId);

      const result = {
        user: userData.validate() ? userData : undefined , 
        activity: activityData.validate() ? activityData : undefined , 
        average: averageData.validate() ? averageData : undefined ,
        perf: perfData.validate() ? perfData : undefined ,
      }

      return result;
    })
    
    .catch((error) => {
      console.error(error);
    });
   
};

getDatasApi.propTypes = {
  id: PropTypes.number
};



/**
* It is a synchrone function that takes an number and returns a data
* @param {number} id  data from a id user
* @return {object} data object
*/

export const getDatasMocked = (id) => {
  id = parseInt(id);
  
  const formatData = (datas) => {
    let result = {};
    
    for(const data of datas) {
      result = {...result, ...data};
    }
    
    return result;
  }

  let datas = [
    {user: user.find(value => value.id === id)}, 
    {average: average.find(value => value.userId === id)}, 
    {perf: perf.find(value => value.userId === id)}, 
    {activity: activity.find(value => value.userId === id)}
  ];

  datas = formatData(datas);

  const userData = new User(datas.user.id, datas.user.keyData, datas.user.score ? datas.user.score  : datas.user.todayScore, datas.user.userInfos);
  const activityData = new Activity(datas.activity.sessions, datas.activity.userId);
  const averageData = new Average(datas.average.sessions, datas.average.userId);
  const perfData = new Perf(datas.perf.data, datas.perf.kind, datas.perf.userId);

  const result = {
    user: userData.validate() ? userData : undefined , 
    activity: activityData.validate() ? activityData : undefined , 
    average: averageData.validate() ? averageData : undefined ,
    perf: perfData.validate() ? perfData : undefined ,
  }

  return result;
 };

getDatasMocked.propTypes = {
  id: PropTypes.number
};