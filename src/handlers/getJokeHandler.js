import dom from '../dom.js';
import getJoke from '../../apis/getJoke.js';
import createJoke from '../components/createJoke.js';
import updateJoke from '../components/updateJoke.js';

const getJokeHandler = async () => {
    // fetch joke data
    const jokeData = await getJoke();
    // Check if jokDom exists
    const jokeDomExist = document.getElementById('joke-container');
    if (jokeDomExist) {
        updateJoke(jokeDomExist, jokeData);
    } else {
        const jokeDom = createJoke(jokeData);
        dom.root.append(jokeDom);
    }
};

export default getJokeHandler;
