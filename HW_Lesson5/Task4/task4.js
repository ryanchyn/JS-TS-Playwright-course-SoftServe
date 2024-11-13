async function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, name: "John Doe", age: 30 });
    }, 1000);
  });
}

async function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, content: "Hello, world!" },
        { postId: 2, content: "Loving this app!" },
      ]);
    }, 2000);
  });
}

async function loadUserProfile(userId) {
  try {
    const userProfile = await fetchUserProfile(userId);
    const userPosts = await fetchUserPosts(userId);

    const combinedObj = { userProfile, userPosts };
    return combinedObj;
  } catch (error) {
    throw new Error("Error loading user data");
  }
}

loadUserProfile(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
