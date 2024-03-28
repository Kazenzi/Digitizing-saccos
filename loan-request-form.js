const credentials = {
    
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;

function sendMessage(guarantorPhoneNumber, guarantorsName, borrowerName) {
  const link = "your-approval-link-here?borrowerName=" + encodeURIComponent(borrowerName);
  const options = {
    // Set the numbers you want to send to in international format
    to: [guarantorPhoneNumber],
    // Set your message
    message: `Hello ${guarantorsName},\n\n${borrowerName} has requested you to approve her loan request.\n\nIf you agree, please do so using the following link: ${link}`,
    // Set your shortCode or senderId
    from: 'XXYYZZ'
  }

  // That’s it, hit send and we’ll take care of the rest
  sms.send(options)
    .then(console.log)
    .catch(console.log);
}