// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Hide Error
const hideError = document.querySelector('#modal');
hideError.className = 'hidden'
//Add event listener to like button
const likeButton = document.querySelectorAll('.like-glyph')
likeButton.forEach(element => element.addEventListener('click', updateHeart))
function updateHeart(e){
  mimicServerCall()
  .then(() => {
    if(e.target.textContent === EMPTY_HEART){
      e.target.textContent = FULL_HEART
      e.target.className = 'activated-heart'
    }else{
      e.target.textContent = EMPTY_HEART
      e.target.className = ''
    }
  })
  .catch(error => {
    hideError.className = ''
    alert(error)
    setTimeout(() => hideError.className = 'hidden' ,3000)
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
