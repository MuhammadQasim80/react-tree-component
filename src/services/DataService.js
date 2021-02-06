import {data} from './data';

const DataService = {
  getData: () => {
    return Promise.resolve(data);
  },
};

export default DataService;
