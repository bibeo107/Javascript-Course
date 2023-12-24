const openModalBtnElements = document.querySelectorAll('.show-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

const openModal = () => {
    [modalElement, overlayElement].forEach((e) => e.classList.remove('hidden'));
};
const closeModal = () => {
    [modalElement, overlayElement].forEach((e) => e.classList.add('hidden'));
};

for (let i = 0; i < openModalBtnElements.length; i += 1) {
    openModalBtnElements[i].addEventListener('click', openModal);
}

[closeModalBtn, overlayElement].forEach((e) => e.addEventListener('click', closeModal));

document.addEventListener('keydown', function (e) {
    const isEscapeKey = e.key === 'Escape';
    const isModalVisible = !modalElement.classList.contains('hidden');
    if (isEscapeKey && isModalVisible) {
        closeModal();
    }
});
