








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








        



//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—†  native neocities hitcounter  â—†
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡
//â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡â—†â—‡

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
	"https://weirdscifi.ratiosemper.com/neocities.php?sitename=midiforest",
	true
);
xhttp.send();





 
