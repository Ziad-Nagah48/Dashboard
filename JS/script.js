document.addEventListener("DOMContentLoaded", () => {
  const clientList = document.getElementById("client-list");
  const totalClients = document.getElementById("total-clients");
  const addClientBtn = document.getElementById("add-client-btn");
  const clientNameInput = document.getElementById("client-name");
  const clientEmailInput = document.getElementById("client-email");
  const clientPhoneInput = document.getElementById("client-phone");

  // Add client
  addClientBtn.addEventListener("click", () => {
    const name = clientNameInput.value;
    const email = clientEmailInput.value;
    const phone = clientPhoneInput.value;

    if (name && email && phone) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        `;
      clientList.appendChild(newRow);
      updateTotalClients();

      // Clear input fields
      clientNameInput.value = "";
      clientEmailInput.value = "";
      clientPhoneInput.value = "";

      // Add event listeners to new buttons
      newRow
        .querySelector(".delete-btn")
        .addEventListener("click", deleteClient);
      newRow.querySelector(".edit-btn").addEventListener("click", editClient);
    }
  });

  // Delete client
  const deleteClient = (event) => {
    const row = event.target.closest("tr");
    row.remove();
    updateTotalClients();
  };

  // Edit client
  const editClient = (event) => {
    const row = event.target.closest("tr");
    const name = row.children[0].textContent;
    const email = row.children[1].textContent;
    const phone = row.children[2].textContent;

    clientNameInput.value = name;
    clientEmailInput.value = email;
    clientPhoneInput.value = phone;

    // Remove the row to be edited
    row.remove();
    updateTotalClients();
  };

  // Update total clients count
  const updateTotalClients = () => {
    totalClients.textContent = clientList.children.length;
  };

  // Initial event listeners for existing buttons
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteClient);
  });

  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", editClient);
  });

  // Initialize total clients count
  updateTotalClients();
});
