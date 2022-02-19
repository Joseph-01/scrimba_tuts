// template strings/literals

const recipient = "James"
let me = "Joe"
// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = `Hey ${recipient} How is it going? Cheers ${me}`

console.log(email)