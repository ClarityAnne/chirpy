const mobile = ` 


<a href="#side" class="button question">?</a>
<a href="#content" class="button up">↑</a>


`


const side = ` 




<!-- 
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
• • SITE HEADER • • 
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~ 
-->
<header>

<!-- change the site header, which appears at the top of the sidebar and includes the title, a tagline denoted by the <span> tag within it, and a paragraph of text. -->
<h1><a href="/index.html">Call Her She<span>A Simple Shrine</span></a></h1>
<p>I love God, and to me, <em>God is She</em>. Welcome to this small shrine, a little webbed site dedicated to my nascent devotion, my thoughts on spirituality, and more. I’m not part of any sort of organized faith, just worship of Her.</p><p>I created this site to explain my own beliefs, and as a place to share (found) devotional images, artwork, and perhaps even my own poetry later on. Some of the contents may <em>surprise</em> you, though!</p>
</header>

<!-- 
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
 • • SIDEBAR BELOW • • 
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~
~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~ 
-->

<aside>

<!-- ahh, yes, put what you like in the sidebar following the menu (or before it, below) -->


<nav>

<!-- this is the navigation menu and other content within the left side beneath the header title and paragraph -->
<ul>
<li><a href="#">Site Index</a></li>

<li><span>To Begin</span>
<ul class="submenu">
<li><a href="/begin/she.html">Who is She?</a></li>
<li><a href="/begin/history.html">History and More</a></li>
<li><a href="/begin/links.html">Links Elsewhere</a></li>
</ul>
</li>

<li><span>Devotion</span>
<ul class="submenu">
<li><a href="/love/gnosis.html">Personal Gnosis</a></li>
<li><a href="/love/beauty.html">Beautiful Things</a></li>
<li><a href="/love/words.html">Relevant Words</a></li>
</ul>
</li>

<li><span>Site Matters</span>
<ul class="submenu">
<li><a href="/site/faq.html">Frequent Questions</a></li>
<li><a href="/site/about.html">About Me</a></li>
<li><a href="/site/index.html#updates">Site Updates</a></li>
</ul></li>
</ul>



</nav>
<h2>Beautiful Art</h2>
<div id="blessed"></div>


<!-- the #inquiry element containing the question form in the sidebar begins next - remove it, or edit it to function with your own system... 
<h2>Contact</h2>
<input id="name" placeholder="Name or Alias"><br>
<input id="email" placeholder="Email Address"><br>
<textarea placeholder="Inquiry"></textarea><br>
<button id="send">Send Message</button> -->

</aside>

`
const footer = `
<p>Content and design elements appearing on this website are the work of <a href="https://fabled.day">Claire Mayhew</a>. They are licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 International</a> unless otherwise specified. This site was last updated on <span id="lastupdate"></span>. You are visitor #<span id="hitcount"></span></p>
`


$("#side").html(side);
$("#mobile").html(mobile);
$("#footer").html(footer);

//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◆       sidebar navigation      ◆
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇

document.querySelectorAll("nav li span").forEach(function (span) {
  span.addEventListener("click", function (event) {
    event.stopPropagation();

    document.querySelectorAll("nav li span").forEach(function (spanned) {
      if (spanned !== span) {
        const othersub = spanned.nextElementSibling;
        if (othersub && othersub.classList.contains("submenu")) {
          othersub.style.height = "0";
          othersub.classList.remove("open");
          spanned.classList.remove("open");
        }
      }
    });

    const sub = span.nextElementSibling;
    if (sub && sub.classList.contains("submenu")) {
      if (sub.classList.contains("open")) {
        sub.style.height = "0";
        sub.classList.remove("open");
        span.classList.remove("open");
      } else {
        sub.style.height = sub.scrollHeight + "px";
        sub.classList.add("open");
        span.classList.add("open");
      }
    }
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll("nav li span").forEach(function (span) {
    const sub = span.nextElementSibling;
    if (sub && sub.classList.contains("submenu") && sub.classList.contains("open")) {
      sub.style.height = "0";
      sub.classList.remove("open");
      span.classList.remove("open");
    }
  });
});

//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◆       scroll to top     ◆
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//causes the scroll-to-top button to appear on desktop-sized screens. 

const topbutton = document.getElementById("top");

if (window.innerWidth >= 1030) {
window.onscroll = function () {
  scrolling();
};

function scrolling() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
} else {
topbutton.style.display = "none";
}

function totop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}





//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◆       blessed images     ◆
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//a random beautiful image in the sidebar

    $(document).ready(function () {
  
      const figures = [
        {
          src: "/image/her/inanna.jpg",
          alt: "Inanna from Lewis Spence's Myths and Legends of Babylonia and Assyria",
          caption: "Inanna from Lewis Spence's <i>Myths and Legends of Babylonia and Assyria</i>"
        },
                {
          src: "/image/her/selene.jpg",
          alt: "Bust of Selene from a Roman Sarcophagus",
          caption: "Bust of Selene from a Roman Sarcophagus"
        },
        {
          src: "/image/her/eos.jpg",
          alt: "Eos by Evelyn De Morgan",
          caption: "<i>Eos</i> by Evelyn De Morgan"
        },
        {
          src: "/image/her/artemis.jpg",
          alt: "Artemis the Huntress by Guillaume Seignac",
          caption: "<i>Artemis the Huntress</i> by Guillaume Seignac"
        }
      ];
      const blessed = figures[Math.floor(Math.random() * figures.length)];

      const figure = $(`
        <figure>
          <img src="${blessed.src}" alt="${blessed.alt}">
          <figcaption>${blessed.caption}</figcaption>
        </figure>
      `);

      $('#blessed').append(figure);
    });




//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◆       hitcounter    ◆
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//native neocities hitcounter





let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let site_data = JSON.parse(this.responseText);
		let num_arr = site_data.info.views.toString().split("");
		let num_str = "";

		for (let i = 0; i < num_arr.length; i++) {
			num_str += num_arr[i];
			if ((num_arr.length - 1 - i) % 3 == 0 && num_arr.length - 1 - i != 0) {
				num_str += ",";
			}
		}

		let date_obj = new Date(site_data.info.last_updated);
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		document.getElementById("lastupdate").innerHTML =
			days[date_obj.getDay()] +
			", " +
			months[date_obj.getMonth()] +
			" " +
			date_obj.getDate() +
			", " +
			date_obj.getFullYear();

		document.getElementById("hitcount").innerHTML = num_str;
	}
};
xhttp.open(
	"GET",
	"https://weirdscifi.ratiosemper.com/neocities.php?sitename=callhershe",
	true
);
xhttp.send();

//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◆       title tag marquee       ◆
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
//◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇
        //this script animates the <title> tag when placed (here) in the <head> of your document just below it. it also will cease to scroll if the user clicks away from your site into another window. this ensures that your users won't be bothered by your marquee title when browsing other sites, and keeps things lowkey. this is frankenstein code but if it works, it works.

        let letitle = document.title + " ♥ "; //between those quotation marks is the character that separates each round of the marquee. a dash works well but you can easily pick something else or delete it entirely by removing the quotations etc. just don't remove the document.title part.
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

             
