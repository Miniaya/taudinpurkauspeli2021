import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/cases';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject);

const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`);
  return 'success';
};

export default {
  getAll,
  create,
  update,
  remove,
};
