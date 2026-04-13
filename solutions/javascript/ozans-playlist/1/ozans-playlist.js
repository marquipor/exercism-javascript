// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {

  const set_playlist = new Set(playlist);
  
  return Array.from(set_playlist);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set_playlist = new Set(playlist);

  return set_playlist.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set_playlist = new Set(playlist);
  set_playlist.add(track)
  return Array.from(set_playlist);
}
/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set_playlist = new Set(playlist);
  if(set_playlist.has(track)) set_playlist.delete(track);
  return Array.from(set_playlist);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const setArtistList = new Set();

  for(let song of playlist){
   let artist = song.slice(song.indexOf("-")+2);
    setArtistList.add(artist);
  }

  return Array.from(setArtistList);
  
}
