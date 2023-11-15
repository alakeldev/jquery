$(document).ready(function () {

    // $("p").hide();
    // $("p").css("color", "red");


    // EVENTS 

    //** click event
    // $("button").click(function () {
    //     // $("p").hide();

    //     // $("p").css("color", "red");

    //     // This word Important it's related to the button(same element)
    //     // $(this).hide();
    // });

    /*-------------------------------------------------------------------------------*/

    //** double click event
    // $("button").dblclick(function () {
    //     // $("p").hide();

    //     // this word it's related to the button
    //     // $(this).hide();
    // });

    /*-------------------------------------------------------------------------------*/

    //** mouse enter
    // $("button").mouseenter(function () {
    //     $("p").css("color", "blue")
    //     $(this).css("color", "#080");


    // })


    /*-------------------------------------------------------------------------------*/
    //** mouse leave
    // $("button").mouseleave(function () {
    //     $("p").css("color", "red");
    //     $(this).css("color", "#F00");
    //     $("p").hide();

    // });


    /*-------------------------------------------------------------------------------*/


    //** mouse hover => mouse enter + mouse leave  // the hover it takes two functions when mouse enter and when mouse leave
    // $("button").hover(function () {
    //     $(this).css("color", "#00F");
    //     $("p").css("color", "#00F");
    // },
    //     function () {
    //         $(this).css("color", "#080");
    //         $("p").css("color", "#080");
    //     });



    /*-------------------------------------------------------------------------------*/

    // Effects => Hide, Show , Toggle

    $("button").click(function () {

        // $("p").hide();       => hide() effect will make the html element display: none;  (inline style inside html page)
        // $(this).hide();


        // $("p").show();      => show() effect will make the html element display: block; (inline style inside html page)


        // $("p").toggle();    => toggle() effect will make if the html element already hide it will show it and if it's already shown it will hide it




        // the options inside the effects
        // $("p").hide(speed, callback function)
        // $("p").show(speed, callback function)
        // $("p").toggle(speed, callback function)

        // speed: you will control the effect speed, callback function: to make action after the effect done, show message that show the p is hidden
        // speed default value for (hide, show and toggle) = 400 ms

        // $("p").hide(5000);
        // $("p").hide("slow");
        // $("p").hide("fast");


        // $("p").hide(3000, function() {
        //     $("span").show();
        //     $("button").hide();
        // });


        // $("p").hide("slow", alert("Paragraph is Hidden"));


        // $("p").show(3000, function() {
        //     $("span").toggle();   // the toggle here is the span already showed in the page it will hide it and vice versa
        // });


        $("p").toggle(1000);
        $("span").toggle(2000);
        $(this).toggle(3000);
    });

});
