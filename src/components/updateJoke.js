const updateJoke = (jokeDom, jokeData) => {
  // Update category
  jokeDom.querySelector('.category').innerText = jokeData.category;

  // Update type
  jokeDom.querySelector('.type').innerText = jokeData.type;

  // Check type
  if (jokeData.type === 'twopart') {
      jokeDom.querySelector('.setup').innerHTML = jokeData.setup;
      if (jokeDom.querySelector('.setup').classList.contains('hide')) {
          jokeDom.querySelector('.setup').classList.remove('hide');
      }

      jokeDom.querySelector('.delivery').innerHTML = jokeData.delivery;
      if (jokeDom.querySelector('.delivery').classList.contains('hide')) {
          jokeDom.querySelector('.delivery').classList.remove('hide');
      }

      if (!jokeDom.querySelector('.joke').classList.contains('hide')) {
          jokeDom.querySelector('.joke').classList.add('hide');
      }
  } else {
      jokeDom.querySelector('.joke').innerHTML = jokeData.joke;
      if (jokeDom.querySelector('.joke').classList.contains('hide')) {
          jokeDom.querySelector('.joke').classList.remove('hide');
      }

      if (!jokeDom.querySelector('.setup').classList.contains('hide')) {
          jokeDom.querySelector('.setup').classList.add('hide');
      }

      if (!jokeDom.querySelector('.delivery').classList.contains('hide')) {
          jokeDom.querySelector('.delivery').classList.add('hide');
      }
  }

  // Update flags
  const flags = jokeDom.querySelector('.flags');
  for (const flag in jokeData.flags) {
      const flagDom = flags.querySelector(`.${flag}`);

      flagDom.className = '';
      flagDom.classList.add(flag, jokeData.flags[flag]);
  }

  // Update lang
  jokeDom.querySelector('.lang').innerText = jokeData.lang;

  // Update safe
  if (jokeData.safe) {
      jokeDom.querySelector('#safe').className = 'safe';
  } else {
      jokeDom.querySelector('#safe').className = 'unsafe';
  }
};

export default updateJoke;
