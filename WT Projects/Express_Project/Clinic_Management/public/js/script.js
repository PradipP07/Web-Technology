const API = "/api";

// ✅ Book Appointment
async function book() {
  const name = document.getElementById("name").value;

  if (!name) {
    alert("Enter name");
    return;
  }

  const res = await fetch(`${API}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  const data = await res.json();
  alert("Your Token: " + data.token);

  document.getElementById("name").value = "";
}

// ✅ Load Queue (for both queue & doctor pages)
async function loadQueue() {
  try {
    const res = await fetch(`${API}/queue`);
    const data = await res.json();

    const list = document.getElementById("queue");
    if (list) {
      list.innerHTML = "";

      data.queue.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} (Token ${p.token})`;
        list.appendChild(li);
      });
    }

    const currentEl = document.getElementById("current");
    if (currentEl) {
      currentEl.textContent = data.current?.token || 0;
    }

  } catch (err) {
    console.log("Error loading queue");
  }
}

// ✅ Serve Next (Doctor)
async function serveNext() {
  await fetch(`${API}/serve`, { method: "POST" });
  loadQueue();
}

// ✅ AUTO REFRESH (REAL-TIME SIMULATION)
setInterval(loadQueue, 2000);