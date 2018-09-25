var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'}
function updatePlaylist(list, artist, song){
  list = Object.assign(list, {artist: song})
  return list
}

function removeFromPlaylist(list, artist){
  delete list.artist
  return list
}