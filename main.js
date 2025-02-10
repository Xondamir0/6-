const elForm = document.getElementById("form");
const elInput = document.getElementById("user");
const box = document.getElementById("list");

elForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = elInput.value.trim();

  if (inputValue) {
    const newItem = document.createElement("li");
    newItem.innerHTML = `
      <div class="flex items-center gap-[10px]">
          <input class="check" type="checkbox">
          <span class="soz text-black font-bold">${inputValue}</span>
          <button class="delete w-[100px] bg-red-600 p-[10px] rounded-[40px] text-white font-bold hover:bg-red-900">Delete</button>
          <button class="edit w-[100px] bg-green-600 p-[10px] rounded-[40px] text-white font-bold hover:bg-green-900">Edit</button>
      </div>
    `;

    const checkInput = newItem.querySelector(".check");
    const checkText = newItem.querySelector(".soz");
    const todoDelete = newItem.querySelector(".delete");
    const todoEdit = newItem.querySelector(".edit");


    todoDelete.addEventListener("click", () => {
      newItem.remove();
    });

    todoEdit.addEventListener("click", () => {
      const result = prompt("Edit the task:", checkText.textContent);
      if (result) {
        checkText.textContent = result;
      }
    });


    checkInput.addEventListener("change", () => {
      checkText.style.textDecoration = checkInput.checked ? "line-through" : "none";
    });

    box.append(newItem);
    elInput.value = "";
  } else {
    alert("Please enter a task");
  }
});
