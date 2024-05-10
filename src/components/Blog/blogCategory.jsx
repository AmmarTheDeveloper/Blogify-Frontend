import { BASE_URL } from "../../Services/BASE_URL";

export const blogCategory = async (token, setCategory) => {
  try {
    const request = await fetch(`${BASE_URL}/blogs/blogCategory`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const response = await request.json();
    setCategory(response.categoryList);
  } catch (error) {
    setCategory(null);
  }
};
