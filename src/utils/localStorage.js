export const setLocalStorage = (itemName, data) => {
  localStorage.setItem(itemName, JSON.stringify(data));
};

export const getObjectLocalStorageData = (itemName) => {
  try {
    const storedData = localStorage.getItem(itemName);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.log(`Failed to get '${itemName}' local storage data.`, error);
    return [];
  }
};

export const getStringLocalStorageData = (itemName) => {
  try {
    const storedData = localStorage.getItem(itemName);
    return storedData ? JSON.parse(storedData) : "";
  } catch (error) {
    console.log(`Failed to get '${itemName}' local storage data.`, error);
    return "";
  }
};
