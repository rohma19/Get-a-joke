const getJoke = async () => {
  try {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any');
      if (res.ok) {
          const data = await res.json();
          return data;
      } else {
          throw new Error('Failed to fetch joke');
      }
  } catch (err) {
      console.error(err);
  }
};

export default getJoke;
