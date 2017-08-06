

// document.getElementById('ice-block1').state = 'expanded';
// document.getElementById('ice-block2').state = 'expanded';

// $('#ice-block1').state = 'expanded';
// $('#ice-block2').state = 'expanded';

function getBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    { return 'Opera'; }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    { return 'Chrome'; }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    { return 'Safari'; }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    { return 'Firefox'; }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    { return 'IE'; }  
    else 
    { return 'unknown'; }
}


// Disable cintext menu for elements:

$("body").on("contextmenu", "#ice", function(e) {
  return false;
});

$("body").on("contextmenu", "#surface-wrap", function(e) {
  return false;
});

$("body").on("contextmenu", ".page-scroll", function(e) {
  return false;
});

$("body").on("contextmenu", "#bottom-wrap", function(e) {
  return false;
});


// (function($) {
//     $.fn.hasScrollBar = function() {
//         // return this.get(0).scrollHeight > this.height();
//         return this.get(0).scrollHeight > this.innerHeight();
//     }
// })(jQuery);



// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

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


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// Ice Blocks

var block1 = $('#ice-block1');
block1.state = 'expanded';
var iblock1 = $('#ib1');
iblock1.ish = $('#ice-shadow1');
var readmore1 = $('#readmore-ib1');
var ish1 = $('#ice-shadow1');

var block2 = $('#ice-block2');
block2.state = 'expanded';
var iblock2 = $('#ib2');
iblock2.ish = $('#ice-shadow2');
var readmore2 = $('#readmore-ib2');
var ish2 = $('#ice-shadow2');

var ice_shadow = 'inset 0px 0px 20px -6px #365470';


function checkSize(block, iblock, readmore, ish) {

    var h1 = block.height();
    var h2 = block.prop('scrollHeight');

    if (h1 < h2) {
        collapseBlock(block, iblock, readmore);
    }
    else {
        expandBlock(block, iblock, readmore, ish);
    }
}

function checkIceBlocks() {
    checkSize(block1, iblock1, readmore1, ish1);
    checkSize(block2, iblock2, readmore2, ish2);
}

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
}

function collapseBlock(block, iblock, readmore) {

    if (iblock.hasClass("mCustomScrollbar")) {
        iblock.mCustomScrollbar("destroy");
    }
    
    block.css('height', '85%');
    block.css('overflow', 'hidden');
    block.state = 'collapsed';
    iblock.css('box-shadow', 'none');

    if (getBrowser() == 'Safari') {
        block.addClass('solid-text');
    }
    else { block.addClass('gradient-text'); }

    readmore.text('more...');

}

function expand_collapse(block, iblock, readmore, ish) {

    if (block.state == 'collapsed') {
        expandBlock(block, iblock, readmore, ish);
    } 
    else {
        collapseBlock(block, iblock, readmore);
    }
}


$(window).on('load', checkIceBlocks);

$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(checkIceBlocks(), 250);
});

$('#readmore-ib1').click(function() {
    expand_collapse(block1, iblock1, $(this), ish1);
});


$('#readmore-ib2').click(function() {
    expand_collapse(block2, iblock2, $(this), ish2);
});


// BTCOIN button click

// $(window).on('load', function() {
$(document).ready(function() {

    $("#coin-btn").click(function() {
        $(".pop").fadeIn(300);
    });

    $(".pop > span").click(function() {
        $(".pop").fadeOut(300);
    });

});


// Highlight all text by click on input
$("#wallet").focus(function(){
    if(this.value == this.defaultValue){
        this.select();
    }
});


(function () {
    "use strict";

    var el = document.createElement('div');
    el.style.cssText = 'pointer-events:auto';

    if (el.style.pointerEvents !== 'auto') {
        el = null;

        var _lock = function (evt) {
            evt = evt || window.event;
            var el = evt.target || evt.srcElement;
            if (el && /\slocked\s/.test(' ' + el.className + ' ')) {
                if (evt.stopPropagation) {
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    evt.returnValue = true;
                    evt.cancelBubble = true;
                }
            }
        };

        if (document.addEventListener) {
            document.addEventListener('mousedown', _lock, false);
            document.addEventListener('contextmenu', _lock, false);
        } else {
            document.attachEvent('onmousedown', _lock);
            document.attachEvent('oncontextmenu', _lock);
        }
    }
})();

$('.edem-input').val('');
$('#message').val('');



