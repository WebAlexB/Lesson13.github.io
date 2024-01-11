document.addEventListener('click', function (e) {
    e.preventDefault();

    const target = e.target;

    if (target.classList.contains('remove-text')) {
        target.parentNode.remove();
    }

    if ((e.target.nodeName) === 'BUTTON') {
        const form = e.target.form;
        const input = form[0];
        if (isValid(input.value)) {
            createElement('item', form);
            input.value = '';
        } else {
            createElement('error', form)
        }
    }
});

function isValid(value) {
    return value.trim().length > 0;
}

function createElement(el, form) {
    if (el === 'item') {
        const wrapper = document.createElement('div');
        wrapper.className = 'text-wrapper';

        const item = document.createElement('p');
        item.className = 'some-text';
        item.innerHTML = `${form[0].value}`;
        wrapper.appendChild(item);

        const removeItem = document.createElement('i');
        removeItem.className = 'remove-text';
        removeItem.innerHTML = "&times;";
        wrapper.appendChild(removeItem);

        form.appendChild(wrapper);
    }

    if (el === 'error') {
        alert('Fill input');
    }
}