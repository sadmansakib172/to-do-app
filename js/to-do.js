let count = 0;
document.getElementById('task-btn').addEventListener('click', function () {
  const inputField = document.getElementById('input-value');
  const inputText = inputField.value;
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${count += 1}</th>
  <td>${inputText}</td>
  <td>
  <button class="done-btn btn btn-success btn-xs">Done</button>
  <button class="delete-btn btn btn-error btn-xs">Delete</button>
  </td>
  
  `;

  const container = document.getElementById('content-container');
  container.appendChild(tr);

  inputField.value = '';


const doneButtons = document.querySelectorAll('.done-btn');
for(let doneButton of doneButtons){
  doneButton.addEventListener('click', function(event){
    event.target.parentElement.parentElement.style.textDecoration = 'line-through';
  })
}

const deleteButtons = document.querySelectorAll('.delete-btn');
for(let deleteButton of deleteButtons){
  deleteButton.addEventListener('click', function(event){
    event.target.parentElement.parentElement.style.display = 'none';
  })
}

document.getElementById('clear-btn').addEventListener('click', function(event){
   event.target.parentElement.parentElement.children[0].children[1].style.display = 'none';

   event.target.style.display = 'none';

   
})

})