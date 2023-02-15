//  sticky nav bar js -
$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});

// Toggle 
$(".mobile-nenu").click(function() {
    $(this).toggleClass("on");
    $("nav").slideToggle();
});

// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll_To_Top').fadeIn();
    } else {
        $('.scroll_To_Top').fadeOut();
    }
});
$('.scroll_To_Top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 10);
    return false;
});

// count

(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function(value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

//  Vertical Tabs to Accordion
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});

$(".tab_container").css("min-height", function() {
    return $(".tabs").outerHeight() + 50;
});
$(".tab_drawer_heading").click(function() {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


// Join Us popup
$(".leadership_joinus").on('click', function() {
    $(".popup_leadership_joinus").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function() {
    $(".popup_leadership_joinus").removeClass('model-open');
});

// Light Box with Gallery
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});
//  We are Hearing
$(".destctions").hide();
$(".view_destcrtion").on("click", function() {
    $(this).prev('.destctions').slideToggle(100);
    if ($(this).text().trim() == "Read More") {
        $(this).text("Read Less");
    } else {
        $(this).text("Read More")
    }
});


//  Our Partners Logo
$('.our_partners_logo_industry').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});