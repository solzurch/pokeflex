let pokemonRepository=function(){let e=0,t=[];function n(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("pokemon is not correct")}function o(){return t}return $("#exampleModal").on("shown.bs.modal",function(e){!function e(t){pokemonRepository.loadDetails(t).then(function(){let e=document.querySelector("#titleModal");e.textContent=t.name;let n=document.querySelector(".modal-body");n.innerHTML="";let o=document.createElement("img");o.src=t.imageUrl,o.alt=t.name,o.classList.add("img-fluid"),n.appendChild(o);let a=document.createElement("p");a.textContent="Height: "+t.height+"'",n.appendChild(a);let i=document.createElement("span");e.classList.add("spanType"),i.innerText="Type:";let l=document.createElement("div");l.classList.add("type-container","container","row"),n.appendChild(l),l.appendChild(i),t.types.forEach(e=>{let t=document.createElement("div");t.classList.add("type-content"),t.innerText=e.type.name,l.appendChild(t)})})}(t[e.relatedTarget.dataset.id])}),{add:n,getAll:o,addListItem:function t(n){let o=document.querySelector(".row"),a=document.createElement("div");o.appendChild(a),a.classList.add("list-group-item","col-12","col-sm-6","col-md-4","col-lg-4"),a.id=n.name;let i=document.createElement("button");i.innerText=n.name,i.setAttribute("data-id",e++),i.setAttribute("data-toggle","modal"),i.setAttribute("data-target","#exampleModal"),a.appendChild(i),i.classList.add("btn","btn-dark","btn-lg","btn-block")},filterByName:function e(n){let o=document.querySelector(".row");t.map(e=>e.name).forEach(e=>{let t=document.querySelector(`[id=${e}]`);t&&!e.match(n)&&o.removeChild(t)})},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=120").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function e(t){return fetch(t.detailsUrl).then(function(e){return e.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(e){console.error(e)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});