var playlist = {Beyonce:'Halo', Jojo:'Too Little Too Late'};

function updatePlaylist(playlist, artist, song){
  playlist.artist = song
  return playlist
}

function removeFromPlaylist (playlist, artist){
  delete playlist.artist
  return playlist
}
