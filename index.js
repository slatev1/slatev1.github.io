// Array to keep track of the sequence entered
const sequence = ['+', '^', '*', '!', "'", '?'];
let currentIndex = 0;

// Function to check if the entered key is part of the sequence
function checkSequence(event) {
  const key = event.key;

  // Check if the key matches the current expected character in the sequence
  if (key === sequence[currentIndex]) {
    currentIndex++;
    
    // If the entire sequence is matched
    if (currentIndex === sequence.length) {
      alert('Well done, you found the secret code');
      currentIndex = 0; // Reset for next attempt
    }
  } else {
    // Reset sequence if the key does not match
    currentIndex = 0;
  }
}

// Add event listener for keydown events
document.addEventListener('keydown', checkSequence);
