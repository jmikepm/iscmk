$(".icon-menu").click(function(){
  console.log("Alert injs");
  if($(".menu").hasClass("active")){
    $('.menu').removeClass('active');
  }else{
    $('.menu').addClass('active');
  }
});

$('.item-link a').each(function(){
  $(this).on("click", function(){
    $('.item-link a').removeClass('menu_active');
    $(this).addClass('menu_active');

  });

});

$(document).ready(function () {

  var entries = [

    { label: 'HTML', url: 'https://html.com/', target: '_top' },
    { label: 'CSS', url: 'https://www.w3.org/Style/CSS/Overview.en.html', target: '_top' },
    { label: 'CSS 3', url: 'https://www.w3.org/Style/CSS/Overview.en.html', target: '_top' },
    { label: 'LESS', url: 'http://lesscss.org/', target: '_top' },
    { label: 'SASS', url: 'https://sass-lang.com/', target: '_top' },
    { label: 'Bootstrap', url: 'https://getbootstrap.com/', target: '_top' },
    { label: 'Materialize', url: 'https://materializecss.com/', target: '_top' },
    { label: 'PHP', url: 'https://www.php.net/manual/es/intro-whatis.php', target: '_top' },
    { label: 'Laravel', url: 'https://laravel.com/', target: '_top' },
    { label: 'YII Framework', url: 'https://www.yiiframework.com/', target: '_top' },
    { label: 'JavaScript', url: 'https://www.javascript.com/', target: '_top' },
    { label: 'JQuery', url: 'https://jquery.com/', target: '_top' },
    { label: 'Google Analytics', url: 'https://analytics.google.com/analytics/web/', target: '_top' },
    { label: 'Mailchimp', url: 'https://mailchimp.com/es/', target: '_top' },
    { label: 'Mittum', url: 'https://mittum.com/por-que-mittum/', target: '_top' },
    { label: 'Eloqua', url: 'https://www.oracle.com/mx/cx/marketing/automation/', target: '_top' },
    { label: 'Jira', url: 'https://www.atlassian.com/es/software/jira', target: '_top' },
    { label: 'Bitbucket', url: 'https://bitbucket.org/', target: '_top' },
    { label: 'Trello', url: 'https://trello.com/es', target: '_top' },
    { label: 'Magento', url: 'https://magento.com/', target: '_top' },
    { label: 'Animate Js', url: 'https://animejs.com/', target: '_top' },
    { label: 'Animate css', url: 'https://animate.style/', target: '_top' },
    { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
    { label: 'MySql', url: 'https://www.mysql.com/', target: '_top' },
    { label: 'SQL', url: 'https://www.microsoft.com/es-mx/sql-server/sql-server-2019', target: '_top' },
    { label: 'Windows', url: 'https://www.microsoft.com/es-mx/windows/', target: '_top' },
    { label: 'Linux', url: 'https://www.linux.org/', target: '_top' },
    { label: 'Fedora', url: 'https://getfedora.org/es/', target: '_top' },
    { label: 'Ubuntu', url: 'https://ubuntu.com/', target: '_top' },
    { label: 'Linux Mint', url: 'https://linuxmint.com/', target: '_top' },
    { label: 'OSX', url: 'https://es.wikipedia.org/wiki/MacOS', target: '_top' },

  ];

  var settings = {

    entries: entries,
    width:'100%',
    height: '100vh',
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'transparent',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '16',
    fontColor: '#ffffff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Montserrat, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

  };
  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $('#info-skills').svg3DTagCloud(settings);

});

$('.arrow-mob').each(function(){
  $(this).on("click", function(){

    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 30) {
    $('.menu').addClass('sticky');
  }
  else {
    $('.menu').removeClass('sticky');
  }
});