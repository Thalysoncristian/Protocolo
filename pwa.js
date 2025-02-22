let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Impede o prompt padrão
    e.preventDefault();
    // Guarda o evento para que possamos acioná-lo mais tarde
    deferredPrompt = e;
    // Atualiza a interface para notificar o usuário que ele pode instalar o PWA
    showInstallPromotion();
});

function showInstallPromotion() {
    const installButton = document.createElement('button');
    installButton.innerText = 'Instalar Aplicativo';
    installButton.classList.add('install-button');
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        // Esconde o botão de instalação
        installButton.style.display = 'none';
        // Mostra o prompt de instalação
        deferredPrompt.prompt();
        // Espera pelo resultado do usuário
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação do PWA');
            } else {
                console.log('Usuário rejeitou a instalação do PWA');
            }
            deferredPrompt = null;
        });
    });
}

window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(error => {
            console.log('Falha ao registrar o Service Worker:', error);
        });
});