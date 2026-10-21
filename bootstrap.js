(async function () {
  try {
    const n = 15;
    const parts = [];
    for (let i = 0; i < n; i++) {
      const name = "app.b64.c" + String(i).padStart(2, "0") + ".txt";
      parts.push(await (await fetch(name)).text());
    }
    const code = atob(parts.map((t) => t.trim()).join(""));
    const s = document.createElement("script");
    s.textContent = code;
    document.body.appendChild(s);
  } catch (e) {
    document.body.innerHTML =
      '<pre style="color:red;padding:2rem;direction:ltr">Load error: ' + e + "</pre>";
  }
})();
