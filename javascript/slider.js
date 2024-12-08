document.addEventListener('DOMContentLoaded', function() {
    const teachers = document.querySelectorAll('.teachers__teacher');
    const dots = document.querySelectorAll('.teachers__dot');
    let currentIndex = 0;

    function showTeacher(index) {
        teachers.forEach((teacher, i) => {
            teacher.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextTeacher() {
        currentIndex = (currentIndex + 1) % teachers.length;
        showTeacher(currentIndex);
    }

    function prevTeacher() {
        currentIndex = (currentIndex - 1 + teachers.length) % teachers.length;
        showTeacher(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index === 0) {
                prevTeacher();
            } else if (index === dots.length - 1) {
                nextTeacher();
            } else {
                currentIndex = index;
                showTeacher(currentIndex);
            }
        });
    });

    showTeacher(currentIndex); 
});

