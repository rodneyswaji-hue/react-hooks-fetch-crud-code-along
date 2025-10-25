function handleToggleCart() {
  fetch(`/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isInCart: !isInCart }),
  })
    .then((r) => r.json())
    .then((updatedItem) => onUpdateItem(updatedItem));
}

function handleDelete() {
  fetch(`/items/${id}`, {
    method: "DELETE",
  }).then(() => onDeleteItem(item));
}



