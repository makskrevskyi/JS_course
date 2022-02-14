const title = 'Some blog';

const titleElement = document.querySelector('#title');
titleElement.innerHTML = title;

const data = [
    {
        title: 'Hello',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo. Distinctio laborum necessitatibus cupiditate libero. Praesentium, doloribus temporibus velit harum debitis cumque eveniet facere saepe laboriosam, delectus nostrum, at molestias.'
    },

    {
        title: 'Hello',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo. Distinctio laborum necessitatibus cupiditate libero. Praesentium, doloribus temporibus velit harum debitis cumque eveniet facere saepe laboriosam, delectus nostrum, at molestias.'
    },

    {
        title: 'Hello',
        desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo. Distinctio laborum necessitatibus cupiditate libero. Praesentium, doloribus temporibus velit harum debitis cumque eveniet facere saepe laboriosam, delectus nostrum, at molestias.'
    },
];

const mainContainer = document.querySelector('#main-container');
console.log('mainContainer - ', mainContainer)
data.forEach((postItem, index) => {

    const postElement = document.createElement('div');
    postElement.classList.add('post')

    const newH2 = document.createElement('h2');
    newH2.innerHTML = postItem.title;
    postElement.appendChild(newH2);

    const newP = document.createElement('p');
    newP.innerHTML = postItem.desc;
    postElement.appendChild(newP);

    mainContainer.appendChild(postElement);
});

const addPostForm = document.querySelector('#add-new-post');
const titleInput = document.querySelector('#titleInput');
const descInput = document.querySelector('#descInput');

addPostForm.addEventListener('submit', (event) => {

    const postElement = document.createElement('div');
    postElement.classList.add('post')

    const newH2 = document.createElement('h2');
    newH2.innerHTML = titleInput.value;
    postElement.appendChild(newH2);

    const newP = document.createElement('p');
    newP.innerHTML = descInput.value;
    postElement.appendChild(newP);

    mainContainer.appendChild(postElement);

    console.log("data ->", data)

    event.preventDefault();
});