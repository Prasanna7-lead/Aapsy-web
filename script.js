document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
            answer.style.maxHeight = answer.scrollHeight + "px";
            item.querySelector('.toggle-symbol').textContent = '×';
        } else {
            answer.style.maxHeight = 0;
            item.querySelector('.toggle-symbol').textContent = '+';
            answer.style.display = 'none';
        }
    });
});
