/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
const artists = [
   {
     Name: "Ms Scandalous",
     birthYear: 1985,
     Link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    Name: "Juggy D",
    birthYear: 1981,
    Link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    Name: "Sukhbir Singh",
    birthYear: 1969,
    Link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    Name: "Abrar-ul-Haq",
    birthYear: 1989,
    Link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    Name: "Rishi Rich",
    birthYear: 1970,
    Link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ];
    const target = document.getElementById("bhangra");
    const bhangraTable = makeTable(artists);
    target.appendChild(bhangraTable);
    
/* The piece of code above looks at each element in mountains before appending it to the newly
created table. */


    // utility functions:

    // function to make a table from an array of objects:
    function makeTable(arr) {
      const table = document.getElementById("bhangra");
      // use first object in the array to make the header:
      table.innerHTML = makeTableHeader(arr[0]);
      for (let obj of arr) {
        table.innerHTML += makeTableRow(obj);
      }
      console.log(table.innerHTML);
      // don't forget to return the table:
      return table;
    }

    // function to make a table header:
    function makeTableHeader(obj) {
      let inner = "<tr>";
      // fill it in with the th-elements:
      for (let columnName of Object.keys(obj)) {
          inner += `<th>${columnName}</th>`;
      }
      // add the closer:
      inner += "</tr>";
      console.log(inner);
      return inner;
    }

    // function to make a table row:
    function makeTableRow(obj) {
      let inner = "<tr>";
      for (let key of Object.keys(obj)) {
        if (key === "Link") {
          const anchorHTML = `<a href="${obj["Link"]}" target="_blank">${obj["Link"]}</a>`;
          inner += `<td>${anchorHTML}</td>`;
        } else {
          inner += `<td>${obj[key]}</td>`;
        }
      }
      inner += "</tr>";
      return inner;
    }


