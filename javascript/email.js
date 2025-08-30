// 1. String 
// valid email address
//@
//@ must not  be the first char
// last 3/4 . .com .in
// var email = "snehathakur@gmail.com";

var email = "snehathakur@gmail.com";

if (email[0] !== '@' && email.includes('@') && (email[email.length - 3] =='.' || email[email.length - 4] =='.')) {
  console.log("Valid email:", email);
} else {
  console.log("Invalid email");
}



