const BASE_URL = "http://20.244.56.144/evaluation-service"; 

export const fetchTopUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top-users`);
    if (!response.ok) throw new Error("Failed to fetch top users");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchTrendingPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending-posts`);
    if (!response.ok) throw new Error("Failed to fetch trending posts");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
