window.addEventListener('load', async () => {
    await Notification.requestPermission();
    if('serviceWorker' in navigator) {
        const res = await navigator.serviceWorker.register('./sw.js');
        if(res){
            const ready = await navigator.serviceWorker.ready;
            ready.showNotification("ESPE PWA - Portal Informativo",{
                body: "La aplicacion se ha instalado correctamente",
                icon: "./assets/icons/icon-144x144.png",
                vibrate: [100, 50, 200]
            });
        }
    }
});

const paginas = ["inicio", "sobre", "oferta", "admision", "contacto"];

function mostrarPagina(pagina){
    for(i=0; i<paginas.length; i++){
        document.getElementById(paginas[i]).style.display = "none";
        if(pagina==paginas[i]){
            document.getElementById(paginas[i]).style.display = "block";
        }
    }
}