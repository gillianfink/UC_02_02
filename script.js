$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('#header_nav').removeClass('small');
        $('#header_nav').removeClass('fade');
        // $('body').removeClass('green');
        // $(‘body’).removeClass(‘changeColor’)

    } else {
        $('#header_nav').addClass('small');
        $('#header_nav').addClass('fade');
        // $('body').addClass('green');
        // $(‘body’).addClass(‘changeColor’)
    }
});


$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});


$(document) .ready(function() {


var a= true;
    $("#madisontxt").hover(function(){
        if (a==true) {
          
            $( "#madisonimg" ).css("display", "inherit");
            
            a=false;
        }
        else {

            $( "#madisonimg" ).css("display", "none");

            a=true;
            
        }   
    });



var b= true;
    $("#allisontxt").hover(function(){
        if (b==true) {
          
            $( "#allisonimg" ).css("display", "inherit");
            
            b=false;
        }
        else {

            $( "#allisonimg" ).css("display", "none");

            b=true;
            
        }   
    });


var c= true;
    $("#zoetxt").hover(function(){
        if (c==true) {
          
            $( "#zoeimg" ).css("display", "inherit");
            
            c=false;
        }
        else {

            $( "#zoeimg" ).css("display", "none");

            c=true;
            
        }   
    });

 var d= true;
    $("#toritxt").hover(function(){
        if (d==true) {
          
            $( "#toriimg" ).css("display", "inherit");
            
            d=false;
        }
        else {

            $( "#toriimg" ).css("display", "none");

            d=true;
            
        }   
    });


 var e= true;
    $("#gracetxt").hover(function(){
        if (e==true) {
          
            $( "#graceimg" ).css("display", "inherit");
            
            e=false;
        }
        else {

            $( "#graceimg" ).css("display", "none");

            e=true;
            
        }   
    });

var f= true;
    $("#gilliantxt").hover(function(){
        if (f==true) {
          
            $( "#gillianimg" ).css("display", "inherit");
            
            f=false;
        }
        else {

            $( "#gillianimg" ).css("display", "none");

            f=true;
            
        }   
    });

var g= true;
    $("#hawatxt").hover(function(){
        if (g==true) {
          
            $( "#hawaimg" ).css("display", "inherit");
            
            g=false;
        }
        else {

            $( "#hawaimg" ).css("display", "none");

            g=true;
            
        }   
    });


 var i= true;
    $("#judytxt").hover(function(){
        if (i==true) {
          
            $( "#judyimg1" ).css("display", "inherit");
            $( "#judyimg2" ).css("display", "inherit");
            
            i=false;
        }
        else {

            $( "#judyimg1" ).css("display", "none");
            $( "#judyimg2" ).css("display", "none");

            i=true;
            
        }   
    });


  var j= true;
    $("#aboutfacetxt").hover(function(){
        if (j==true) {
          
            $( "#aboutfaceimg1" ).css("display", "inherit");
            $( "#aboutfaceimg2" ).css("display", "inherit");
            
            j=false;
        }
        else {

            $( "#aboutfaceimg1" ).css("display", "none");
            $( "#aboutfaceimg2" ).css("display", "none");

            j=true;
            
        }   
    });

  var k= true;
    $("#ladidatxt").hover(function(){
        if (k==true) {
          
            $( "#ladidaimg1" ).css("display", "inherit");
            $( "#ladidaimg2" ).css("display", "inherit");
            $( "#ladidaimg3" ).css("display", "inherit");
            
            k=false;
        }
        else {

            $( "#ladidaimg1" ).css("display", "none");
            $( "#ladidaimg2" ).css("display", "none");
            $( "#ladidaimg3" ).css("display", "none");

            k=true;
            
        }   
    });


   var l= true;
    $("#nav-icon3").click(function(){
        if (l==true) {
          
            $( ".mobilemenu" ).css("display", "inherit");
            
            l=false;
        }
        else {

            $( ".mobilemenu" ).css("display", "none");

            l=true;
            
        }   
    });

var coll = document.getElementsByClassName("collapsible");
var p;

for (p = 0; p < coll.length; p++) {
  coll[p].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } 

    else {
      content.style.display = "block";
    }
  });
}

   var q= true;
    $("#madisontxtmobile").click(function(){
        if (q==true) {
          
            $( "#madisontxtmobile" ).css("font-style", "italic");
            $( "#madisontxtmobile" ).css("text-decoration", "line-through");
            
            q=false;
        }
        else {

            $( "#madisontxtmobile" ).css("font-style", "normal");
            $( "#madisontxtmobile" ).css("text-decoration", "none");

            q=true;
            
        }   
    });


   var qq= true;
    $("#allisontxtmobile").click(function(){
        if (qq==true) {
          
            $( "#allisontxtmobile" ).css("font-style", "italic");
            $( "#allisontxtmobile" ).css("text-decoration", "line-through");
            
            qq=false;
        }
        else {

            $( "#allisontxtmobile" ).css("font-style", "normal");
            $( "#allisontxtmobile" ).css("text-decoration", "none");

            qq=true;
            
        }   
    });

   var r= true;
    $("#zoetxtmobile").click(function(){
        if (r==true) {
          
            $( "#zoetxtmobile" ).css("font-style", "italic");
            $( "#zoetxtmobile" ).css("text-decoration", "line-through");
            
            r=false;
        }
        else {

            $( "#zoetxtmobile" ).css("font-style", "normal");
            $( "#zoetxtmobile" ).css("text-decoration", "none");

            r=true;
            
        }   
    });

    var rr= true;
    $("#toritxtmobile").click(function(){
        if (rr==true) {
          
            $( "#toritxtmobile" ).css("font-style", "italic");
            $( "#toritxtmobile" ).css("text-decoration", "line-through");
            
            rr=false;
        }
        else {

            $( "#toritxtmobile" ).css("font-style", "normal");
            $( "#toritxtmobile" ).css("text-decoration", "none");

            rr=true;
            
        }   
    });

    var s= true;
    $("#gracetxtmobile").click(function(){
        if (s==true) {
          
            $( "#gracetxtmobile" ).css("font-style", "italic");
            $( "#gracetxtmobile" ).css("text-decoration", "line-through");
            
            s=false;
        }
        else {

            $( "#gracetxtmobile" ).css("font-style", "normal");
            $( "#gracetxtmobile" ).css("text-decoration", "none");

            s=true;
            
        }   
    });

    var ss= true;
    $("#gilliantxtmobile").click(function(){
        if (ss==true) {
          
            $( "#gilliantxtmobile" ).css("font-style", "italic");
            $( "#gilliantxtmobile" ).css("text-decoration", "line-through");
            
            ss=false;
        }
        else {

            $( "#gilliantxtmobile" ).css("font-style", "normal");
            $( "#gilliantxtmobile" ).css("text-decoration", "none");

            ss=true;
            
        }   
    });


    var t= true;
    $("#hawatxtmobile").click(function(){
        if (t==true) {
          
            $( "#hawatxtmobile" ).css("font-style", "italic");
            $( "#hawatxtmobile" ).css("text-decoration", "line-through");
            
            t=false;
        }
        else {

            $( "#hawatxtmobile" ).css("font-style", "normal");
            $( "#hawatxtmobile" ).css("text-decoration", "none");

            t=true;
            
        }   
    });
	
}); 