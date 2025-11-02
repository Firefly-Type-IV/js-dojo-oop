/**
 * A Playlist class that manages a collection of songs.
 */
export class Playlist {
  /**
   * @param {string} name - The playlist name.
   */
  constructor(name) {
    // TODO: Store name as a property.
    // TODO: Initialize an empty array for songs.
    this.name = name;
    this.songs = [];
  }

  /**
   * Adds a song to the playlist.
   * @param {string} song - The song name.
   */
  addSong(song) {
    // TODO: Add the song to the songs array.
    this.songs.push(song);
  }

  /**
   * Removes a song from the playlist.
   * @param {string} song - The song name to remove.
   */
  removeSong(song) {
    // TODO: Remove the song from the array using filter or splice.
    return this.songs = this.songs.filter((word) => word !== song);
    // only shallow copy doesn't remove from original array
    const index = this.songs.indexOf(song)
    if(index > -1){
      this.songs.splice(index, 1)
    }
    return this.songs
  }

  /**
   * Gets all songs in the playlist.
   * @returns {string[]} - Array of song names.
   */
  getSongs() {
    // TODO: Return the songs array.
    return this.songs;
  }

  /**
   * Checks if a song exists in the playlist.
   * @param {string} song - The song name.
   * @returns {boolean} - True if the song exists.
   */
  hasSong(song) {
    // TODO: Check if the song is in the array.
    return this.songs.includes(song);
  }
}
