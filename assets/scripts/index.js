'use strict'
let message = document.getElementById('message')
const encodeBtn = document.querySelector('.button')
let input = document.getElementById('normalized-text')
let displayChunks = document.getElementById('encoded-chunks')
let encodedMsg = document.getElementById('encoded-message')

// split message into chunks
const chunkMessage = (cols, rows, str) => {
  const chunks = []
  let index = 0
  for (let i = 0; i < rows; i++) {
    if (i !== 0) {
      index += cols
    }
    if (str.substring(index, index + cols).length === cols) {
      chunks.push(str.substring(index, index + cols))
    } else {
      const spaces = cols - str.substring(index, index + cols).length
      const chunk = str.substring(index, index + cols)
      chunks.push(chunk + ' '.repeat(spaces))
    }
  }
  return chunks
}
