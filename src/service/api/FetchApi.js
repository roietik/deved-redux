const BASE_URL = "http://localhost:4033/counts";

const FetchApi = {
  getFetch: async function() {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const items = await res.json();
    return items;
  },
  addFetch: async function(itemToAdd) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemToAdd)
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const addedItem = await res.json();
    return addedItem;
  },
  replaceFetch: async function(itemToReplace) {
    if (!itemToReplace.id) {
      throw new Error("Item has to have an id to be updated");
    }
    const res = await fetch(`${BASE_URL}/${itemToReplace.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemToReplace)
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const replacedItem = await res.json();
    return replacedItem;
  },
  removeFetch: async function(itemRemove) {
    if (!itemRemove.id) {
      throw new Error("Item has to have an id to be updated");
    }
    const res = await fetch(`${BASE_URL}/${itemRemove.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const removedItem = await res.json();
    return removedItem;
  }
};

export default FetchApi;
