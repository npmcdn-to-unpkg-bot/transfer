$(document).ready(function(){
  var mobile;
  if ($(window).width() < 480) {
    mobile = true;
  } else {
    mobile = false;
  }
  if ($(window).width() < 980) {
    mobile2 = true;
  } else {
    mobile2 = false;
  }
  $(window).resize(function() {
    if ($(window).width() < 480) {
      mobile = true;
    }else{
      mobile = false;
    }
  });
  $(window).resize(function() {
    if ($(window).width() < 980) {
      mobile2 = true;
    }else{
      mobile2 = false;
    }
  });
	$('.menutop_switch').click(function(){
    if ($('.menutop_inner').hasClass('menutop_inner__on')) {
      $('.menutop_inner').removeClass('menutop_inner__on');
    } else{
      $('.menutop_inner').addClass('menutop_inner__on');
    }
  });
  $('.menutop_close').click(function(){
    if ($('.menutop_inner').hasClass('menutop_inner__on')) {
      $('.menutop_inner').removeClass('menutop_inner__on');
    } else{
      $('.menutop_inner').addClass('menutop_inner__on');
    }
  });
  if (!mobile && $('.gallery_list').length > 0) {
    var myslider = $(".gallery_list").lightSlider({
      item: 3,
      slideMargin: 22,
      controls: false
    });
  };
  if (!mobile2 && $('.reviews_list').length > 0) {
    var myslider = $(".reviews_list").lightSlider({
      item: 3,
      slideMargin: 30,
      controls: false,
      galleryMargin: 40
    });
  };
  $("select").dropdown({
    cover: true
  });

  /************************************************************************/
  if($("#gmap").length>0 && !mobile2) {
    var map;
    var myLatlng = new google.maps.LatLng(53.8749103, 27.6714312);
    var myCenter = new google.maps.LatLng(53.8749103, 27.6714312);
    function initialize() {
      /*var styles = [
        {
          stylers: [
            { hue: "#cccccc" },
            { saturation: -120 }
          ]
        },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];*/
      /*var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});*/
      var mapOptions = {
        zoom: 17,
        center: myCenter
        /*mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }*/
      };
      map = new google.maps.Map(document.getElementById('map'),
          mapOptions);
      var marker = new google.maps.Marker({
          position: myLatlng,
          title:"Webformat"
          //icon: '../images/footer-marker.png'
      });
      marker.setMap(map);
      var contentString = '<section class="location"><h1>ООО “КАМФРИ”</h1><p>+375 (29) <b>574 93 20</b>; +375 (29) <b>574 93 20</b></p><p>г. Минск, ул. Байкальская, 58/1</p></section>';
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      infowindow.open(map,marker);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    /************************************************************************/
  }
});