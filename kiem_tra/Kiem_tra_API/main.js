const btnPosts = document.getElementById("posts");
const btnPhotos = document.getElementById("photos");
const btnAlbums = document.getElementById("albums");
const text = document.querySelector(".title");


let listCoursesBlock = document.getElementById("list");


let postApi = "https://jsonplaceholder.typicode.com/posts";
let photosApi = "https://jsonplaceholder.typicode.com/photos";
let albumsApi = "https://jsonplaceholder.typicode.com/albums";

const start1 = () => {
    getTitles1(function (titles) {
        renderTitles(titles);
    });
}
const start2 = () => {
    getTitles2(function (titles) {
        renderTitles(titles);
    });
}
const start3 = () => {
    getTitles3(function (titles) {
        renderTitles(titles);
    });
}


const getTitles1 = callback => {
    fetch(postApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

const getTitles2 = callback => {
    fetch(photosApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

const getTitles3 = callback => {
    fetch(albumsApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

const renderTitles = titles => {
    let listTitles = document.getElementById("list");
    let htmls = titles.map(function (title){
        return `<li>${title.title}</li>`
    });
    listTitles.innerHTML = htmls.join("");
}

const backgroundColor1 = () => {
    btnPosts.style.backgroundColor = "red";
    btnPhotos.style.backgroundColor = "";
    btnAlbums.style.backgroundColor = "";
    text.innerText = "posts";
    start1();
}
const backgroundColor2 = () => {
    btnPosts.style.backgroundColor = "";
    btnPhotos.style.backgroundColor = "red";
    btnAlbums.style.backgroundColor = "";
    text.innerText = "photos";
    start2();
}
const backgroundColor3 = () => {
    btnPosts.style.backgroundColor = "";
    btnPhotos.style.backgroundColor = "";
    btnAlbums.style.backgroundColor = "red";
    text.innerText = "albums";
    start3();
}

btnPosts.onclick = backgroundColor1;
btnPhotos.onclick = backgroundColor2;
btnAlbums.onclick = backgroundColor3;
