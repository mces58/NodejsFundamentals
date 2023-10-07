const alerts = document.querySelectorAll(".alert");

// set time
setTimeout(() => {
  alerts.forEach((alert) => {
    alert.remove();
  });
}, 4000);
