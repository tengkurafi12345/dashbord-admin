document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit yang normal

    const linkInput = document.getElementById('linkInput').value;
    const embedContainer = document.getElementById('embedContainer');

    // Hapus konten sebelumnya
    embedContainer.innerHTML = '';

    // Cek apakah link berformat video YouTube
    const youtubeRegex = /^(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))([&?].*)?$/;
    // Cek apakah link berformat Zoom
    const zoomRegex = /^(https?:\/\/(?:www\.)?zoom\.us\/j\/\d+)/;

    // Jika link adalah YouTube
    const youtubeMatch = linkInput.match(youtubeRegex);
    if (youtubeMatch) {
        const videoId = youtubeMatch[2]; // Ambil ID video
        const iframe = document.createElement('iframe');
        
        // URL untuk embed YouTube
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        embedContainer.appendChild(iframe);
    } else if (zoomRegex.test(linkInput)) {
        // Embed Zoom link
        const iframe = document.createElement('iframe');
        iframe.src = linkInput;
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'fullscreen';
        embedContainer.appendChild(iframe);
    } else {
        // Tampilkan link biasa jika tidak cocok dengan embed
        const linkElement = document.createElement('a');
        linkElement.href = linkInput;
        linkElement.target = '_blank';
        linkElement.textContent = 'Klik di sini untuk mengakses link: ' + linkInput;
        embedContainer.appendChild(linkElement);
    }
});
