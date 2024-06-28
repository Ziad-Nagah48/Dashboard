document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const totalProducts = document.getElementById("total-products");
  const addProductBtn = document.getElementById("add-product-btn");
  const productNameInput = document.getElementById("product-name");
  const productCategoryInput = document.getElementById("product-category");
  const productPriceInput = document.getElementById("product-price");

  // Add product
  addProductBtn.addEventListener("click", () => {
    const name = productNameInput.value;
    const category = productCategoryInput.value;
    const price = productPriceInput.value;

    if (name && category && price) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${name}</td>
          <td>${category}</td>
          <td>$${price}</td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        `;
      productList.appendChild(newRow);
      updateTotalProducts();

      // Clear input fields
      productNameInput.value = "";
      productCategoryInput.value = "";
      productPriceInput.value = "";

      // Add event listeners to new buttons
      newRow
        .querySelector(".delete-btn")
        .addEventListener("click", deleteProduct);
      newRow.querySelector(".edit-btn").addEventListener("click", editProduct);
    }
  });

  // Delete product
  const deleteProduct = (event) => {
    const row = event.target.closest("tr");
    row.remove();
    updateTotalProducts();
  };

  // Edit product
  const editProduct = (event) => {
    const row = event.target.closest("tr");
    const name = row.children[0].textContent;
    const category = row.children[1].textContent;
    const price = row.children[2].textContent.slice(1); // Remove dollar sign

    productNameInput.value = name;
    productCategoryInput.value = category;
    productPriceInput.value = price;

    // Remove the row to be edited
    row.remove();
    updateTotalProducts();
  };

  // Update total products count
  const updateTotalProducts = () => {
    totalProducts.textContent = productList.children.length;
  };

  // Initial event listeners for existing buttons
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteProduct);
  });

  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", editProduct);
  });

  // Initialize total products count
  updateTotalProducts();
});
