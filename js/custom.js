//*********************SERVICES*************************/
$(function() {
    //unlease animation on scroll 
    new WOW().init();
});

//******************Work*******************************/
$(function() {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled:true
        }
    });
    
});

//*****************Our Team**********************/
$(function(){
    
   $("#team-members").owlCarousel({
       items:3,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true,
       responsive : {
       0 : {
           items: 1
       },
       480 : {
           items:2
       }
   }
   });//team-members is parent class of team-member thus first add parent class always 
});
//******************Testimonial*************/
$(function(){
    
   $("#customers-testimonials").owlCarousel({
       items:1,
       autoplay:true,
       smartSpeed:700,
       loop:true,
       autoplayHoverPause:true
   });//items is 1 to display 1 photo at one time
});
//*****************Counter-up waypoints incresing likes*************/
$(function(){
     $('.counter').counterUp({
                delay: 10,
                time: 3000
            }); 
    
});
//******************Clients*********************************/
$(function(){
    
   $("#clients-list").owlCarousel({
       items:6,
       autoplay:true,
       smartSpeed:500,
       loop:true,
       autoplayHoverPause:true,
       responsive : {
       0 : {
           items: 3
       },
       480 : {
           items:4
       }
   }
   });//team-members is parent class of team-member thus first add parent class always 
});

//************Navigation-Hide and back-to-top button hide***************/
$(function(){
   
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
               //hide nav
               $("nav").removeClass("mak-top-nav");
               $("#back-to-top").fadeOut();
           } else {
               //show nav
               $("nav").addClass("mak-top-nav");
                $("#back-to-top").fadeIn();
           }
    });
    
});
//************smooth-scrolling***************/
$(function(){
 
    $("a.smooth-scroll").click(function(event){
                         
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 69
            
        }, 1250, "easeInOutExpo");
        
                          });
    
});

//************Close toggle on menu click for medium devices***********/
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggler").click();
    });
});