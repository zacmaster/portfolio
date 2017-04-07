$(document).ready(function() {
	$("#button-container").click(function() {
    	$(this).toggleClass("change");
        $("#links").toggleClass('show-links');
        $("#nav-container").toggleClass('linea-roja');
    });


    $(document).on("scroll", onScroll);
    var style = window.getComputedStyle(document.getElementsByTagName('body')[0]);
    var marginTop = parseInt(style.getPropertyValue('margin-top')); 

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        // if(! $(this).attr('id', 'nav-brand')){
        //     $(this).addClass('active');
        // }

        var target = this.hash;
        $target = $(target);
        // var bodyMargin = document.getElementsByTagName("body")[0].style.marginTop;



        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - marginTop
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if ((refElement.position().top - marginTop) <= scrollPosition && (refElement.position().top  - marginTop) + refElement.height() > scrollPosition) {
                $('nav ul li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }


    
});
