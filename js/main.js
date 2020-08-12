
  const bodyField = document.getElementById('body-field-id');
  const muscle = document.querySelectorAll('.muscle');
  const chest = document.getElementById('chest');
  const heart = document.getElementById('heart');
  const hamstrings = document.getElementById('hamstrings');
  const core = document.getElementById('core');
  const quadriceps = document.getElementById('quadriceps');
  const triceps = document.getElementById('triceps');
  const shoulders = document.getElementById('shoulders');
  // Show muscles
  const showMuscle = (location) => {
    bodyField.src = location;
  }

  // When mouse out
  for (let i = 0; i < muscle.length; i++) {
    muscle[i].onmouseout = function() {
      bodyField.src = "assets/body-front.png";
    }
  }

  chest.addEventListener('mouseover', function() {
    showMuscle('assets/chest.png');
  });
  
  heart.addEventListener('mouseover', function() {
    showMuscle('assets/heart.png');
  });
  
  hamstrings.addEventListener('mouseover', function() {
    showMuscle('assets/hamstrings.png');
  });
  
  core.addEventListener('mouseover', function() {
    showMuscle('assets/core.png');
  });
  
  quadriceps.addEventListener('mouseover', function() {
    showMuscle('assets/quadriceps.png');
  });
  
  triceps.addEventListener('mouseover', function() {
    showMuscle('assets/triceps.png');
  }); 
  
  shoulders.addEventListener('mouseover', function() {
    showMuscle('assets/shoulders.png');
  }); 
  

  
  const exercise = (exerciseName, gif) => {
    if(document.getElementById('exercise-field-id')) {
      closeExercise();
    }
    const section = document.createElement('section');
    section.className = 'exercise-container';
    const div = document.createElement('div');
    div.className = 'exercise-field';
    div.setAttribute('id', 'exercise-field-id')
    div.innerHTML = `
      <h1>${exerciseName}</h1>
      <img class="exercise-gif" src=${gif}>
      <button class="finish-exercise" onclick="closeExercise()">Finish</button>
    `;
    document.getElementById('wrapper').appendChild(div);
    div.scrollIntoView({behavior: "smooth"});
  }

  // const chestExercise = () => {
  //   if(document.getElementById('exercise-field-id')) {
  //     closeExercise();
  //   }
  //   const section = document.createElement('section');
  //   section.className = 'exercise-container';
  //   const div = document.createElement('div');
  //   div.className = 'exercise-field';
  //   div.setAttribute('id', 'exercise-field-id')
  //   div.innerHTML = `
  //     <h1>Push ups for Chest</h1>
  //     <img class="exercise-gif" src="https://media.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif">
  //     <button class="finish-exercise" onclick="closeExercise()">Finish</button>
  //   `;
  //   document.getElementById('wrapper').appendChild(div);
  //   div.scrollIntoView({behavior: "smooth"});
  // }
  
  
  const closeExercise = () => {
    window.scrollTo(0, 0);
    document.getElementById('wrapper').removeChild(document.getElementById('exercise-field-id'));
  }

  chest.addEventListener('click', function () {
    exercise('Push ups for Chest', './../assets/gifs/chest.gif')
  });

  heart.addEventListener('click', function () {
    exercise('Burpees for Heart', './../assets/gifs/heart.gif')
  });

  hamstrings.addEventListener('click', function () {
    exercise('Bridges for Hamstrings', './../assets/gifs/hamgstrings.gif')
  });

  core.addEventListener('click', function () {
    exercise('Plank for Core', './../assets/gifs/core.gif')
  });

  quadriceps.addEventListener('click', function () {
    exercise('Lunge for Quadriceps', './../assets/gifs/quadriceps.gif')
  });

  triceps.addEventListener('click', function () {
    exercise('Close grip push ups for Triceps', './../assets/gifs/triceps.gif')
  });

  shoulders.addEventListener('click', function () {
    exercise('Pike push ups for Shoulders', './../assets/gifs/shoulders.gif')
  });
  