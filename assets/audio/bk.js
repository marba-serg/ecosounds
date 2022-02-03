const drozd = document.querySelector('.drozd')
const zhav = document.querySelector('.zhav')
const slavka = document.querySelector('.slavka')
const solovey = document.querySelector('.solovey')
const zarynka = document.querySelector('.zarynka')


// function get(bird) {
//   audio.currentTime = 0;
//   audio.src = `assets/audio/${bird}.mp3`
//   audio.play();
//   isPlay = true;
//   play.style.backgroundImage = 'url(assets/svg/pause.svg)'
//   console.log(`assets/audio/${bird}.mp3`)
//   hero.style.backgroundImage = 'url(assets/img/${bird}.jpg)'
// }


// function drozdGet () {
// bird = 'drozd'
// audio.currentTime = 0;
// audio.src = `assets/audio/${bird}.mp3`
// audio.play();
// isPlay = true;
// play.style.backgroundImage = 'url(assets/svg/pause.svg)'
// console.log(`assets/audio/${bird}.mp3`)
// hero.style.backgroundImage = 'url(assets/img/drozd.jpg)'
// }

// function zhavGet () {
// bird = 'javoronok'
// audio.currentTime = 0;
// audio.src = `assets/audio/${bird}.mp3`
// isPlay = true;
// audio.play();
// play.style.backgroundImage = 'url(assets/svg/pause.svg)'
// hero.style.backgroundImage = 'url(assets/img/javoronok.jpg)'
// }

// function slavkaGet () {
// bird = 'slavka'
// audio.currentTime = 0;
// audio.src = `assets/audio/${bird}.mp3`
// isPlay = true;
// audio.play();
// play.style.backgroundImage = 'url(assets/svg/pause.svg)'
// hero.style.backgroundImage = 'url(assets/img/slavka.jpg)'
// }

// function soloveyGet () {
// bird = 'solovey'
// audio.currentTime = 0;
// audio.src = `assets/audio/${bird}.mp3`
// isPlay = true;
// audio.play();
// play.style.backgroundImage = 'url(assets/svg/pause.svg)'
// hero.style.backgroundImage = 'url(assets/img/solovey.jpg)'
// }

// function zarynkaGet () {
// bird = 'zarynka'
// audio.currentTime = 0;
// audio.src = `assets/audio/${bird}.mp3`
// isPlay = true;
// audio.play();
// play.style.backgroundImage = 'url(assets/svg/pause.svg)'
// hero.style.backgroundImage = 'url(assets/img/zarynka.jpg)'
// }




// drozd.addEventListener('click', drozdGet)  
// zhav.addEventListener('click', zhavGet)  
// slavka.addEventListener('click', slavkaGet) 
// solovey.addEventListener('click', soloveyGet)  
// zarynka.addEventListener('click', zarynkaGet) 


let getSrc = (bird) => {
  return `assets/audio/${bird}.mp3`
}