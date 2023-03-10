import config from "../conf/index.js";


//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  console.log(search, config);
  let urlParam = new URLSearchParams(search);
  let city = urlParam.get('city');
  return city;

}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try
  {
    let response = await fetch(`${config.backendEndpoint}/adventures/?city=${city}`);
    let apiData = await response.json();
    console.log(apiData);
    return apiData;
  }
  catch
  {
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures)
{

  //  TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  const adventureElement = document.querySelector("#data");
  adventures.forEach((adventure)=>{
    const {id,name,costPerHead,currency,image,duration,category}=adventure;
    // console.log(id,name,costPerHead,currency,image,duration,category);
    
    const divCol = document.createElement("div");
    divCol.setAttribute("class","col-6 col-sm-3 mb-3");
    const divColData = `
    <a href="detail/?adventure=${id}", id="${id}">
      <div class="activity-card">
      <div class="category-banner mx-0">${category}</div>
        <img src="${image}" >
          <div class="row p-2">
            <div class="col-md-6">${name}</div>
            <div class="col-md-6">&#8377;${costPerHead}</div>
            <div class="col-md-6">Duration</div>
            <div class="col-md-6">${duration} Hours</div>
        </div>
      </div>
    </a>   
    `
    divCol.innerHTML = divColData;
    adventureElement.appendChild(divCol);
  })
 


  // console.log('adven-DOM : ', adventures);
  // let adParent = document.getElementById('data');
  
  // for (let ad of adventures)
  // {
  //   let adCard = document.createElement('div');
  //   adCard.id = ad.id;
  //   adCard.classList.add("col-lg-3", "col-xs-12", "col-md-6", "mb-2");

  //   adCard.innerHTML = `
  //     <a id=${ad.id}, href="detail/?adventure=${ad.id}", class="activity-card">
  //     <img src="${ad.image}" class="activity-card-img" height="150" width="225" />
  //     <div class="category-banner">${ad.category}</div>
  //     <div class="container-fluid">
  //       <div class="row">
  //         <div class="col-6 justify-content-start">${ad.name}</div><div class="col-6 justify-content-end">₹${ad.costPerHead}</div>
  //         <div class="col-6 justify-content-start">Duration</div><div class="col-6 justify-content-end">${ad.duration} Hours</div>
  //       </div>
  //     </div>
  //   </a>`;

  //   adParent.appendChild(adCard);
  // }
  

}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
