// Show welcome text after cap finishes flying
setTimeout(() => {
  document.getElementById("welcome").classList.remove("hidden");
}, 3000); // after cap fly

// Redirect after full intro
setTimeout(() => {
  redirectNow();
}, 7000); // Total: 3s cap + 3s welcome + 1s buffer

function redirectNow() {
  window.location.href = "index.html"; // your real homepage
}
// Show welcome text after cap animation
setTimeout(() => {
  document.getElementById("welcome").classList.remove("hidden");
}, 3000);

// Trigger fade + redirect after full intro
setTimeout(() => {
  triggerFade();
}, 7000);

// Manual skip triggers fade too
function triggerFade() {
  const wrapper = document.getElementById("intro-wrapper");
  wrapper.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500); // Wait for fade-out before redirecting
}
