function partager() {
    if (navigator.share) {
        navigator.share({
            title: 'BF1',
            text: 'Regarde BF1 – La chaîne au cœur de nos défis',
            url: window.location.href,
        }).catch(() => {});
    } else {
        alert('Partage via WhatsApp, Telegram, Facebook...');
    }
}

function telecharger() {
    alert('📥 Téléchargement dans ta galerie');
}
