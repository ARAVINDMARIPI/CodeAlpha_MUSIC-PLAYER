let audioPlayer = document.getElementById("audioPlayer");
let songIndex = 0;
let songs = document.querySelectorAll("#playlist li");

// Play selected song
songs.forEach((song, index) => 
  {
    song.addEventListener("click", () => 
      {
        songIndex = index;
        playSong(songIndex);
    });
});

function playSong(index) {
    audioPlayer.src = songs[index].getAttribute("data-src");
    audioPlayer.play();
}

// Play/Pause function
function playPause() 
{
    if (audioPlayer.paused) 
    {
        audioPlayer.play();
    } 
    else 
    {
        audioPlayer.pause();
    }
}

// Skip song function
function skip() 
{
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
}

// Adjust volume function
function setVolume(value) 
{
    audioPlayer.volume = value;
}

// Search song function
function searchSongs() 
{
    let input = document.getElementById("search").value.toLowerCase();
    songs.forEach(song => 
      {
        if (song.innerText.toLowerCase().includes(input)) 
        {
            song.style.display = "";
        } 
        else 
        {
            song.style.display = "none";
        }
    });
}

// Filter songs by genre
function filterSongs(genre) 
{
    songs.forEach(song => 
      {
        if (genre === "all" || song.getAttribute("data-genre") === genre) 
        {
            song.style.display = "";
        } 
        else 
        {
            song.style.display = "none";
        }
    });
}
