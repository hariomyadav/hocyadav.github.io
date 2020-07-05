window.addEventListener('load', () => {
    registerSW();
  });

async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }


document.addEventListener('init', function(event) {
    var page = event.target;
    if (page.id === 'home') {
        page.querySelector('#menu_button').onclick = function() {
            document.querySelector('#menu').open();
        };
        //The postchange event listener is used for changing the dots when the carousel is changed
        page.querySelector('#carousel').addEventListener("postchange", function() {
            page.querySelector('#dot0').classList.remove("circle_current");
            page.querySelector('#dot1').classList.remove("circle_current");
            page.querySelector('#dot2').classList.remove("circle_current");
            page.querySelector('#dot' + page.querySelector('#carousel').getActiveIndex()).classList
                .add("circle_current");
        });
    } else if (page.id === 'movie_details') {
        page.querySelector('#movie_title').innerHTML = page.data.title;
    }
});

function openMovieDetails(id) {
    document.querySelector('#myNavigator').pushPage('movie_details.html', {
        data: {
            title: id
        }
    });
}

function openHome() {
    document.querySelector('#myNavigator').pushPage('home_splitter.html');
}

function goBack() {
    document.querySelector('#menu').close().then(function() {
        document.querySelector('#myNavigator').popPage()
    });
}

var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';
var obj = JSON.parse(s);
console.log(obj);
// document.getElementById("Recently_addede003").innerHTML = 
// "<ons-carousel auto-refresh swipeable overscrollable item-width=\"110px\">" + 
//     "<ons-carousel-item modifier=\"nodivider\" id=\"Recent Movie 1\" class=\"movie_cover\"
//         "onclick=\"openMovieDetails(this.id)\"\>" + 
//         "<img src=\"assets/img/movie_cover_template.jpg\">" +
//     "</ons-carousel-item>" + 
// "</ons-carousel>";


// if('serviceWorker' in navigator) {
//         window.addEventListener('load', () => {
//             navigator.serviceWorker.register('./serviceworker.js')
//                 .then((reg) => console.log('Success: ', reg.scope))
//                 .catch((err) => console.log('Failure: ', err));
//         })
//     }


    //status bar - black experiment

    // document.addEventListener("deviceready", onDeviceReady, false);
    // function onDeviceReady() {
    // console.log(StatusBar);
    // }


//json parse
    // const elements = document.getElementsByClassName('movie_list2');
    // console.log(elements);

    // const listItem00 = document.querySelector('.movie_list2');//.class
    // console.log(listItem00);
    
    // console.log(123);
    // for (var i = 0; i < elements.length; i++) { 
    //     console.log(i);
    //     console.log(elements[i]);

    // }

    const list2 = document.querySelectorAll('template');
    console.log(list2);
    list2.lastElementChild.innerHTML = '';
    list2.forEach(it => {
        //console.log(it);
        //console.log(it.querySelector('ons-page'));
    });

    // for(let i = 0; i < list2.length; i++) {
    //     list2[i].nextElementSibling.innerHTML = '<h2> New item added </h2>';
    // }

    const cl1 = document.querySelector('#home.html');
    //const cl1 = document.getElementById('login');
    console.log(cl1);

    const cl2 = document.getElementsByClassName('movie_list2');
    //console.log(cl2);

    //const cl3 = cl2.getElementById('Recent Movie 1');
    //console.log(cl3);

    const cl4 = document.querySelector("#Recent_Movie_1 > img");
    //console.log(cl4);
