// ================================
// Demo Data (replace with backend/API later)
// ================================
const shops = [
  { id: 101, risk: "HIGH", reason: "Repeated transactions" },
  { id: 102, risk: "MEDIUM", reason: "Quantity anomaly" },
  { id: 103, risk: "LOW", reason: "Normal distribution" }
];

const beneficiaries = [
  { id: 201, risk: "HIGH", reason: "Duplicate entries across shops" },
  { id: 202, risk: "MEDIUM", reason: "Suspicious frequency" },
  { id: 203, risk: "LOW", reason: "No anomaly detected" }
];

// ================================
// Render Shops Page
// ================================
function renderShops() {
  const container = document.getElementById("shop-list");
  if (!container) return;
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

// ================================
// Render Beneficiaries Page
// ================================
function renderBeneficiaries() {
  const container = document.getElementById("beneficiary-list");
  if (!container) return;
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

// ================================
// Render Reports Page (Chart.js)
// ================================
function renderChart() {
  const canvas = document.getElementById("chart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: shops.map(s => "Shop " + s.id),
      datasets: [{
        label: "Risk Level (HIGH=3, MEDIUM=2, LOW=1)",
        data: shops.map(s => s.risk === "HIGH" ? 3 : s.risk === "MEDIUM" ? 2 : 1),
        backgroundColor: shops.map(s => {
          if (s.risk === "HIGH") return "#ff4d4d";
          if (s.risk === "MEDIUM") return "#ffd633";
          return "#33cc33";
        })
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#fff" } }
      },
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" }, beginAtZero: true, max: 3 }
      }
    }
  });
}

// ================================
// Popup Modal (Home Page)
// ================================
function setupPopup() {
  const popup = document.getElementById("popup");
  const popupBtn = document.getElementById("popupBtn");
  const closeBtn = document.querySelector(".close");

  if (!popup || !popupBtn || !closeBtn) return;

  popupBtn.onclick = () => popup.style.display = "block";
  closeBtn.onclick = () => popup.style.display = "none";
  window.onclick = (event) => {
    if (event.target === popup) popup.style.display = "none";
  };
}

// ================================
// Initialize on Page Load
// ================================
document.addEventListener("DOMContentLoaded", () => {
  renderShops();
  renderBeneficiaries();
  renderChart();
  setupPopup();
});
