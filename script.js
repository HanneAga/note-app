//Add note 
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', ()=> {
    addNewNote();});


 //addnote function
function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note');

    //add html for new note when presseing addBtn

    note.innerHTML = `<div class="notes">
    <div class="tools">
      <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>
  </div>`;

    //variables
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete'); 
    const main = note.querySelector('.main'); 
    const textArea = note.querySelector('textarea');

    //Eventlisteners for variables

        editBtn.addEventListener('click', ()=>{
            main.classList.toggle('hidden');
            textArea.classList.toggle('hidden');
        });

        deleteBtn.addEventListener('click', ()=>{
            note.remove();
        });


        textArea.addEventListener('input', () => {
            const inputValue = textArea.value;
            //marked 
            main.innerText = inputValue;

        });

        document.body.appendChild(note);



}