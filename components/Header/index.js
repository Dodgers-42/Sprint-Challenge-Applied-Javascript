// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
let school = {header:'Lambda Time', date: 'SMARCH 28, 2019', temp: '98°'}


function Header(obj) {

    // creating const
    const header = document.createElement('div')
    const headerDate = document.createElement('span');
    const headerLambdaTimes = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // update content
    // header.textContent = obj.header;
    headerDate.textContent = obj.date;
    headerLambdaTimes.textContent = obj.header;
    headerTemp.textContent = obj.temp;

    // appending
    // header.appendChild(header);
    header.appendChild(headerDate);
    header.appendChild(headerLambdaTimes);
    header.appendChild(headerTemp);

    // styling
    header.classList.add('header');
    headerDate.classList.add('date');
    // headerLambdaTimes.classList.add('LambdaTimes');
    headerTemp.classList.add('temp');



    
    return header;
};

// Header(school);

const header = document.querySelector('.header-container');
header.appendChild(Header(school));
console.log(header);