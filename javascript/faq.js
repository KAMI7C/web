
document.querySelectorAll('.faq__block').forEach(block => {
    block.addEventListener('toggle', function() {
        const subText = this.querySelector('.faq__text-sub');
        if (this.open) {
            subText.style.display = 'none';
        } else {
            subText.style.display = 'block';
        }
    });
});