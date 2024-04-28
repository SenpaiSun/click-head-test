import axios from "axios";

export const getProducts = async (): Promise<any> => {
  console.log('123');
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('123');
    return response.data
  } catch (error) {
    console.log(error);
  }
}