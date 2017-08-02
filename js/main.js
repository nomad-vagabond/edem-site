/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var IB1_CLASS = 'expanded';
var IB2_CLASS = 'expanded';

document.getElementById('ice-block1').state = 'expanded';
document.getElementById('ice-block2').state = 'expanded';

$('#ice-block1').state = 'expanded';
$('#ice-block2').state = 'expanded';

// $('.edem-input').reset();
$('.edem-input').val('');
$('#message').val('');


function initScroll() {

    // var ib1_ = $("#ib1");
    // var block1_ = $('#ice-block1');

            // iblock.removeClass('mCustomScrollbar');


    $("#ib1").mCustomScrollbar({
        callbacks:{
            onOverflowY: function(){
                // $("#ib1").addClass('mcs-overflowY');
                // $("#ib1").removeClass('mcs-overflowY-none');
                $('#readmore-ib1').text('gore...');
            },
            onOverflowYNone: function(){
                // $("#ib1").removeClass('mcs-overflowY');
                // $("#ib1").addClass('mcs-overflowY-none');
                $('#readmore-ib1').text('');
            },
        },
    });

    // ib1.removeClass("mCustomScrollbar");
    // ib1.addClass("mCS_disabled");
    

    // ib1.mCustomScrollbar("disable");
    // ib1.mCustomScrollbar("update")
    // block1.css('height', '85%');
    // block1.css('overflow', 'hidden');
    // ib1.mCustomScrollbar("update");
    // ib1.removeClass("mCS_disabled");
    // ib1.addClass("mCustomScrollbar");

    // console.log(ib1.hasClass("mCustomScrollbar"));
    // console.log(ib1.hasClass("mCS_disabled"));



    // $("#ib2").mCustomScrollbar();
    // $('#ib2').mCustomScrollbar("disable", true);
}


(function($) {
    $.fn.hasScrollBar = function() {
        // return this.get(0).scrollHeight > this.height();
        return this.get(0).scrollHeight > this.innerHeight();
    }
})(jQuery);



// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});


var block1 = $('#ice-block1');
block1.state = 'expanded';
var iblock1 = $('#ib1');
iblock1.ish = $('#ice-shadow1');
var readmore1 = $('#readmore-ib1');
var ish1 = $('#ice-shadow1');
// iblock1.cshadow = 'inset 10px 0px 20px -6px #365470';

var block2 = $('#ice-block2');
block2.state = 'expanded';
var iblock2 = $('#ib2');

iblock2.ish = $('#ice-shadow2');
var readmore2 = $('#readmore-ib2');
var ish2 = $('#ice-shadow2');
// iblock2.cshadow = 'inset -10px 0px 20px -6px #365470';

var ice_shadow = 'inset 0px 0px 20px -6px #365470';


function checkSize(block, iblock, readmore, ish) {

    // var h1 = block.innerHeight();
    var h1 = block.height();
    // var h1 = block.prop('innerHeight');
    // var h1 = block.prop('offsetHeight');
    var h2 = block.prop('scrollHeight');





    // console.log("blockHeight:");
    // console.log(h1);
    // console.log(h2);

    if (h1 < h2) {
        collapseBlock(block, iblock, readmore);
        // console.log('h1, h2:');
        // console.log([h1, h2]);
        // console.log(iblock);
    }

    else {
        expandBlock(block, iblock, readmore, ish);
    }
 
}

function checkSizeBlock1() {
    checkSize(block1, iblock1, readmore1, ish1);
}

function checkSizeBlock2() {
    checkSize(block2, iblock2, readmore2, ish2);
}


$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        console.log('Resized finished.');
        checkSize(block1, iblock1, readmore1, ish1);
        checkSize(block2, iblock2, readmore2, ish2);

    }, 250);
});





// $(window).on('resize', checkSizeBlock1);
// $(window).on('resize', checkSizeBlock2);

// $(window).on('load', initScroll);

checkSizeBlock1();
checkSizeBlock2();


function expandBlock(block, iblock, readmore, ish) {
    // var w = $(window).width();
    block.css('height', 'auto');
    block.css('overflow', 'auto');
    block.state = 'expanded';
    block.removeClass('gradient-text');


    iblock.mCustomScrollbar({
        callbacks:{
            onOverflowY: function(){
                readmore.text('...less');
                // iblock.css('box-shadow', iblock.cshadow);
                // iblock.css('padding: 0;');
                // block.css('padding: 0;');
                ish.css('box-shadow', ice_shadow);
                
            },
            onOverflowYNone: function(){
                readmore.text('');
                // iblock.css('box-shadow', 'none');
                ish.css('box-shadow', 'none');
                iblock.css('padding-left: 2em;');
            },
        },
    });

    // console.log("iblock.hasClass('mcs-overflowY'):");
    // console.log(iblock.hasClass('mcs-overflowY'));

    // iblock.mCustomScrollbar("disable");
    // console.log("iblock.css('mcs-overflow'):");
    // console.log(iblock.css('overflow'));
    // block.addClass('mCustomScrollbar');

    // if (iblock.hasScrollBar()) {
    // if (iblock.hasClass("mCustomScrollbar")) {
    //     iblock.css('color', 'green');
    //     iblock.mCustomScrollbar("disable", true);
    //     iblock.removeClass('mCustomScrollbar');
    //     iblock.addClass('mCS_disabled');

    //     iblock.css('box-shadow', iblock.cshadow);
    //     readmore.text('...less');
    // }

    // if (iblock.hasClass("mCS_disabled")) {
    //     iblock.mCustomScrollbar();
    //     iblock.addClass('mCustomScrollbar');
    //     iblock.removeClass('mCS_disabled');
    //     iblock.css('box-shadow', iblock.cshadow);
    //     readmore.text('...less');
    // }

    // else if (iblock.hasClass("mcs-overflowY-none")){
        // console.log(iblock.hasScrollBar());
        // iblock.css('box-shadow', 'none');
        // iblock.removeClass('mCustomScrollbar');
        // readmore.text('');
    // }
}

function collapseBlock(block, iblock, readmore) {
    // var w = $(window).width();

    if (iblock.hasClass("mCustomScrollbar")) {
        
        // iblock.css('color', 'red');
        iblock.mCustomScrollbar("destroy");
        console.log("destroyed")
        // iblock.removeClass('mCustomScrollbar');
        // iblock.addClass('mCS_disabled');

        // console.log(iblock.css('overflow'));

    }
    
    block.css('height', '85%');
    block.css('overflow', 'hidden');
    block.state = 'collapsed';
    iblock.css('box-shadow', 'none');
    block.addClass('gradient-text');
    readmore.text('more...');


}

function expand_collapse(block, iblock, readmore, ish) {
    // var w = $( window ).width();

    if (block.state == 'collapsed') {
        // iblock.mCustomScrollbar("update");
        expandBlock(block, iblock, readmore, ish);
    } 

    else {
        // iblock.mCustomScrollbar("disable");
        collapseBlock(block, iblock, readmore);
    }
}


$('#readmore-ib1').click(function() {
    expand_collapse(block1, iblock1, $(this), ish1);
});


$('#readmore-ib2').click(function() {
    expand_collapse(block2, iblock2, $(this), ish2);
});



/*------Donation button BTCOIN------*/

/*------Open by click button and close by x------*/

// $(window).on('load', function() {
$(document).ready(function() {

    $("#coin-btn").click(function() {
        $(".pop").fadeIn(300);
    });

    $(".pop > span").click(function() {
        $(".pop").fadeOut(300);
    });

});



//  $(document).ready(function() {
//   $("button").click(function() {
//     $(".pop").fadeIn(300);
//   });

//   $(".pop > span").click(function() {
//     $(".pop").fadeOut(300);
//   });
// }) (jQuery);


/* --------Highlight all text by click on input---------*/
$("#wallet").focus(function(){
    if(this.value == this.defaultValue){
        this.select();
    }
});


/*------Eng donation button BTCOIN------*/














