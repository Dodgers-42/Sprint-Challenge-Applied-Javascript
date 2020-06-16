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

console.log(axios);
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    let parent = document.querySelector('.cards-container');
  console.log(res);
    
    for(let i = 0; i < res.data.articles.bootstrap.length; i++){
       console.log(res.data.articles.bootstrap[i]); 
      parent.appendChild(lambdaInfo(res.data.articles.bootstrap[i]));

    }
    for(let i = 0; i < res.data.articles.javascript.length; i++){
        console.log(res.data.articles.javascript[i]); 
       parent.appendChild(lambdaInfo(res.data.articles.javascript[i]));
 
    }
    for(let i = 0; i < res.data.articles.technology.length; i++){
        console.log(res.data.articles.technology[i]); 
       parent.appendChild(lambdaInfo(res.data.articles.technology[i]));
 
    }
    for(let i = 0; i < res.data.articles.jquery.length; i++){
        console.log(res.data.articles.jquery[i]); 
       parent.appendChild(lambdaInfo(res.data.articles.jquery[i]));
 
    }
    for(let i = 0; i < res.data.articles.node.length; i++){
        console.log(res.data.articles.node[i]); 
       parent.appendChild(lambdaInfo(res.data.articles.node[i]));
 
    }

    console.log('yep');

}).catch((err) => console.log("right"))

function lambdaInfo(obj) {
    // create..

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorsImg = document.createElement('img')
    const by = document.createElement('span');

    // update content..

    headline.textContent = obj.headline;
    
    authorsImg.src = obj.authorPhoto;
    by.textContent = obj.authorName;

    // append..

    card.appendChild(headline); 
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorsImg);
    author.appendChild(by);
    card.appendChild(author);

    // styling..

    card.classList.add('card');
    card.classList.add('headline');
    author.classList.add('author')
    author.classList.add('img-container')
    


    return card;
};

// const card = document.querySelector('.card');
// card.appendChild(lambdaInfo(author));
// console.log(card);