
document.addEventListener('DOMContentLoaded', function() {
  const menutoggler = document.getElementById('toggler');
  const topmenu = document.getElementById('menu');
  const submenutogglers = topmenu.querySelectorAll('span');

  menutoggler.addEventListener('mouseover', function(navigate) {
    navigate.stopPropagation();
    topmenu.classList.toggle('active');
    menutoggler.classList.toggle('active');
  });

  submenutogglers.forEach(toggle => {
    toggle.addEventListener('mouseover', function(navigate) {
      navigate.preventDefault();
      navigate.stopPropagation();
      const topitem = this.parentElement;
      const submenu = topitem.querySelector('ul');

      document.querySelectorAll('#menu li').forEach(activeitem => {
        const opensubmenu = activeitem.querySelector('ul');
        if (opensubmenu) {
          opensubmenu.style.maxHeight = null;
          opensubmenu.style.opacity = 0;
        }
        activeitem.classList.remove('active');
      });

      if (!topitem.classList.contains('active')) {
        topitem.classList.add('active');
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        submenu.style.opacity = 1;
      } else {
        topitem.classList.remove('active');
        submenu.style.maxHeight = null;
        submenu.style.opacity = 0;
      }
    });
  });

  document.addEventListener('mouseover', function(navigate) {
    if (!topmenu.contains(navigate.target)) {
      if (topmenu.classList.contains('active')) {
        topmenu.classList.remove('active');
        menutoggler.classList.remove('active');
      }
      document.querySelectorAll('#menu li').forEach(activeitem => {
        activeitem.classList.remove('active');
        const submenu = activeitem.querySelector('ul');
        if (submenu) {
          submenu.style.maxHeight = null;
          submenu.style.opacity = 0;
        }
      });
    }
  });
});









const topbutton = document.getElementById("totop");


window.onscroll = function () {
  scrolling();
};

function scrolling() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.opacity = 1;
  } else {
    topbutton.style.opacity = 0;
  }
}


function totop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}





















//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—†       title tag marquee       â—†
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
        //this script animates the <title> tag when placed (here) in the <head> of your document just below it. it also will cease to scroll if the user clicks away from your site into another window. this ensures that your users won't be bothered by your marquee title when browsing other sites, and keeps things lowkey. this is frankenstein code but if it works, it works.

        let letitle = document.title + " - "; //between those quotation marks is the character that separates each round of the marquee. a dash works well but you can easily pick something else or delete it entirely by removing the quotations etc. just don't remove the document.title part.
        let letimer;
        const origtitle = document.title; //store the original title as a constant because it doesn't change

        function scrollstart() {
            if (!letimer) {
                letimer = setInterval(() => {
                    document.title = letitle = letitle.substring(1) + letitle.substring(0, 1);
                }, 400); //speed at which the marquee scrolls in milliseconds. lower = faster
   
              }
        }

        function scrollhalt() {
            clearInterval(letimer); //sets up function to cease the scrolling if your user clicks away from your website, thus it's unobtrusive, not creepy or too ostentatious...
            letimer = null;
        }

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                scrollstart(); //calls function that starts the marquee once more when the user clicks on your tab.
            } else {
                scrollhalt(); //calls function that halts marquee when tab is not visible
                document.title = origtitle; //returns the title to its original state when the user clicks away
            }
        });

         //restarts the marquee when the user clicks on your website's tab again
        if (document.visibilityState === "visible") {
            scrollstart();
        }
               //i guess if it works, it's not stupid




