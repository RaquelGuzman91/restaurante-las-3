// Bloquear menú contextual (clic derecho)
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// Bloquear combinaciones de teclas comunes
document.addEventListener("keydown", function(e) {
  // Ctrl+S (guardar página)
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
  }
  // Ctrl+U (ver código fuente)
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
  // Ctrl+Shift+I o F12 (herramientas de desarrollador)
  if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || e.key === "F12") {
    e.preventDefault();
  }
});
