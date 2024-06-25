document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 50, 200,0);
    counter("count2", 100, 50, 2500);
    counter("count3", 0, 40, 3000);
   });
   $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    });
  });
  
  // Slick version 1.5.8

  //sitcky navbar section start//
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('.prim_navbar').addClass('sticky')
    } else{
        $('.prim_navbar').removeClass('sticky')
    }
});
  //sitcky navbar section end//
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow:1,
    dots:true,
    centerMode: true,
    });
  });
  
  // Slick version 1.5.8
  $(document).ready(function () {
    var customContainer = jQuery(".iso-container");
    customContainer.isotope({
      filter: "*",
      transitionDuration: "2s",
      animationOptions: {
        duration: 7500,
        queue: false
      },
  
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0
      }
    });
  
    jQuery("#custom-filter li:first-child > a").addClass("is-checked");
  
    jQuery("#custom-filter a").click(function () {
      jQuery("#custom-filter .is-checked").removeClass("is-checked");
      jQuery(this).addClass("is-checked");
  
      var customSelector = jQuery(this).attr("data-filter");
      customContainer.isotope({
        filter: customSelector,
        transitionDuration: "2s",
        animationOptions: {
          duration: 7500,
          queue: false
        },
        layoutMode: "fitRows",
        fitRows: {
          gutter: 0
        }
      });
      return false;
    });
  });
  