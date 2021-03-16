$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});
$(document).ready(function() {
        $.getJSON("https://blockchain.info/ticker?cors=true", function(json) {
          var html = "";
          var usd = "";
          var gbp = "";
          var aud = "";
          
          html = '<table class="table"><thead><tr><th>Para Birimi</th><th>Fiyat</th></thead><body>';
          jQuery.each(json, function(key, val) {
            html += "<tr><td><strong>" +key+ "</strong></td><td>" + val["last"] + "</td></tr>"
            
            if (key == "USD"){
              usd += val["last"] + " 💲 " +key
            }
            else if (key == "GBP"){
              gbp += val["last"] + " 💷 " +key
            }
            else if (key == "AUD"){
              aud += val["last"] + "♈️💲 " +key
            }
          });
          html += "</tbody></table>";
          $(".prices").html(html);
          $(".usd-price").html(usd);
          $(".gbp-price").html(gbp);
          $(".aud-price").html(aud);
      });
  });
