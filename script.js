const form = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const service = String(formData.get("service") || "").trim();

  formMessage.textContent = `Thanks ${name}. Your ${service.toLowerCase()} request has been received. We will contact you shortly.`;
  form.reset();
});