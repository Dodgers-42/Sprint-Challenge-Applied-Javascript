// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let lambda = {};

let info = {};

console.log(axios);
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((res) => {
  info = res.data.topics
  console.log(info);
// lambdaInfo(info)
  let parent = document.querySelector('.topics');
  parent.appendChild(something(info)) => {
      
  }; 
//   parent.appendChild(lambdaInfo(res.data))
}).catch((err) => console.log("wrong"))