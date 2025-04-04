const axios = require('axios');

const BASE_URL = "http://20.244.56.144/evaluation-service";

// Function to get users
const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        console.log("Users:", response.data);
    } catch (error) {
        console.error("Error fetching users:", error.response ? error.response.data : error.message);
    }
};

// Function to get posts for a specific user (e.g., user ID = 1)
const getUserPosts = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
        console.log(`Posts for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching posts for user ${userId}:`, error.response ? error.response.data : error.message);
    }
};

// Function to get comments for a specific post (e.g., post ID = 150)
const getPostComments = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
        console.log(`Comments for Post ${postId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error.response ? error.response.data : error.message);
    }
};

// Execute API calls
(async () => {
    await getUsers();
    await getUserPosts(1);
    await getPostComments(150);
})();
