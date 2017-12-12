document.getElementById('dropMenu').addEventListener('click', () => {
    document.getElementsByClassName('dropdown-content').classList.add('d-block');
}
);

// window.onclick = function f(unfocus) {
//     const myDropdownContent = document.querySelector('.dropdown-content');
//     if (!unfocus.target.matches('.dropdown')) {
//         if (myDropdownContent.classList.contains('d-block')) {
//             myDropdownContent.classList.remove('d-block');
//         }
//     }
// };
