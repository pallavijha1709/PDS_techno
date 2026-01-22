// Demo data
const shops = [
  { id: 101, risk: "HIGH", reason: "Repeated transactions" },
  { id: 102, risk: "MEDIUM", reason: "Quantity anomaly" },
];

const beneficiaries = [
  { id: 201, risk: "HIGH", reason: "Duplicate entries across shops" },
  { id: 202, risk: "MEDIUM", reason: "Suspicious frequency" },
];

// Render shops
function renderShops() {
  const container = document.getElementById("shop-list");
  container.innerHTML = "";
  shops.forEach(shop => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Shop ID: ${shop.id}</h3>
      <p class="risk-${shop.risk.toLowerCase()}">Risk: ${shop.risk}</p>
      <p>Reason: ${shop.reason}</p>
    `;
    container.appendChild(card);
  });
}

// Render beneficiaries
function renderBeneficiaries() {
  const container = document.getElementById("beneficiary-list");
  container.innerHTML = "";
  beneficiaries.forEach(ben => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Beneficiary ID: ${ben.id}</h3>
      <p class="risk-${ben.risk.toLowerCase()}">Risk: ${ben.risk}</p>
      <p>Reason: ${ben.reason}</p>
    `;
    container.appendChild(card);
  });
}

// Chart.js demo
function renderChart() {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Shop 101", "Shop 102"],
      datasets: [{
        label: "Risk Level",
        data: [3, 2],
        backgroundColor: ["#ff4d4d", "#ffd633"]
      }]
    }
  });
}

// Popup functionality
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closeBtn = document.querySelector(".close");

popupBtn.onclick = () => popup.style.display = "block";
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = (event) => {
  if (event.target === popup) popup.style.display = "none";
};

// Initial load
