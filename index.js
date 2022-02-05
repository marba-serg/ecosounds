const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const navLink = document.querySelectorAll('.nav-link')
const navItems = document.querySelector('.nav-items')
const hero = document.querySelector('.hero')
const bird = document.querySelector('.bird')
const douwloadLink = document.querySelector('.download-link')
let isPlay = false;
let sound = 'forest'
let nameBird = 'Лес'


//------------- PLAY BUTTON ------------------//

function playAudio() {
  audio.currentTime = 0;
  audio.src = `assets/audio/${sound}.mp3`
  if (isPlay === false) {
    audio.play();
    console.log(`assets/audio/${sound}.mp3`)

    isPlay = true;
    play.style.backgroundImage = 'url(assets/svg/pause.svg)'
  }
  else {
    audio.pause();
    isPlay = false
    play.style.backgroundImage = 'url(assets/svg/play.svg)'
  }

}

play.addEventListener('click', playAudio)


// -------------ADD ACTIVE TO NAV-LINKS AND PLAY SOUND --------------//

function changeClassActive(event) {

  if (event.target.classList.contains('nav-link')) {

    navLink.forEach((e, idx) => {
      e.classList.remove('active');
    })

    event.target.classList.add('active')
    audio.play();
    isPlay = true;
    sound = event.target.dataset.b
    audio.src = `assets/audio/${sound}.mp3`
    audio.play();
    isPlay = true;
    play.style.backgroundImage = 'url(assets/svg/pause.svg)'
    hero.style.backgroundImage = `url(assets/img/${sound}.jpg)`
    bird.innerHTML = event.target.innerHTML
    douwloadLink.href = `assets/audio/${sound}.mp3`

  }

};


navItems.addEventListener('click', changeClassActive);


