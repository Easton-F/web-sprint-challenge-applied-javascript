  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


  const Tabs = (topics) => {
  
    const topicsSection = document.createElement('div')
    topicsSection.classList.add('topics');
      
  for(let i = 0; i < topics.length; i++){
    let div = document.createElement('div');
        
          div.textContent = topics[i];
          div.classList.add('tab');
           
          topicsSection.appendChild(div);
  }
    
      return topicsSection;
  }


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsAppender = (selector) => {

    const mySelectorTabs = document.querySelector(selector);

    axios.get(`http://localhost:5001/api/topics`)
    .then( res => {
        console.log(res.data.topics);
        const topicsData = res.data.topics;

        const allTabs = Tabs(topicsData);
        mySelectorTabs.appendChild(allTabs);
     
    })
    .catch( err => {
        console.log("Error:", err);
    })
   
  }


export { Tabs, tabsAppender }

 


 
