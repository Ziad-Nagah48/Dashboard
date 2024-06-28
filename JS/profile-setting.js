document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const field = this.dataset.field;
      const currentValueElement = document.getElementById(field);
      let newValue = prompt(
        `Enter new ${field}:`,
        currentValueElement.textContent
      );

      // Handle updates if a value is provided
      if (newValue !== null && newValue.trim() !== "") {
        currentValueElement.textContent = newValue;
        alert(`Updated ${field} successfully!`);
      }
    });
  });

  // Placeholder for other button functionalities (change password, manage notifications, update privacy)
  const changePasswordBtn = document.getElementById("changePasswordBtn");
  const manageNotificationsBtn = document.getElementById(
    "manageNotificationsBtn"
  );
  const updatePrivacyBtn = document.getElementById("updatePrivacyBtn");

  changePasswordBtn.addEventListener("click", function () {
    alert("Change password functionality will be implemented later.");
  });

  manageNotificationsBtn.addEventListener("click", function () {
    alert("Manage notifications functionality will be implemented later.");
  });

  updatePrivacyBtn.addEventListener("click", function () {
    alert("Update privacy functionality will be implemented later.");
  });
});
