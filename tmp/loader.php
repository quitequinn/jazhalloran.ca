<div class="loader">
	<div class="vertical-center-wrap">
		<div class="vertical-center">
			<svg version="1.1" id="headerLogo_loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="200px" width="200px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  				<circle cx="50" cy="50" r="40" />
  			</svg>
		</div>
	</div>
</div>

<style>
	.loader{
		background: white;
		z-index: 9999;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.loader .vertical-center-wrap {
		display: table;
		width: 100%;
		height: 100%;
	}
	.loader .vertical-center {
		display: table-cell;
		vertical-align: middle;
	}

	#headerLogo_loader {
		margin: 0 auto;
		display: block;
		-webkit-animation: pulse2 1.2s linear infinite;
		-moz-animation: pulse2 1.2s linear infinite;
		-ms-animation: pulse2 1.2s linear infinite;
		animation: pulse2 1.2s linear infinite;
		-webkit-animation-delay: 0.5s; 
		-moz-animation-delay: 0.5s; 
		-ms-animation-delay: 0.5s; 
    	animation-delay: 0.5s;
		opacity: 1;
		-webkit-transition: all 1s;
		-moz-transition: all 1s;
		-o-transition: all 1s;
		-ms-transition: all 1s;
		transition: all 1s;
	}
	.loaded{
		opacity: 0;
		pointer-events: none;
		-webkit-transition: all 1s;
		-moz-transition: all 1s;
		-o-transition: all 1s;
		-ms-transition: all 1s;
		transition: all 1s;
	}
		
	@keyframes "pulse2" {
	 0% {
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
		transform: scale(1.1);
	 }
	 50% {
		-webkit-transform: scale(0.9);
		-moz-transform: scale(0.9);
		-o-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
		opacity: 0.75;
	 }
	 100% {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-o-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	 }

	}

	@-moz-keyframes pulse2 {
	 0% {
	   -moz-transform: scale(1.1);
	   transform: scale(1.1);
	 }
	 50% {
	   -moz-transform: scale(0.9);
	   transform: scale(0.9);
	   opacity: 0.75;
	 }
	 100% {
	   -moz-transform: scale(1);
	   transform: scale(1);
	 }

	}

	@-webkit-keyframes "pulse2" {
	 0% {
	   -webkit-transform: scale(1.1);
	   transform: scale(1.1);
	 }
	 50% {
	   -webkit-transform: scale(0.9);
	   transform: scale(0.9);
	   opacity: 0.75;
	 }
	 100% {
	   -webkit-transform: scale(1);
	   transform: scale(1);
	 }

	}

	@-ms-keyframes "pulse2" {
	 0% {
	   -ms-transform: scale(1.1);
	   transform: scale(1.1);
	 }
	 50% {
	   -ms-transform: scale(0.9);
	   transform: scale(0.9);
	   opacity: 0.75;
	 }
	 100% {
	   -ms-transform: scale(1);
	   transform: scale(1);
	 }
</style>