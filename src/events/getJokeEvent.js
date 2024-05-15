import dom from '../dom.js';
import getJokeHandler from '../handlers/getJokeHandler.js';

const getJokeEvent = () => {
    dom.btn.addEventListener('click', getJokeHandler);
};

export default getJokeEvent;
