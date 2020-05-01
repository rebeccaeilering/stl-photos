document.addEventListener("DOMContentLoaded", function () {
  const neighborhoods = [
    {
      "name": "Central West End",
      "url": "central-west-end.html"
    },
    {
      "name": "DeBaliviere Place",
      "url": "debaliviere-place.html"
    },
    {
      "name": "Grand Center",
      "url": "grand-center.html"
    },
    {
      "name": "Hi-Pointe",
      "url": "hipointe.html"
    },
    {
      "name": "Midtown",
      "url": "midtown.html"
    },
    {
      "name": "Skinker-DeBaliviere",
      "url": "skinker-debaliviere.html"
    },
    {
      "name": "Wydown-Skinker",
      "url": "wydown-skinker.html"
    },
    {
      "name": "Visitation Park",
      "url": "visitation-park.html"
    },
    {
      "name": "Carondelet",
      "url": "carondelet.html"
    },
    {
      "name": "Clifton Heights",
      "url": "clifton-heights.html"
    },
    {
      "name": "Fox Park",
      "url": "fox-park.html"
    },
    {
      "name": "LaSalle Park",
      "url": "lasalle-park.html"
    },
    {
      "name": "Tiffany",
      "url": "tiffany.html"
    },
    {
      "name": "Southwest Garden",
      "url": "southwest-garden.html"
    },
    {
      "name": "Tower Grove South",
      "url": "tower-grove-south.html"
    },
    {
      "name": "Bevo Mill",
      "url": "bevo-mill.html"
    },
    {
      "name": "Downtown",
      "url": "downtown.html"
    },
    {
      "name": "Downtown West",
      "url": "downtown-west.html"
    },
    {
      "name": "Carr Square",
      "url": "carr-square.html"
    },
    {
      "name": "College Hill",
      "url": "college-hill.html"
    },
    {
      "name": "Columbus Square",
      "url": "columbus-square.html"
    },
    {
      "name": "Fountain Park",
      "url": "fountain-park.html"
    },
    {
      "name": "Hamilton Heights",
      "url": "hamilton-heights.html"
    },
    {
      "name": "Hyde Park",
      "url": "hyde-park.html"
    },
    {
      "name": "Benton Park",
      "url": "benton-park.html"
    },
    {
      "name": "Benton Park West",
      "url": "benton-park-west.html"
    },
    {
      "name": "Compton Heights",
      "url": "compton-heights.html"
    },
    {
      "name": "Gravois Park",
      "url": "gravois-park.html"
    },
    {
      "name": "Marine Villa",
      "url": "marine-villa.html"
    },
    {
      "name": "Shaw",
      "url": "shaw.html"
    },
    {
      "name": "The-Gate District",
      "url": "the-gate-district.html"
    },
    {
      "name": "St. Louis Hills",
      "url": "st-louis-hills.html"
    },
    {
      "name": "Holly Hills",
      "url": "holly-hills.html"
    },
    {
      "name": "JeffVanderLou",
      "url": "jeffvanderlou.html"
    },
    {
      "name": "Kingsway East",
      "url": "kingsway-east.html"
    },
    {
      "name": "Lewis Place",
      "url": "lewis-place.html"
    },
    {
      "name": "Mark Twain",
      "url": "mark-twain.html"
    },
    {
      "name": "Near North Riverfront",
      "url": "near-north-riverfront.html"
    },
    {
      "name": "North Riverfront",
      "url": "north-riverfront.html"
    },
    {
      "name": "Old North St. Louis",
      "url": "old-north-st-louis.html"
    },
    {
      "name": "Penrose",
      "url": "penrose.html"
    },
    {
      "name": "Botanical Heights",
      "url": "botanical-heights.html"
    },
    {
      "name": "Boulivard Heights",
      "url": "boulivard-heights.html"
    },
    {
      "name": "Dutchtown",
      "url": "dutchtown.html"
    },
    {
      "name": "Kosciusko",
      "url": "kosciusko.html"
    },
    {
      "name": "McKinley Heights",
      "url": "mckinley-heights.html"
    },
    {
      "name": "South Hampton",
      "url": "south-hampton.html"
    },
    {
      "name": "The Hill",
      "url": "the-hill.html"
    },
    {
      "name": "North Hampton",
      "url": "north-hampton.html"
    },
    {
      "name": "Patch",
      "url": "patch.html"
    },
    {
      "name": "Riverview",
      "url": "riverview.html"
    },
    {
      "name": "St. Louis Place",
      "url": "st-louis-place.html"
    },
    {
      "name": "The Ville and Greater Ville",
      "url": "the-ville-and-greater-ville.html"
    },
    {
      "name": "Vanderventer",
      "url": "vanderventer.html"
    },
    {
      "name": "West End",
      "url": "west-end.html"
    },
    {
      "name": "O'Fallon",
      "url": "ofallon.html"
    },
    {
      "name": "Baden",
      "url": "baden.html"
    },
    {
      "name": "Academy",
      "url": "academy.html"
    },
    {
      "name": "Cheltenham",
      "url": "cheltenham.html"
    },
    {
      "name": "Clayton-Tamm",
      "url": "clayton-tamm.html"
    },
    {
      "name": "Forest Park Southeast",
      "url": "forest-park-southeast.html"
    },
    {
      "name": "Lafayette Square",
      "url": "lafayette-square.html"
    },
    {
      "name": "McRee Town",
      "url": "mcree-town.html"
    },
    {
      "name": "Soulard",
      "url": "soulard.html"
    },
    {
      "name": "Tower Grove East",
      "url": "tower-grove-east.html"
    },
    {
      "name": "Franz Park",
      "url": "franz-park.html"
    },
    {
      "name": "Mount Pleasant",
      "url": "mount-pleasamt.html"
    }
  ];

  neighborhoods.sort((a, b) => (a.name > b.name) ? 1 : -1);

  const neighborhoodContainer = document.querySelector('.neighborhood-list');
  if(neighborhoodContainer){
    for (var i = 0; i < neighborhoods.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="/photos/${neighborhoods[i].url}">${neighborhoods[i].name}</a>`;
      neighborhoodContainer.appendChild(listItem);
    };
  }
  const photoList = document.querySelector('.photo-grid');

  if(photoList) {
    async function getData() {
      const response = await fetch('../js/buildings.json');
      const data = await response.json();

      if (window.location.pathname === '/photos/old-north-st-louis.html') {
        for (item of data) {
          var onstlPhotos = data.filter( item => item.neighborhood =="Old North");
        }
        for (var i = 0; i < onstlPhotos.length; i++) {
          const item = document.createElement('a');
          item.setAttribute('href',`../images/old-north/${onstlPhotos[i].fileName}`);
          if (i > 14) {
            item.innerHTML = `<img class="lazy" data-src="../images/old-north/thumbs/${onstlPhotos[i].thumb}" alt="">`;
          } else {
            item.innerHTML = `<img src="../images/old-north/thumbs/${onstlPhotos[i].thumb}" alt="">`;
          }
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/near-north-riverfront.html') {
        for (item of data) {
          var nnrPhotos = data.filter( item => item.neighborhood =="Near North Riverfront");
        }
        for (var i = 0; i < nnrPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/near-north-riverfront/${nnrPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/downtown-west.html') {
        for (item of data) {
          var downwestPhotos = data.filter( item => item.neighborhood =="Downtown West");
        }
        for (var i = 0; i < downwestPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/downtown-west/${downwestPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/downtown.html') {
        for (item of data) {
          var downPhotos = data.filter( item => item.neighborhood =="Downtown");
        }
        for (var i = 0; i < downPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/downtown/${downPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/benton-park.html') {
        for (item of data) {
          var bentonPhotos = data.filter( item => item.neighborhood =="Benton Park");
        }
        for (var i = 0; i < bentonPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/benton-park/${bentonPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/soulard.html') {
        for (item of data) {
          var soulardPhotos = data.filter( item => item.neighborhood =="Soulard");
        }
        for (var i = 0; i < soulardPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/soulard/${soulardPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/benton-park-west.html') {
        for (item of data) {
          var bentonwestPhotos = data.filter( item => item.neighborhood =="Benton Park West");
        }
        for (var i = 0; i < bentonwestPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/benton-park-west/${bentonwestPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/midtown.html') {
        for (item of data) {
          var midtownPhotos = data.filter( item => item.neighborhood =="Midtown");
        }
        for (var i = 0; i < midtownPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img class="lazy" data-src="../images/midtown/${midtownPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      }

      var lazyloadImages = document.querySelectorAll("img.lazy");    
      var lazyloadThrottleTimeout;
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
    getData();
  }
});
