// Selecting DOM elements
const postsContainer = document.querySelector(".posts");
const addPostForm = document.getElementById("add-post-form");
const postTitleInput = document.getElementById("post-title");
const postContentInput = document.getElementById("post-content");
const postImageInput = document.getElementById("post-image");

// Function to create a new post element
function createPost(title, content, imageSrc) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const contentElement = document.createElement("p");
  contentElement.classList.add("post-content");
  contentElement.textContent = content;

  if (imageSrc) {
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.alt = title;
    imageElement.classList.add("post-image");
    postDiv.appendChild(imageElement);
  }

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("post-actions");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    postDiv.remove(); // Remove the post when delete button is clicked
  });

  actionsDiv.appendChild(deleteButton);

  postDiv.appendChild(titleElement);
  postDiv.appendChild(contentElement);
  postDiv.appendChild(actionsDiv);

  return postDiv;
}

// Event listener for form submission to add a new post
addPostForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();
  const imageFile = postImageInput.files[0];

  if (title && content) {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const newPost = createPost(title, content, event.target.result);
        postsContainer.appendChild(newPost);

        // Reset form inputs
        postTitleInput.value = "";
        postContentInput.value = "";
        postImageInput.value = "";
      };
      reader.readAsDataURL(imageFile);
    } else {
      const newPost = createPost(title, content);
      postsContainer.appendChild(newPost);

      // Reset form inputs
      postTitleInput.value = "";
      postContentInput.value = "";
      postImageInput.value = "";
    }
  } else {
    alert("Please enter both title and content for the post.");
  }
});
