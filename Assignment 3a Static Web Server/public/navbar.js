document.addEventListener("DOMContentLoaded", function() {
    // Fetch the navbar content
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        // Inject the navbar content into the navbar container
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(error => {
        console.error("Error fetching navbar:", error);
      });
  });
  