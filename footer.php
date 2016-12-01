<?php
function isDomainAvailible($domain) {
   //check, if a valid url is provided
   if(!filter_var($domain, FILTER_VALIDATE_URL)){
        return false;
   	}

   	//initialize curl
   	$curlInit = curl_init($domain);
   	curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
   	curl_setopt($curlInit,CURLOPT_HEADER,true);
   	curl_setopt($curlInit,CURLOPT_NOBODY,true);
   	curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);

   	//get answer
   	$response = curl_exec($curlInit);

   	curl_close($curlInit);

   	if ($response) return true;

   	return false;
}?>

	</main><!-- #content -->


	<footer id="colophon" class="site-footer container section" role="contentinfo">

	</footer><!-- #colophon -->
</div><!-- #page -->

<!-- JAVASCRIPT -->
<!-- CDN Dependencies -->
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<!-- Local Dependencies -->
<script src="vendor/jQuery-widowFix/js/jquery.widowFix-1.3.2.min.js"></script>
<script src="vendor/smartquotes/smartquotes.min.js"></script>
<script src="vendor/hypher/jquery.hypher.js"></script>
<script src="vendor/hypher/en-us.js"></script>

<!-- In the footer for better performance -->
<script src="src/js/main.js"></script>

<?php if(isDomainAvailible('https://www.google.com/')){ ?>
	<script>
		var _gaq=[['_setAccount','XXXXXX'],['_trackPageview']];
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
		g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>
<?php } ?>

</body>
</html>
