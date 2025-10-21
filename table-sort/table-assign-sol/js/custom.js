/********************************************************************
 * 
 * This solution resembles the list-build
 * example that we studied in class.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

populateTable(artists);

//make sure to fill in the following buttons for the other categories data and random

const nameButton = document.querySelector("#nameButton");
const dateButton = document.querySelector("#dateButton");
const randButton = document.querySelector("#randButton");

nameButton.addEventListener("click", sortByName);
dateButton.addEventListener("click", sortByDate);
randButton.addEventListener("click", sortByRandom);

function sortByName() {
  console.log("name");
  function byName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0
  }
  const sortedByName = artists.sort(byName);
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = "";
  populateTable(sortedByName);
}

function sortByDate() {
  console.log("birthYear");
  function byDate(a, b) {
    if (a.birthYear < b.birthYear) return -1;
    if (a.birthYear > b.birthYear) return 1;
    return 0
  }
  const sortedByDate = artists.sort(byDate);
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = "";
  populateTable(sortedByDate);
}

function sortByRandom() {
  console.log("name");
  function byRand(a, b) {
  let myNumbs = [];
  myNumbs.push(1, 2, 3, 4, 5);

  console.log(myNumbs.indexOf(6));

  let x = 6;
  if (myNumbs.indexOf(x) === -1) {
    myNumbs.push(x);
  }

  console.log(myNumbs);

  // Return a random value so sort() can use this function
  return Math.random() - 0.5;
  }
  const sortedByRandom = artists.sort(byRand);
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = "";
  populateTable(sortedByRandom);
}

function populateTable(arr) {
  
// locate the table:
const tab = document.querySelector("#bhangra");

 // declare a string to hold the inner html.

let contents = "<tbody>";

// get in the header row:
contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;

// now loop to make the data-rows:

arr.forEach(artist => {
  // open the row:
  contents += "<tr>";
  contents += `<td>${artist.name}</td>`;
  contents += `<td>${artist.birthYear}</td>`;
  contents += `<td><a href="${artist.link}" target = "_blank">${artist.link}</a></td>`;
  // close the row:
  contents += "</tr>"
});

// close out the table body:
contents += "</tbody>";

// now make contents be the inner html of
// the table:
tab.innerHTML = contents;

}
