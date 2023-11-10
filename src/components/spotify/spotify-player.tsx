export function SpotifyPlayer() {
    const spotifyStyle = {borderRadius: "12px"};

    return (
        <iframe
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            height="152"
            loading="lazy"
            src="https://open.spotify.com/embed/playlist/7ciFzXb1lItgFiE4EplpdM?utm_source=generator&theme=0"
            style={spotifyStyle}
            width="100%"
        />
    );
}
