import axios from "axios";

export const getProducts = async (): Promise<any> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data
  } catch (error) {
    console.log(error);
  }
}