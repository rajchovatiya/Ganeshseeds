// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
});

menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  })
);

// Header shadow on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Seed filters + cards
const filtersEl = document.getElementById("filters");
const gridEl = document.getElementById("seedGrid");

function renderFilters() {
  const used = new Set(SEEDS.map((s) => s.category));
  Object.entries(CATEGORIES)
    .filter(([key]) => key === "all" || used.has(key))
    .forEach(([key, label]) => {
      const btn = document.createElement("button");
      btn.className = "chip" + (key === "all" ? " active" : "");
      btn.innerHTML = `${label.en} <span class="gu">${label.gu}</span>`;
      btn.addEventListener("click", () => {
        filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        renderSeeds(key);
      });
      filtersEl.appendChild(btn);
    });
}

function renderSeeds(category = "all") {
  const list = category === "all" ? SEEDS : SEEDS.filter((s) => s.category === category);
  gridEl.innerHTML = list
    .map(
      (s) => `
      <a class="seed-card" href="${s.pdf}" target="_blank" rel="noopener">
        <span class="seed-cat">${CATEGORIES[s.category]?.en || ""}</span>
        <h3>${s.name}</h3>
        <p class="gu seed-gu">${s.nameGu}</p>
        <p class="muted">${s.desc}</p>
        <span class="seed-link">View PDF <span aria-hidden="true">→</span></span>
      </a>`
    )
    .join("");
}

renderFilters();
renderSeeds();

document.getElementById("year").textContent = new Date().getFullYear();
