  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8HsEo7SFBogFORGbqsZHzwJB5amZBX8M",
    authDomain: "cards-9c053.firebaseapp.com",
    databaseURL: "https://cards-9c053.firebaseio.com",
    projectId: "cards-9c053",
    storageBucket: "cards-9c053.appspot.com",
    messagingSenderId: "669865222479"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Sign In
  
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  // Signup 

  btnSignUp.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

    // Log out

    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.style.visibility = 'visible';
      } else {
        console.log('not logged in');
        btnLogout.style.visibility = 'hidden';
      }
    })