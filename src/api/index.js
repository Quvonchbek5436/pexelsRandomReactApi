import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    common: {
      Authorization: "563492ad6f9170000100000190ad6bf4884040c185e6b81b4cf5ead5",
    },
  },
});

export const GetNewsByCategory = async (category) => {
  try {
    const res = await instanceAxios.get(
      `/search?query=${category}&page=2&per_page=40`
    );

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const GetNewsByBackground = async (number,category) => {
  try {
    const res = await instanceAxios.get(
        `/search?query=${category}&page=2&per_page=${number}`
    );

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
