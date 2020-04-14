document.addEventListener("DOMContentLoaded",(function(){const e=[{name:"Central West End",url:"central-west-end.html"},{name:"DeBaliviere Place",url:"debaliviere-place.html"},{name:"Grand Center",url:"grand-center.html"},{name:"Hi-Pointe",url:"hipointe.html"},{name:"Midtown",url:"midtown.html"},{name:"Skinker-DeBaliviere",url:"skinker-debaliviere.html"},{name:"Wydown-Skinker",url:"wydown-skinker.html"},{name:"Visitation Park",url:"visitation-park.html"},{name:"Carondelet",url:"carondelet.html"},{name:"Clifton Heights",url:"clifton-heights.html"},{name:"Fox Park",url:"fox-park.html"},{name:"LaSalle Park",url:"lasalle-park.html"},{name:"Tiffany",url:"tiffany.html"},{name:"Southwest Garden",url:"southwest-garden.html"},{name:"Tower Grove South",url:"tower-grove-south.html"},{name:"Bevo Mill",url:"bevo-mill.html"},{name:"Downtown",url:"downtown.html"},{name:"Downtown West",url:"downtown-west.html"},{name:"Carr Square",url:"carr-square.html"},{name:"College Hill",url:"college-hill.html"},{name:"Columbus Square",url:"columbus-square.html"},{name:"Fountain Park",url:"fountain-park.html"},{name:"Hamilton Heights",url:"hamilton-heights.html"},{name:"Hyde Park",url:"hyde-park.html"},{name:"Benton Park",url:"benton-park.html"},{name:"Benton Park West",url:"benton-park-west.html"},{name:"Compton Heights",url:"compton-heights.html"},{name:"Gravois Park",url:"gravois-park.html"},{name:"Marine Villa",url:"marine-villa.html"},{name:"Shaw",url:"shaw.html"},{name:"The-Gate District",url:"the-gate-district.html"},{name:"St. Louis Hills",url:"st-louis-hills.html"},{name:"Holly Hills",url:"holly-hills.html"},{name:"JeffVanderLou",url:"jeffvanderlou.html"},{name:"Kingsway East",url:"kingsway-east.html"},{name:"Lewis Place",url:"lewis-place.html"},{name:"Mark Twain",url:"mark-twain.html"},{name:"Near North Riverfront",url:"near-north-riverfront.html"},{name:"North Riverfront",url:"north-riverfront.html"},{name:"Old North St. Louis",url:"old-north-st-louis.html"},{name:"Penrose",url:"penrose.html"},{name:"Botanical Heights",url:"botanical-heights.html"},{name:"Boulivard Heights",url:"boulivard-heights.html"},{name:"Dutchtown",url:"dutchtown.html"},{name:"Kosciusko",url:"kosciusko.html"},{name:"McKinley Heights",url:"mckinley-heights.html"},{name:"South Hampton",url:"south-hampton.html"},{name:"The Hill",url:"the-hill.html"},{name:"North Hampton",url:"north-hampton.html"},{name:"Patch",url:"patch.html"},{name:"Riverview",url:"riverview.html"},{name:"St. Louis Place",url:"st-louis-place.html"},{name:"The Ville and Greater Ville",url:"the-ville-and-greater-ville.html"},{name:"Vanderventer",url:"vanderventer.html"},{name:"West End",url:"west-end.html"},{name:"O'Fallon",url:"ofallon.html"},{name:"Baden",url:"baden.html"},{name:"Academy",url:"academy.html"},{name:"Cheltenham",url:"cheltenham.html"},{name:"Clayton-Tamm",url:"clayton-tamm.html"},{name:"Forest Park Southeast",url:"forest-park-southeast.html"},{name:"Lafayette Square",url:"lafayette-square.html"},{name:"McRee Town",url:"mcree-town.html"},{name:"Soulard",url:"soulard.html"},{name:"Tower Grove East",url:"tower-grove-east.html"},{name:"Franz Park",url:"franz-park.html"},{name:"Mount Pleasant",url:"mount-pleasamt.html"}];e.sort((e,t)=>e.name>t.name?1:-1);const t=document.querySelector(".neighborhood-list");if(t)for(var l=0;l<e.length;l++){const n=document.createElement("li");n.innerHTML=`<a href="/photos/${e[l].url}">${e[l].name}</a>`,t.appendChild(n)}const n=document.querySelector(".photo-grid");if(n){!async function(){const e=await fetch("../js/buildings.json"),t=await e.json();if("/photos/old-north-st-louis.html"===window.location.pathname){for(item of t)var l=t.filter(e=>"Old North"==e.neighborhood);for(var a=0;a<l.length;a++){const e=document.createElement("div");e.classList.add("photo"),e.innerHTML=`<img src="../images/old-north/${l[a].fileName}" alt="">`,n.appendChild(e)}}else if("/photos/near-north-riverfront.html"===window.location.pathname){for(item of t)var r=t.filter(e=>"Near North Riverfront"==e.neighborhood);for(a=0;a<r.length;a++){const e=document.createElement("div");e.classList.add("photo"),e.innerHTML=`<img src="../images/near-north-riverfront/${r[a].fileName}" alt="">`,n.appendChild(e)}}else if("/photos/downtown-west.html"===window.location.pathname){for(item of t)var o=t.filter(e=>"Downtown West"==e.neighborhood);for(a=0;a<o.length;a++){const e=document.createElement("div");e.classList.add("photo"),e.innerHTML=`<img src="../images/downtown-west/${o[a].fileName}" alt="">`,n.appendChild(e)}}else if("/photos/downtown.html"===window.location.pathname){for(item of t)var m=t.filter(e=>"Downtown"==e.neighborhood);for(a=0;a<m.length;a++){const e=document.createElement("div");e.classList.add("photo"),e.innerHTML=`<img src="../images/downtown/${m[a].fileName}" alt="">`,n.appendChild(e)}}const i=document.querySelectorAll("img"),h=document.getElementById("full-img"),s=document.querySelector(".lightbox-container"),u=document.querySelector("body"),d=document.getElementById("close");i.forEach(e=>{e.addEventListener("click",(function(){h.src=e.src,s.classList.add("show"),u.classList.add("overlay")}))}),d&&d.addEventListener("click",(function(){s.classList.remove("show"),u.classList.remove("overlay")}))}()}}));