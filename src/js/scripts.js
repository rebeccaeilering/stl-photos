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

      for (item of data) {
        var onstlPhotos = data.filter( item => item.neighborhood =="Old North");
        var nnrPhotos = data.filter( item => item.neighborhood =="Near North Riverfront");
      }

      if (window.location.pathname === '/photos/old-north-st-louis.html') {
        for (var i = 0; i < onstlPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img src="../images/old-north/${onstlPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      } else if (window.location.pathname === '/photos/near-north-riverfront.html') {
        for (var i = 0; i < nnrPhotos.length; i++) {
          const item = document.createElement('div');
          item.classList.add('photo');
          item.innerHTML = `<img src="../images/near-north-riverfront/${nnrPhotos[i].fileName}" alt="">`;
          photoList.appendChild(item);
        }
      }

      const imageThumbs = document.querySelectorAll("img");
      const fullImg = document.getElementById('full-img');
      const fullImgContainer = document.querySelector('.lightbox-container');
      const body = document.querySelector('body');
      const close = document.getElementById('close');
      imageThumbs.forEach((thumb) => {
        thumb.addEventListener('click', function () {
          fullImg.src = thumb.src;
          fullImgContainer.classList.add('show');
          body.classList.add('overlay');
        });
      });

      if(close){
        close.addEventListener('click', function () {
          fullImgContainer.classList.remove('show');
          body.classList.remove('overlay');
        });
      }
    }
    getData();
  }
});
