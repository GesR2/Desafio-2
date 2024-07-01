document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-video-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var videoContainer = document.getElementById(targetId);
            if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
                videoContainer.style.display = 'block';
                this.textContent = 'Ocultar ' + this.textContent.split(' ')[1];
            } else {
                videoContainer.style.display = 'none';
                this.textContent = 'Mostrar ' + this.textContent.split(' ')[1];
            }
        });
    });
});
