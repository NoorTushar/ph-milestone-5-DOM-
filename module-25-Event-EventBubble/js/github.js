document.getElementById("deleteBtn").addEventListener("click", () => {
   const textField = document.getElementById("confirm");
   if (textField.value === "delete") {
      document.getElementById("message").style.display = "none";
      textField.value = "";
   }
});
