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

// encode the chunked message
const encodeMessage = (rectangle, cols) => {
  let encodeChunk = []
  for (let i = 0; i < cols; i++) {
    let text = ''
    rectangle.forEach(element => {
      text += element.substring(i, i + 1)
    })
    encodeChunk.push(text)
  }
  return encodeChunk
}

// main function
const displayMessage = () => {
  message = message.value
  let normalizedText = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const messageLength = normalizedText.length
  // check if characters are up to 50
  if (messageLength < 50) {
    input.innerHTML = ''
    // display error message
    alert('Please enter a message with at least 50 characters')
    return
  }
  const cols = Math.ceil(Math.sqrt(messageLength))
  const rows = Math.ceil(messageLength / cols)
  const rectangle = chunkMessage(cols, rows, normalizedText)
  let encodedChunks = encodeMessage(rectangle, cols)
  let output = ''
  encodedChunks.forEach(chunk => {
    output += chunk.trim()
  })
  input.innerHTML = normalizedText
  displayChunks.innerHTML = encodedChunks.join('<br>')
  encodedMsg.innerHTML = output
}

encodeBtn.addEventListener('click', displayMessage)
