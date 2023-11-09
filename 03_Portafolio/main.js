let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(500)
  .typeString('Digital Solutions Business Analyst')
  .pauseFor(4200)
  .deleteChars(80)
  .start();
