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

// function checkSizeBlock1() {

//     var block = $('#ice-block1');
//     var iblock = $('#ib1');
//     var readmore = $('#readmore-ib1');
//     block.state = IB1_CLASS;

//     // var h1 = block.innerHeight();
//     var h1 = block.height();
//     // var h1 = block.prop('innerHeight');
//     // var h1 = block.prop('offsetHeight');
//     var h2 = block.prop('scrollHeight');

//     // console.log("blockHeight:");
//     // console.log(h1);
//     // console.log(h2);

//     if (h1 < h2) {
//         collapseBlock(block, iblock);
//         readmore.text('more...');
//     }

//     else if (!iblock.hasScrollBar()) {
//         expandBlock(block, iblock);
//         readmore.text('');
//         iblock.css('box-shadow', 'none');
//     }

//     else {
//         expandBlock(block, iblock);
//         readmore.text('...less');
//     }

//     IB1_CLASS = block.state;
 
// }

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



// $('#readmore-ib1').click(function() {
//     var block = $('#ice-block1');
//     var iblock = $('#ib1');
//     block.state = IB1_CLASS;
//     // var w = $( window ).width();

//     if (block.state == 'collapsed') {
//         expandBlock(block, iblock);

//         if (iblock.hasScrollBar()) {
//             $(this).text('...less');

//         }
//         else {
//             $(this).text('');
//             iblock.css('box-shadow', 'none');
//         }
//     } 

//     else {
//         collapseBlock(block, iblock);
//         $(this).text('more...');
//     }

//     IB1_CLASS = block.state;
// });




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

// function checkSize() {

//     var iceblock1 = document.getElementById('ice-block1');
//     var rm1 = document.getElementById('readmore-ib1');

//     // var ib1 = document.getElementById('ib1');
//     // var ib2 = document.getElementById('ib2');

//     // var ib1 = $('#ib1');

//     var ib1 = $('#ib1');
//     var iceblock1Q = $('#ice-block1');

//     // if (iceblock1.scrollHeight >= iceblock1.height()) {

//     // if (iceblock1.offsetHeight < iceblock1.scrollHeight*0.98 && iceblock1.style.overflow == 'auto') {
//     // if (iceblock1.offsetHeight < iceblock1.scrollHeight*1) {
//     if (iceblock1Q.innerHeight() < iceblock1.scrollHeight) {
//         rm1.textContent = 'more...';
//         iceblock1.className = 'gradient-text';
//         IB1_CLASS = 'collapsed';
//         // iceblock1.className = 'collapseed';
//         // iceblock1.css('collapsed') = 'true';
//     }

//     else if(iceblock1.style.overflow != 'auto') {
//     // else {
//         iceblock1.className = 'solid-text';
//         rm1.textContent = '';
//         IB1_CLASS = 'expanded';
//         // ib1.style.boxShadow = 'none';
//         ib1.css('box-shadow', 'none');
//     }

//     else {
//         rm1.textContent = '...less';
//         iceblock1.className = 'solid-text';
//         if (!ib1.hasScrollBar()) {
//             ib1.css('box-shadow', 'none');
//             rm1.textContent = '';
//         }
//         // ib1.css('box-shadow', 'none');  
//     }

//     var iceblock2 = document.getElementById('ice-block2');
//     var rm2 = document.getElementById('readmore-ib2');

//     if (iceblock2.offsetHeight <= iceblock2.scrollHeight*0.95) {
//         rm2.textContent = 'more...';
//         iceblock2.className = 'gradient-text';
//         IB2_CLASS = 'collapsed';
//     }

//     // else {
//     else if(iceblock2.style.overflow != 'auto') {
//         rm2.textContent = '';
//         iceblock2.className = 'solid-text';
//         IB2_CLASS = 'expanded';
//     }

//     else {
//         iceblock2.className = 'solid-text';  
//     }

// // })();
// }

// checkSize();



// $('#readmore-ib1').click(function() {
//     var block = $('#ice-block1');
//     var ib1 = $('#ib1');
//     var w = $( window ).width();

//     if (IB1_CLASS == 'collapsed') {
//        block.css('height', 'auto');
//        block.css('overflow', 'auto');
//        IB1_CLASS = 'expanded';
//        // ib1.css('border-bottom', 'solid black 1px');
//        ib1.css('box-shadow', 'inset 10px 0px 20px -6px #365470');
//        // block.toggleClass('solid-text');
//        block.removeClass('gradient-text');
//        $(this).text('...less')
//     } 

//     else {
//         IB1_CLASS = 'collapsed';
//         if (w < 767) {
//             // block.css('height', '60vw');
//             block.css('height', '80%');
//         }
//         else {
//             // block.css('height', '35vw');
//             block.css('height', '85%');
//             // block.css('height', '200px');
//         }
//        // block.css('height', '500px');
//        block.css('overflow', 'hidden');
//        ib1.css('box-shadow', 'none');
//        // block.toggleClass('gradient-text');
//        block.addClass('gradient-text');
//        $(this).text('more...')
//        if (block.offsetHeight < block.scrollHeight*0.98) {
//             // $(this).text('more...')
//             block.toggleClass('solid-text');
//             $(this).text('');
//        }

//     }
// });


// $('#readmore-ib2').click(function() {
//     var block = $('#ice-block2');
//     var w = $( window ).width();
//     var ib2 = $('#ib2');

//     if (IB2_CLASS == 'collapsed') {
//        block.css('height', 'auto');
//        block.css('overflow', 'auto');
//        IB2_CLASS = 'expanded';
//        ib2.css('box-shadow', 'inset -10px 0px 20px -6px #365470');
//        block.removeClass('gradient-text');
//        $(this).text('...less')
//     } 

//     else {
//         IB2_CLASS = 'collapsed';
//         if (w < 767) {
//             // block.css('height', '60vw');
//             block.css('height', '80%');
//         }
//         else {
//             // block.css('height', '35vw');
//             block.css('height', '85%');
//             // block.css('height', '200px');
//         }
//        // block.css('height', '500px');
//        block.css('overflow', 'hidden');
//        ib2.css('box-shadow', 'none');
//        block.addClass('gradient-text');
//        $(this).text('more...')
//     }
// });












// $('#readmoreX').click(function() {
//     var block = $('#ice-block1')
//     var w = $( window ).width();
//     var h = $( window ).height();
//     if (parseInt(block.css('height')) <= 0.89*h) {
//        block.css('height', 'auto');
//        block.css('overflow', 'auto');
//        $(this).text('...less')
//     } else {
//         if (w < 767) {
//             // block.css('height', '60vw');
//             block.css('height', '80%');
//         }
//         else {
//             // block.css('height', '35vw');
//             block.css('height', '85%');
//             // block.css('height', '500px');
//         }
//        // block.css('height', '500px');
//        block.css('overflow', 'hidden');
//        $(this).text('more...')
//     }
// });


// $('#readmore2X').click(function() {
//     var block = $('#ice-block2')
//     var w = $( window ).width();
//     if (parseInt(block.css('height')) <= 0.8*w) {
//        block.css('height', 'auto');
//        block.css('overflow', 'auto');
//        $(this).text('...less')
//     } else {
//         if (w < 767) {
//             // block.css('height', '70vw');
//             block.css('height', '70%');

//         }
//         else {
//             // block.css('height', '45vw');
//             block.css('height', '85%');
//             // block.css('height', '500px');
//         }
//        // block.css('height', '500px');
//        block.css('overflow', 'hidden');
//        $(this).text('more...')
//     }
// });


// document.getElementById( 'readmore' ).addEventListener( 'click', function() {
//     var body = document.getElementById( 'ice-block1' );
//     document.getElementById( 'readmore' ).textContent = 'more...';
//     if( body.className == 'expanded' ) {
//         body.className = 'collapsed';
//         document.getElementById( 'readmore' ).textContent = 'more...';
//     } else {
//         body.className = 'expanded';
//         document.getElementById( 'readmore' ).textContent = 'less...';
//     };
// } );




