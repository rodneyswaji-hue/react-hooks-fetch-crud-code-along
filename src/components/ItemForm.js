function handleSubmit(e) {
  e.preventDefault();
  fetch("/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddItem(newItem));
}


