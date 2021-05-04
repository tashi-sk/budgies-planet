var data;
let newsHeadline = document.querySelector('#headlines');
let newsApi = document.querySelector('.news-api');
const ul = document.querySelector('.ul');

var newUl=ul;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		data = (this.responseText);
    data = JSON.parse(this.responseText);
    displayNews(data.value);
	}
});

xhr.open("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us");
xhr.setRequestHeader("x-rapidapi-key", "57b813eff2msh18de5a931379d84p1f199cjsn56fd77bfbf61");
xhr.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");

xhr.send();



function displayNews(headlines){
  for(let k=0;k<headlines.length;k++){
  newsHeadline.innerHTML +=`<div>
                              <a href=${headlines[k].url} target="_blank"><h5>* ${headlines[k].title}</h5></a>
                              <p>${headlines[k].description}</p>
                              <p><span class="text-dark">Source: </span>${headlines[k].image.provider.name}</p>
                            </div>`;
  }
}
