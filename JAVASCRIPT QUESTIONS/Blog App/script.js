// script.js

// Fetch blogs from API and display them in the UI
function fetchBlogs() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((blogs) => {
      const blogList = document.getElementById("blogList");
      blogList.innerHTML = "";

      blogs.forEach((blog) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p>
            <button class="delete" data-id="${blog.id}">Delete</button>
          `;
        blogList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
    });
}

// Add a new blog
function addBlog(event) {
  event.preventDefault();

  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  const newBlog = {
    title: titleInput.value,
    body: contentInput.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((blog) => {
      titleInput.value = "";
      contentInput.value = "";
      console.log(newBlog);

      fetchBlogs(); // Refresh the blog list
    })
    .catch((error) => {
      console.error("Error adding blog:", error);
    });
}

// Delete a blog
function deleteBlog(event) {
  if (event.target.classList.contains("delete")) {
    const blogId = event.target.dataset.id;

    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchBlogs(); // Refresh the blog list
          console.log("Deleted");
        } else {
          console.error("Error deleting blog:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  }
}

// Attach event listeners
document.getElementById("addBlogForm").addEventListener("submit", addBlog);
document.getElementById("blogList").addEventListener("click", deleteBlog);

// Fetch initial blogs on page load
fetchBlogs();
