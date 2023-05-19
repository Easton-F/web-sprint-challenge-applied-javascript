
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const Card = (article) => {

      console.log(article);

      // for(let i = 0; i < article.obj.length; i++){
        const cardSection = document.createElement('div');
        cardSection.classList.add('card');

            const articleHeadline = document.createElement('div');
            const authorSection = document.createElement('div');
            const imgSection = document.createElement('div');
            const authorImg = document.createElement('img');
            const authorSpan = document.createElement('span');

            articleHeadline.classList.add('headline');
            authorSection.classList.add('author');
            imgSection.classList.add('img-container');

            articleHeadline.textContent = article.headline;
            authorImg.src = article.authorPhoto;
            authorSpan.textContent = article.authorName;

            cardSection.appendChild(articleHeadline);
            cardSection.appendChild(authorSection);
            authorSection.appendChild(imgSection);
            authorSection.appendChild(authorSpan);
            imgSection.appendChild(authorImg);

            console.log(cardSection);

            return cardSection;
    }

    // cardSection.addEventListener('click', article => {
    //       console.log(article.headline);
    // } )

// }


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = async (selector) => {

    const mySelectorCards = document.querySelector(selector);
    let articleData = await  axios.get(`http://localhost:5001/api/articles`)
    let atricleArrayData = articleData.data.articles;

    if(atricleArrayData.bootstrap === atricleArrayData.bootstrap){
        console.log('IF', articleData.data.articles.bootstrap[0]);
        articleData.data.articles.bootstrap.map( a => {
            console.log('A', a);
        })
    }else if(atricleArrayData.javascript === atricleArrayData.javascript){

    }


    // axios.get(`http://localhost:5001/api/articles`)
    // .then( res => {
    //     // console.log('test data', res.data.articles);
    //     console.log('article data', res.data.articles.bootstrap[0].authorName);
    //      articleData = res.data.articles;
         

    //     // const allCards = Card(articleData);
    //     // mySelectorCards.append(allCards);
     
    // })
    // .catch( err => {
    //     console.log("Error:", err);
    // })
    console.log('article data', articleData);
}

export { Card, cardAppender }
