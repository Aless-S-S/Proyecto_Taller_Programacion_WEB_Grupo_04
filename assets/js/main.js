// ═══════════ YOUTUBE VIDEO BACKGROUND ═══════════
if (document.querySelector(".hero_1")) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
    const videoContainer = document.querySelector(".hero_video_container");
    if (!videoContainer) return;

    window.ytPlayer = new YT.Player("hero-video-player", {
        videoId: "j2L3lPghWn8",
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            mute: 1,
            start: 10,       // Comienza en el segundo 10
            end: 20,         // Termina en el segundo 20 (exactamente 10 segundos de reproducción)
            playsinline: 1,
            iv_load_policy: 3,
            autohide: 1
        },
        events: {
            onReady: function(event) {
                event.target.mute();
                event.target.playVideo();
            },
            onStateChange: function(event) {
                if (event.data === YT.PlayerState.PLAYING) {
                    videoContainer.classList.add("loaded");
                    event.target.mute();
                }
                // Si finaliza la reproducción del fragmento de 10s, rebobinar y volver a reproducir
                if (event.data === YT.PlayerState.ENDED) {
                    event.target.seekTo(10);
                    event.target.playVideo();
                }
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".hero_6");
    const counters = document.querySelectorAll(".hero_6 .h6_contadores span");

    if (!section) return;

    function animateCounters() {

        counters.forEach(counter => {

            const target = Number(counter.dataset.count);
            let current = 0;
            const duration = 1000;  //Duracion de la animacion
            const startTime = performance.now();

            function update(now) {

                const progress = Math.min((now - startTime) / duration, 1);

                current = Math.floor(progress * target);

                counter.textContent = `+${current}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = `+${target}`;
                }
            }

            requestAnimationFrame(update);
        });
    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(section);

});