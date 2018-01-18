export default function notify(a, b) {
    const newNote = document.querySelector('.note');
    const note = document.createElement('p');

    if (!document.querySelector('.note-wrap')) {
        const createWrapp = document.createElement('div');
        createWrapp.className = 'note-wrap';
        document.body.appendChild(createWrapp);
    }

    const noteWrapp = document.querySelector('.note-wrap');

    newNote ? noteWrapp.insertBefore(note, newNote) : noteWrapp.appendChild(note);
    note.className = a;
    setTimeout(() => {
        note.classList.add('active');
        note.innerHTML = b;
    }, 300);
    setTimeout(() => {
        noteWrapp.removeChild(noteWrapp.lastChild);
    }, 3000);
}
