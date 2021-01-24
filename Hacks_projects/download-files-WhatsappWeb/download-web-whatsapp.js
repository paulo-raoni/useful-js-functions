const body = document.querySelector('body');

body.addEventListener("keyup", function(event) {
  const download = document.querySelector(`[title="Download"]`);
  if (event.keyCode === 40) {
	event.preventDefault();
	download.click();
  }
});