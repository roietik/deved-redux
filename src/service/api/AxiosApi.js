import axios from "axios";
const BASE_URL = "http://localhost:4033/counts";

const AxiosApi = {
  getAxios: async function() {
    const res = await axios.get(BASE_URL),
      items = res.data;
    return items;
  },
  addAxios: async function(itemToAdd) {
    const res = await axios.post(BASE_URL, itemToAdd),
      addedItem = res.data;
    return addedItem;
  },
  replaceAxios: async function(itemToReplace) {
    if (!itemToReplace.id) {
      throw new Error("TimeBos has to have an id to be updated");
    }
    const res = await axios.put(
        `${BASE_URL}/${itemToReplace.id}`,
        itemToReplace
      ),
      replacedItem = res.data;
    return replacedItem;
  },
  removeAxios: async function(itemRemove) {
    if (!itemRemove.id) {
      throw new Error("TimeBos has to have an id to be updated");
    }
    await axios.delete(`${BASE_URL}/${itemRemove.id}`, itemRemove);
  }
};

export default AxiosApi;
