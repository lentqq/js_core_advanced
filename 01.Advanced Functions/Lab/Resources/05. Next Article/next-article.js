function getArticleGenerator(input) {
	let div = document.getElementById('content');
	let counter = 0;

	function nextArticle() {
		if (counter >= input.length) return;
		let html = `
		<article>
		   <p>
			   ${input[counter++]};
	      </p>
	   </article>`;

		div.innerHTML += html;
	}
	return nextArticle;
}