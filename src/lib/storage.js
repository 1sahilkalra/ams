import { AsyncStorage } from "react-native"

const storeItem = async (key, item) => {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.warn(error.message);
    }
  }

const retrieveItem = async (key) => {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item =  JSON.parse(retrievedItem);
      console.log(item)
      return item;
    } catch (error) {
      console.warn(error.message);
    }
    return
  }

export { storeItem, retrieveItem }