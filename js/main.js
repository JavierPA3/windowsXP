document.addEventListener('DOMContentLoaded', function() {
    const openPopupButton = document.getElementById('user');
    const openPopupButton2 = document.getElementById('contacto');
    const openPopupButton3 = document.getElementById('porfolio');
    const popupContainer = document.getElementById('ventanaEmergente');
    const popupContentPlaceholder = document.getElementById('contenido');

    openPopupButton.addEventListener('click', function() {
        fetch('ventanaEmergente.html')
            .then(response => response.text())
            .then(html => {
                popupContentPlaceholder.innerHTML = html;
                popupContainer.style.display = 'block';

                const closeButton = document.getElementById('cerrar');
                closeButton.addEventListener('click', function() {
                    popupContainer.style.display = 'none';
                });
            })
            .catch(error => console.error(error));
    });
    openPopupButton2.addEventListener('click', function() {
        fetch('rss.html')
            .then(response => response.text())
            .then(html => {
                popupContentPlaceholder.innerHTML = html;
                popupContainer.style.display = 'block';

                const closeButton = document.getElementById('cerrar');
                closeButton.addEventListener('click', function() {
                    popupContainer.style.display = 'none';
                });
            })
            .catch(error => console.error(error));
    });

    openPopupButton3.addEventListener('click', function() {
        fetch('porfolio.html')
            .then(response => response.text())
            .then(html => {
                popupContentPlaceholder.innerHTML = html;
                popupContainer.style.display = 'block';

                const closeButton = document.getElementById('cerrar');
                closeButton.addEventListener('click', function() {
                    popupContainer.style.display = 'none';
                 
                });
            })
            .catch(error => console.error(error));
    });
    document.getElementById('equipo').addEventListener('click', function() {
        let overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'blue';
        overlay.style.zIndex = '1000';
        document.body.appendChild(overlay);
    
        let image = document.createElement('img');
        image.src = 'img/pantallazoAzul.jpg'; 
        image.style.width = '100%';
        image.style.height = 'auto';
        
        overlay.appendChild(image);
    
        setTimeout(function() {
            document.body.removeChild(overlay);
            window.close();
        }, 2000);
    });
    
    let hora = document.getElementById('hora');

function actualizarHora() {
    let horaTotal = new Date();
    let opciones = { hour: 'numeric', minute: 'numeric', hour12: true };
    hora.innerHTML = horaTotal.toLocaleTimeString([], opciones);
}

actualizarHora();

setInterval(actualizarHora, 1000);
});
