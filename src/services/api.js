import axios from "axios";
import {USER_MAIN_DATA as user, USER_AVERAGE_SESSIONS as average, USER_PERFORMANCE as perf, USER_ACTIVITY as activity} from "../datas/datas";


const baseUrl = "http://localhost:4000/user/";

// api datas
export const getDatasApi = async (id) => {

  const endPoints = [
    `${baseUrl}${id}`,
    `${baseUrl}${id}/activity`,
    `${baseUrl}${id}/average-sessions`,
    `${baseUrl}${id}/performance`,
  ];

  return Promise
    .all(endPoints.map(endPoint => axios.get(endPoint)))
    .then(( [{data: user}, {data: activity}, {data: average}, {data: perf}] ) => {
        return { user, activity, average, perf };
      })
    
    .catch((error) => {
      console.error(error);
    });
   
};





// mocked datas

export const getDatasMocked = (id) => {
  let datas = [{user}, {average}, {perf}, {activity}];

  const formatData = (items, id) => {
    let result = {};
    
    for(let item of items) {
      item[Object.keys(item)] = {data: item[Object.keys(item)].find(value => value.id === id || value.userId === id)};
      result = {...result, ...item};
    }
    
    return result;
  }
  
  datas = formatData(datas, id);

  return datas
 };