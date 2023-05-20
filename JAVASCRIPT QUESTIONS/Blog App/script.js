const postsContainer = document.getElementById("posts");
const addPostForm = document.getElementById("addPostForm");
const postTitleInput = document.getElementById("postTitle");
const postBodyInput = document.getElementById("postBody");

// Function to create a blog post element
function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button class="deleteBtn" data-id="${post.id}">Delete</button>
  `;
  return postElement;
}

// Fetch blog posts from the server
function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      postsContainer.innerHTML = ""; // Clear existing posts

      posts.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });

      // Attach event listener to delete buttons
      const deleteButtons = document.getElementsByClassName("deleteBtn");
      Array.from(deleteButtons).forEach((button) => {
        button.addEventListener("click", deletePost);
      });
    })
    .catch((error) => {
      console.error("Error fetching blog posts:", error);
    });
}

// Add a new blog post
function addPost(event) {
  event.preventDefault();

  const newPost = {
    title: postTitleInput.value,
    body: postBodyInput.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);

      // Attach event listener to delete button
      const deleteButton = postElement.querySelector(".deleteBtn");
      deleteButton.addEventListener("click", deletePost);

      // Clear input fields
      postTitleInput.value = "";
      postBodyInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding blog post:", error);
    });
}

// Delete a blog post
function deletePost(event) {
  const postId = event.target.getAttribute("data-id");

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  })
    .then(() => {
      // Remove the post element from the DOM
      const postElement = event.target.parentNode;
      postsContainer.removeChild(postElement);
    })
    .catch((error) => {
      console.error("Error deleting blog post:", error);
    });
}

// Event listener for adding a post
addPostForm.addEventListener("submit", addPost);

// Fetch initial posts
fetchPosts();
