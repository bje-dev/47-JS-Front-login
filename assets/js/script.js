 /**
   * Login 
   */
 const apiBase = "http://127.0.0.1:8001/api"; // URL de la API en el Proyecto 2

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.querySelector("#yourUsername").value.trim();
    const password = document.querySelector("#yourPassword").value.trim();

    try {
      const response = await fetch(`${apiBase}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.detail || "Error desconocido.");

      // Guardar token y redirigir al Proyecto 2 (dashboard)
      localStorage.setItem("authToken", result.token);
      window.location.href = "http://127.0.0.1:8002/dashboard.html";
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
});
