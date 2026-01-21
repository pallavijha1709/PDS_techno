// Navigation between pages
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const pageId = btn.getAttribute("data-page");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  });
});

// Replace with your backend ngrok URL
const BASE_URL = "YOUR_NGROK_URL";

// Suspicious Shops
const shopsList = document.getElementById("shops-list");
fetch(`${BASE_URL}/suspicious_shops`)
  .then(res => res.json())
  .then(data => {
    data.forEach(shop => {
      const li = document.createElement("li");
      li.textContent = `Shop ID: ${shop}`;
      shopsList.appendChild(li);
    });
  });

// Suspicious Beneficiaries
const beneficiariesList = document.getElementById("beneficiaries-list");
fetch(`${BASE_URL}/suspicious_beneficiaries`)
  .then(res => res.json())
  .then(data => {
    data.forEach(b => {
      const li = document.createElement("li");
      li.textContent = `Beneficiary ID: ${b}`;
      beneficiariesList.appendChild(li);
    });
  });

// Future Prediction
const predictBtn = document.getElementById("predict-btn");
const predictionOutput = document.getElementById("prediction-output");

predictBtn.addEventListener("click", () => {
  const count = document.getElementById("beneficiary-input").value;
  if (!count) return alert("Enter a beneficiary count");

  fetch(`${BASE_URL}/future_prediction/${count}`)
    .then(res => res.json())
    .then(data => {
      predictionOutput.textContent = `Predicted Quantity: ${data.predicted_quantity} kg`;
    });
});