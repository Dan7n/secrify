<h1 class="header-logo">
	Secrify<span class="bar-code">BAR</span>
</h1>
<slot />

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Monoton&family=Roboto+Condensed:wght@300;400;700&display=swap");

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #f8fafc;
		width: 100%;
		height: 100%;
		font-family: "Roboto Condensed", sans-serif;
	}

	.header-logo {
		font-size: clamp(3rem, 5vw, 5rem);
		text-align: center;
		padding-top: 4rem;
		width: 100%;
		font-family: "Monoton", cursive;
		font-weight: 100;
	}
	.bar-code {
		font-family: "Libre Barcode 39", cursive;
		font-size: inherit;
		padding-left: 2rem;
	}
</style>
