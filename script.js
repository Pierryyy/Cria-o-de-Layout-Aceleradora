const localStorageKeyDay = 'to-do-list-day';

function validaIfExistNewTask() {
  let values = JSON.parse(localStorage.getItem(localStorageKeyDay) || "[]");
  let inputValue = document.getElementById('input-new-task').value;
  let exists = values.find(x => x.name == inputValue);
  return exists ? true : false;
}

function newTask() {
  let input = document.getElementById('input-new-task');
    
  // Validation
  if (!input.value) {
    alert("Digite algo para inserir na lista");
  } else if (validaIfExistNewTask()) {
    alert('Já existe uma tarefa com esta descrição');
  } else {
    // Increment to localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKeyDay) || "[]");
    values.push({
      name: input.value
    });
    localStorage.setItem(localStorageKeyDay, JSON.stringify(values));
    showValues();
  }
  input.value = '';
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKeyDay) || "[]");
  let list = document.getElementById('to-do-list-day');
  list.innerHTML = '';
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li><button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg></button> ${values[i]['name']}</li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKeyDay) || "[]");
  let index = values.findIndex(x => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKeyDay, JSON.stringify(values));
  showValues();
}

// Night table

const localStorageKeyNight = 'to-do-list-night';

function validaIfExistNewTaskNight() {
  let values = JSON.parse(localStorage.getItem(localStorageKeyNight) || "[]");
  let inputValue = document.getElementById('input-new-task-night').value;
  let exists = values.find(x => x.name == inputValue);
  return exists ? true : false;
}

function newTaskNight() {
  let input = document.getElementById('input-new-task-night');

  // Validation
  if (!input.value) {
    alert("Digite algo para inserir na lista");
  } else if (validaIfExistNewTaskNight()) {
    alert('Já existe uma tarefa com esta descrição');
  } else {
    // Increment to localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKeyNight) || "[]");
    values.push({
      name: input.value
    });
    localStorage.setItem(localStorageKeyNight, JSON.stringify(values));
    showValuesNight();
  }
  input.value = '';
}

function showValuesNight() {
  let values = JSON.parse(localStorage.getItem(localStorageKeyNight) || "[]");
  let list = document.getElementById('to-do-list-night');
  list.innerHTML = '';
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li><button id='btn-ok' onclick='removeItemNight("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg></button> ${values[i]['name']}</li>`;
  }
}

function removeItemNight(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKeyNight) || "[]");
  let index = values.findIndex(x => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKeyNight, JSON.stringify(values));
  showValuesNight();
}
