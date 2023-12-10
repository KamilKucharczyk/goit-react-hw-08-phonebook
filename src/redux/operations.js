import axios from 'axios';
const BASEURL = 'https://65760d960febac18d403a33f.mockapi.io/';
export const contactAPI = axios.create({
  BaseURL: 'https://65760d960febac18d403a33f.mockapi.io/',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/contacts`, contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
  return data;
};
