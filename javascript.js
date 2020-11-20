let movies = [{
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]
window.onload = function () {
    document.getElementById("sortById").addEventListener("click", sortById);
    document.getElementById("sortByRank").addEventListener("click", sortByRank);
    document.getElementById("sortByName").addEventListener("click", sortByName);
}

function SortTheMovie(Movies, SortAttr) {
    for (let start = 0; start < movies.length; start++) {
        for (let j = start + 1; j < movies.length; j++) {
            if (movies[j][SortAttr] < movies[start][SortAttr]) {
                temp = movies[start];
                movies[start] = movies[j];
                movies[j] = temp;
            }
        }
    }
    return movies
}


// console.log(SortTheMovie(movies,"id"));
function sortByRank(movies) {
    movies = SortTheMovie(movies, "rank");
    console.log(movies);
    let tableinfo = ""
    for (let index = 0; index < movies.length - 1; index++) {
        tableinfo += "<tr> ";
        tableinfo += "<td>" + movies[index].id + "</td>"
        tableinfo += "<td>" + movies[index].title + "</td>"
        tableinfo += "<td>" + movies[index].rank + "</td>"
        tableinfo += "</tr>";
    }
    // console.log(tableinfo)
    document.getElementById("TableInfo").innerHTML = tableinfo;
}


function sortById(movies) {
    document.getElementById("TableInfo").innerHTML = "";
    movies = SortTheMovie(movies, "id");
    console.log(movies);
    let tableinfo = ""
    for (let index = 0; index < movies.length - 1; index++) {
        tableinfo += "<tr> ";
        tableinfo += "<td>" + movies[index].id + "</td>"
        tableinfo += "<td>" + movies[index].title + "</td>"
        tableinfo += "<td>" + movies[index].rank + "</td>"
        tableinfo += "</tr>";
    }
    // console.log(tableinfo)
    document.getElementById("TableInfo").innerHTML = tableinfo;

}

function sortByName(movies) {
    document.getElementById("TableInfo").innerHTML = "";
    movies = SortTheMovie(movies, "title");
    console.log(movies);
    let tableinfo = ""
    for (let index = 0; index < movies.length - 1; index++) {
        tableinfo += "<tr> ";
        tableinfo += "<td>" + movies[index].id + "</td>"
        tableinfo += "<td>" + movies[index].title + "</td>"
        tableinfo += "<td>" + movies[index].rank + "</td>"
        tableinfo += "</tr>";
    }
    // console.log(tableinfo)
    document.getElementById("TableInfo").innerHTML = tableinfo;

}