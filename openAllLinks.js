/*OPEN AS MANY TABS AS POSSIBLE AT ONCE */

const links = [
	"https://www.youtube.com/",
	"https://www.uol.com.br/",
	"https://www.google.com/",
	"https://www.codewars.com/",
	"https://www.freecodecamp.org/",
	"https://pt-br.facebook.com/"
]
 
const openAll = links => {
	links.forEach(link => {
		window.open(`${link}`,'_blank');
	});
}


openAll(links);
