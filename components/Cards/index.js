// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
// let info = {};

console.log(axios);
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
//   info = res.data
  console.log(res);
//lambdaInfo(info)
  let parent = document.querySelector('.cards');
  parent.appendChild(lambdaInfo(info)); 
  // parent.appendChild(lambdaInfo(res.data))
}).catch((err) => console.log("right"))

function lambdaInfo(obj) {
    // create
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const by = document.createElement('span');
    // update content
    card.textContent = card;
    cardHeadline.textContent = obj.headline;
    author.textContent = author;
    authorImgContainer.src = obj.imgContainer;
    authorBy.texgtContent = obj.by;
    // append
    card.appendChild(card);
    card.appendChild(cardHeadline);
    author.appendChild(author);
    author.appendChild(authorImgContainer);
    author.appendChild(authorBy);

    // styling
    card.classList.add('card');
    card.classList.add('headline');
    author.classList.add('author')
    author.classList.add('img-container')
    author.classList.add('authorsName')
};