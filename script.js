function classify() {
  // Static sample logic (deterministic placeholder)
  const states = ["Stable", "Drift", "Volatile", "Degraded"];

  // Fixed deterministic output for now (can refine later)
  const state = states[1]; // "Drift"

  document.getElementById("state").innerText = state.toUpperCase();
}
