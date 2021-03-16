var isInit = false;
function openModal(){
  var elModal  = document.querySelector('#Modal');
  if(isInit==false) {
   isInit = true;
   document.querySelector('.prefix-close').addEventListener('click',
        function(event) {
           event.preventDefault();
           elModal.classList.toggle('active');
        }
    );
  }
  elModal.classList.toggle('active');
}
 


function ifChecked(checkID, contentID, textID){
  var text = document.getElementById(textID);
  var check= document.getElementById(checkID);
  var content = document.getElementById(contentID);
  styleText = text.style;
  style = content.style;
  if(check.checked){
      style.backgroundColor = "#0E81A2";
      styleText.color = "white";
  }else {
      style.backgroundColor = "white";
      styleText.color = "#0E81A2";
  }
}

function ifCheckedLevel(checkLevelID, checkboxFalse){
  var checkLevel = document.getElementById(checkLevelID);
  var checkFalse = document.getElementById(checkboxFalse);
  styleCheck = checkFalse.style;
  if($(checkLevel).prop('checked')){
     $(checkFalse).prop('checked',true);
     styleCheck.opacity = "100%";
  }
  else {
     $(checkFalse).prop('checked',false);
     styleCheck.opacity = "0%";
  }

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


// Get the modal
var modal1000 = document.getElementById("myModal1000");

// Get the button that opens the modal
var btn1000 = document.getElementById("myBtn1000");

// Get the <span> element that closes the modal
var span1000 = document.getElementsByClassName("close1000")[0];

// When the user clicks on the button, open the modal
btn1000.onclick = function() {
  modal1000.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1000.onclick = function() {
  modal1000.style.display = "none";
}


// Get the modal
var modal2000 = document.getElementById("myModal2000");

// Get the button that opens the modal
var btn2000 = document.getElementById("myBtn2000");

// Get the <span> element that closes the modal
var span2000 = document.getElementsByClassName("close2000")[0];

// When the user clicks on the button, open the modal
btn2000.onclick = function() {
  modal2000.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2000.onclick = function() {
  modal2000.style.display = "none";
}

// Get the modal
var modal3000 = document.getElementById("myModal3000");

// Get the button that opens the modal
var btn3000 = document.getElementById("myBtn3000");

// Get the <span> element that closes the modal
var span3000 = document.getElementsByClassName("close3000")[0];

// When the user clicks on the button, open the modal
btn3000.onclick = function() {
  modal3000.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3000.onclick = function() {
  modal3000.style.display = "none";
}

// Get the modal
var modal3500 = document.getElementById("myModal3500");

// Get the button that opens the modal
var btn3500 = document.getElementById("myBtn3500");

// Get the <span> element that closes the modal
var span3500 = document.getElementsByClassName("close3500")[0];

// When the user clicks on the button, open the modal
btn3500.onclick = function() {
  modal3500.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3500.onclick = function() {
  modal3500.style.display = "none";
}

// Get the modal
var modal5000 = document.getElementById("myModal5000");

// Get the button that opens the modal
var btn5000 = document.getElementById("myBtn5000");

// Get the <span> element that closes the modal
var span5000 = document.getElementsByClassName("close5000")[0];

// When the user clicks on the button, open the modal
btn5000.onclick = function() {
  modal5000.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5000.onclick = function() {
  modal5000.style.display = "none";
}






var adventureModal = document.getElementById("adventureModal");

// Get the button that opens the modal
var adventureBtn = document.getElementById("adventureBtn");

// Get the <span> element that closes the modal
var advClose = document.getElementsByClassName("advClose")[0];

// When the user clicks on the button, open the modal
adventureBtn.onclick = function() {
  adventureModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
advClose.onclick = function() {
  adventureModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == adventureModal || event.target == modal || event.target == modal1000 || event.target == modal2000 ||
    event.target == modal3000 || event.target == modal3500 || event.target == modal5000 ) {
      adventureModal.style.display = "none";
      modal.style.display = "none";
      modal1000.style.display = "none";
      modal2000.style.display = "none";
      modal3000.style.display = "none";
      modal3500.style.display = "none";
      modal5000.style.display = "none";
    }
  } 


$('.owl-carousel-1').owlCarousel({
    autoplay:false,
    loop:true,
    margin:20,
    dots:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        }
    }
});
$('.owl-carousel-1').on('mousewheel', '.owl-stage', function (e) {
  if(e.originalEvent.wheelDelta > 0) {
    $('.owl-carousel-1').trigger('prev.owl');
  }
  else{
    $('.owl-carousel-1').trigger('next.owl');
  }
  e.preventDefault();
});
$('.owl-carousel-1 .owl-next').click(function() {
  $('.owl-carousel-1').trigger('next.owl');
});
// Go to the previous item
$('.owl-carousel-1 .owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $('.owl-carousel-1').trigger('prev.owl', [300]);
});

$('.owl-carousel-2').owlCarousel({
  autoplay:false,
  loop:false,
  margin:20,
  
  dots:false,
  stagePadding:50,
  mouseDrag:true,
  touchDrag:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },            
      960:{
          items:4
      }
  }
});


var phoneMask = IMask(
  document.getElementById('input_phone'), {
    mask: '+{7}(000)000-00-00'
  });

// Get the modal
var adventureModal = document.getElementById("adventureModal");

// Get the button that opens the modal
var adventureBtn = document.getElementById("adventureBtn");

// Get the <span> element that closes the modal
var advClose = document.getElementsByClassName("advClose")[0];

// When the user clicks on the button, open the modal
adventureBtn.onclick = function() {
  adventureModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
advClose.onclick = function() {
  adventureModal.style.display = "none";
}

