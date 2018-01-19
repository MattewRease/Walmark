export default function notify(a, b) {
    const note = document.createElement('p');
    const newNote = document.querySelector('.note');
    document.body.insertBefore(note, newNote);

    newNote ? newNote.classList.remove('active') : false;

    note.className = a;
    setTimeout(() => {
        note.classList.add('active');
        note.innerHTML = b;
    }, 300);
    setTimeout(() => {
        note.classList.remove('active');
    }, 3000);
    setTimeout(() => {
        note.remove();
    }, 3500);

}
