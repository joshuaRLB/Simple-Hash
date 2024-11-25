// A simple custom hash function
function customHash(input, length = 16) {
    let hash = 0;
  
    // Convert the input string into a numeric hash
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      hash = (hash << 5) - hash + charCode; // Bitwise operations
      hash |= 0; // Ensure it's a 32-bit integer
    }
  
    // Convert the numeric hash to a string and pad/trim to the desired fixed length
    let hashString = Math.abs(hash).toString(16); // Convert to hex
    if (hashString.length < length) {
      hashString = hashString.padEnd(length, "0"); // Pad with zeroes if too short
    } else if (hashString.length > length) {
      hashString = hashString.substring(0, length); // Trim if too long
    }
  
    return hashString;
  }
  
  // Function to handle hash generation
  function generateHash() {
    const inputString = document.getElementById("inputString").value;
    if (!inputString) {
      document.getElementById("result").innerText = "Please enter a valid string.";
      return;
    }
  
    const hashValue = customHash(inputString);
    document.getElementById("result").innerText = `Hash Value: ${hashValue}`;
  }
  