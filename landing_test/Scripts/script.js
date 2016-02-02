jQuery(document).ready(function ($) {
	$('#bigtext').bigtext();
	var text = [
		
		"Hello, friend,",
		"My name is Daniel \n Fernandez",
		"I'm a jr developer and designer",
		"as well as a CS student.",
        "Welcome to my page!"

	];

    var htmlElement = document.getElementById("text");   

    var realisticTypewriter = new RealisticTypewriter();

    // 10% typo rate
    realisticTypewriter.accuracy = 94; 

    // typing speed will be from 5 to 10 characters per second.
    realisticTypewriter.minimumCharactersPerSecond = 10;
    realisticTypewriter.maximumCharactersPerSecond = 20;

    // waits at least 0.5 second and at most 1 second before it starts typing
    realisticTypewriter.minimumInitialDelay = 500;
    realisticTypewriter.maximumInitialDelay = 1200;

    var letras = jQuery('.letra');

    function writeText (counter) {

        realisticTypewriter.type(text[counter],htmlElement, function () {

            if (counter < (text.length - 1)) {

                setTimeout(function () {
                    counter++;
                    document.getElementById('text').innerHTML = '';
                    writeText(counter);

                }, 1000);
            } else {
                $('#portfolio, .email').delay(1500).fadeIn(500);


            }
        });
    }

    writeText(0);
});
