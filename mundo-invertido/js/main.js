const switchTheme = document.getElementById('switch-theme-button')

switchTheme.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    });