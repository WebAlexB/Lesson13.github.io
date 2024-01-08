const formTask = document.getElementById("form-text");
const inputTask = document.getElementById("input-some-text");
formTask.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = inputTask.value;
    addTask(task);
});

function addTask(task) {
    if (task === '') {
        modalWindow();
    } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'text-wrapper';

        const item = document.createElement('p');
        item.className = 'some-text';
        item.innerHTML = task;

        const removeItem = document.createElement('i');
        removeItem.className = 'remove-text';
        removeItem.innerHTML = "&times";
        removeItem.addEventListener('click', function () {
            formTask.removeChild(wrapper);
        });

        wrapper.appendChild(item);
        wrapper.appendChild(removeItem);

        formTask.appendChild(wrapper);
    }
}

function modalWindow() {
    const customModal = document.getElementById('modal');
    customModal.style.display = 'block';

    document.querySelector('.close').addEventListener('click', () => customModal.style.display = 'none');
    window.addEventListener('click', (event) => event.target === customModal ? customModal.style.display = 'none' : null);
}