/**
 * A Library class that manages books using a Map.
 */
export class Library {
  constructor() {
    // TODO: Initialize a Map to store books with ISBN as key.
    this.map = new Map()
  }

  /**
   * Adds a book to the library.
   * @param {string} isbn - The book's ISBN.
   * @param {Object} book - The book object with title and author.
   */
  addBook(isbn, book) {
    // TODO: Add the book to the Map using isbn as the key.
    this.map.set(isbn, book)
  }

  /**
   * Gets a book by ISBN.
   * @param {string} isbn - The book's ISBN.
   * @returns {Object|undefined} - The book object or undefined.
   */
  getBook(isbn) {
    // TODO: Return the book from the Map.
    return this.map.get(isbn)
  }

  /**
   * Removes a book by ISBN.
   * @param {string} isbn - The book's ISBN.
   * @returns {boolean} - True if the book was removed.
   */
  removeBook(isbn) {
    // TODO: Remove the book from the Map and return the result.
    return this.map.delete(isbn)
  }

  /**
   * Gets the total number of books.
   * @returns {number} - The number of books.
   */
  getTotalBooks() {
    // TODO: Return the size of the Map.
    return this.map.size
    let totalBooks = 0
    for(const book of this.map){
      totalBooks++
    }
    return totalBooks
  }
}
