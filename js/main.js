document.addEventListener('DOMContentLoaded', function() {
    const openPopupButton = document.getElementById('porfolio');
    const popupContainer = document.getElementById('ventanaEmergente');
    const popupContentPlaceholder = document.getElementById('contenido');

    openPopupButton.addEventListener('click', function() {
        fetch('ventanaEmergente.html')
            .then(response => response.text())
            .then(html => {
                popupContentPlaceholder.innerHTML = html;
                popupContainer.style.display = 'block';
            })
            .catch(error => console.error(error));
    });
});
