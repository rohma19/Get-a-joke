const createJoke = (jokeData) => {
  // container
  const container = document.createElement('div');
  container.id = 'joke-container';
  container.classList.add('joke');

  // category
  const category = document.createElement('h2');
  category.id = 'category';
  category.classList.add('category');
  category.innerText = jokeData.category;

  // type

  const type = document.createElement('p');
  type.id = 'type';
  type.classList.add('type');
  type.innerText = jokeData.type;

  //setup
  const setup = document.createElement('p');
  setup.id = 'setup';
  setup.classList.add('setup');
  setup.innerText = jokeData.setup;

  // delivery
  const delivery = document.createElement('p');
  delivery.id = 'delivery';
  delivery.classList.add('delivery');
  delivery.innerHTML = jokeData.delivery;


  // joke
  const joke = document.createElement('p');
  joke.id = 'joke';
  joke.classList.add('joke');
  joke.innerHTML = jokeData.joke;

  if (jokeData.type === 'twopart'){
    joke.classList.add('hide');
    setup.classList.remove('hide');
    delivery.classList.remove('hide');
  } else {
    joke.classList.remove('hide');
    setup.classList.add('hide');
    delivery.classList.add('hide');
  }



  //flags
  const flags = document.createElement('ul');
  flags.id = 'flags';
  flags.classList.add('flags');
  for (const flag in jokeData.flags){
        const li = document.createElement('li');
        li.innerText = flag;
        li.classList.add(flag, String(jokeData.flags[flag]));
        flags.append(li);
  }

   // lang
   const lang = document.createElement('p');
   lang.id = 'lang';
   lang.classList.add('lang');
   lang.innerText = jokeData.lang;

   // Safe
   const safe = document.createElement('p');
   safe.id = 'safe';
   if (jokeData.safe === true) {
       safe.classList.add('safe');
   } else {
       safe.classList.add('unsafe');
   }
   safe.innerText = 'Safe';

   container.append(category, type, setup, delivery, joke, flags, lang, safe);
   return container;
};

export default createJoke;
