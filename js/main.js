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
var readmore1 = $('#readmore-ib1');
iblock1.cshadow = 'inset 10px 0px 20px -6px #365470';

var block2 = $('#ice-block2');
block2.state = 'expanded';
var iblock2 = $('#ib2');
var readmore2 = $('#readmore-ib2');
iblock2.cshadow = 'inset -10px 0px 20px -6px #365470';


function checkSize(block, iblock, readmore) {

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
    }

    else {
        expandBlock(block, iblock, readmore);
    }
 
}

function checkSizeBlock1() {
    checkSize(block1, iblock1, readmore1);
}

function checkSizeBlock2() {
    checkSize(block2, iblock2, readmore2);
}

$(window).on('resize', checkSizeBlock1);
$(window).on('resize', checkSizeBlock2);


checkSizeBlock1();
checkSizeBlock2();


function expandBlock(block, iblock, readmore) {
    // var w = $(window).width();
    block.css('height', 'auto');
    block.css('overflow', 'auto');
    block.state = 'expanded';
    block.removeClass('gradient-text');

    if (iblock.hasScrollBar()) {
        iblock.css('box-shadow', iblock.cshadow);
        readmore.text('...less');
    }

    else {
        iblock.css('box-shadow', 'none');
        readmore.text('');
    }
}

function collapseBlock(block, iblock, readmore) {
    // var w = $(window).width();
    block.css('height', '85%');
    block.css('overflow', 'hidden');
    block.state = 'collapsed';
    iblock.css('box-shadow', 'none');
    block.addClass('gradient-text');
    readmore.text('more...');
}

function expand_collapse(block, iblock, readmore) {
    // var w = $( window ).width();

    if (block.state == 'collapsed') {
        expandBlock(block, iblock, readmore);
    } 

    else {
        collapseBlock(block, iblock, readmore);
    }
}


$('#readmore-ib1').click(function() {
    expand_collapse(block1, iblock1, $(this));
});


$('#readmore-ib2').click(function() {
    expand_collapse(block2, iblock2, $(this));
});


