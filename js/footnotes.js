const notes = [
    `one`,
    `2`,
    `3`
]

const title = document.querySelector('#footnoteTitle');
const note = document.querySelector('.modal-body');
let currNote = 0;


document.body.addEventListener('click', (e) => {
    if(e.target.tagName === "SUP"){
        currNote = parseInt(e.target.innerText) - 1;
        openNote();
    }
})


// FUNCTION TO SHOW MODAL
const openNote = () => {
    title.innerText = `Footnote #` + (currNote + 1);
    note.innerText = notes[currNote];
    $('#footnoteModal').modal('show');
}
