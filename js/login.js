// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";        
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
          
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

const email = document.getElementById('email');
const password = document.getElementById('password');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const submit = document.getElementById('sub-btn');

// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/
//   if (expression.test(email) == true) {
//     // Email is good
//     return true
//   } else {
//     // Email is not good
//     return false
//   }
// }

// function validate_password(password) {
//   // Firebase only accepts lengths greater than 6
//   if (password < 6) {
//     return false
//   } else {
//     return true
//   }
// }

// function validate_field(field) {
//   if (field == null) {
//     return false
//   }

//   if (field.length <= 0) {
//     return false
//   } else {
//     return true
//   }
// }
//register function
function registeruser (){
  // Validate Functions
  if (!validate_email(email) == false || !validate_password(password) == false) {
    alert('メールまたはパスワードは間違っています。')
    return
  }
  if (validate_field(lastname) == false || validate_field(firstname) == false) {
    alert('すべて入力してください。')
    return
  }
  const dbRef = ref(db);
  get(child(dbRef, "UserList/" + email.value))
  .then((snapshot)=>{
    if(snapshot.exist()){
      alert("Account Already Exist.");
    }
    else{
      set(ref(db, "UserList" + email.value),
      {
        email: email.value,
        password: password.value,
        lastname: lastname.value,
        firstname: firstname.value
      })
      .then(()=>{
        alert("登録してくれてありがとうございます。");
      })
      .catch((error)=>{
        alert("Error" + error);
      })
    }
  });
}

// submit.addEventListener('click',registeruser);

// function Validation(){
//   let nameregex = /^[a-ZA-Z\s]+$/;
//   let emailregex = /^[a-ZA-ze-9]+@(gmail|yahoo|outlook)\.com$/;
//   let userregex = /^[a-ZA-Z0-9]{5,}$/;
  
//   if(!nameregex.test(lastname.value)){
//       alert("the name should only contain alphabets!");
//       return false;
//   }
//   if(!emailregex.test(email.value)){
//       alert("enter a valid email");
//       return false;
//   }
//   if(!userregex.test(firstname.value)){
//     alert("the name should only contain alphabets!");
//     return false;
//   }
//   return true;
// }


// auth.createUserWithEmailAndPassword(email, password)
// .then(function() {
        
//   var user = auth.currentUser
        
//         //add user to firebase database
//         var database_ref = database.ref()
  
//         //create user data
//         var user_data = {
//           email : email,
//           lastname : lastname,
//           firstname : firstname,
//           last_login : Date.now()
//         }
//         database_ref.child('users/' + user.uid).set(user_data)
  
  
//         aler('user created! ログインに戻り、ログインしてください。')
  
//       })
//       .catch(function(error){
//         var error_code = error.code
//         var error_message = error.message
  
//         alert(error_message)
//       })
  
  
  