const accountId = 144553
let accountEmail = "tanvi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "tt@tt.com"
accountPassword = "34567"
accountCity = "Guwahati"

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId ,accountEmail,accountPassword,accountCity,accountState])