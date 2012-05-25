$(function(){
  var slides=[];

  function Slide(def){
    for(var i in def){
      this[i]=def[i];
    }
  };
  Slide.prototype.insert=function(){
    $("#impress").append(this.toHTML());
  };

  Slide.prototype.toHTML=function(){
    var div =  $("#slides .model > div").clone();
    for(var i in this.data){
      div.attr("data-"+i, this.data[i]); 
    }

    div.find(".title .main").html(this.title.main);
    div.find(".title .sub").html(this.title.sub);
    div.find(".content").html(this.content);

    return div;
  }

var presTitle = {main:"Responsive Web Design", sub:"A Business and technical Approach"};

slides.push(new Slide({
  title:presTitle, content:" \
  <ul> \
  <li>Maxence Dalmais - @maxired - <a href='http://github.com/maxired'> github.com/maxired </a></li> \
  <li>Software Developer \
  <ul> \
  <li>Prospective and Emerging ProjectS / Business Marketing Strategy / France</li> \
  <li>@Atos since 2010 - Task Forme Mobility - <a href='smartdata.io'> smartdata.io</a></li> \
  </ul> \
  </li> \
  <li>Context of the presentation\
  <ul> \
  <li> About Transforming our web development</li> \
  <li> Share experiences acquirend through developements and Call for Bibs</a></li> \
  <li> Feedbacks, advices and Open Discussion \
  <ul> \
  <li>BizDevs, Devs, Newbies ?  Come and Learn !</li> \
  <li>Experts ? Come and Share </li> \
  </ul>\
  </li> \
  </ul> \
  </li> \
  </ul>", data:{x:-1000, y:-1500}
}
                     ));


slides.push(new Slide({title:presTitle, content:
                      "<ul><li>Web Developpment is a Journey<br/> With Mutliple Directions</li>"+
                      "<li>Both Short term and Long term Vision</li>"+
                      "<li style='margin-top:60px;left:640px;position:absolute;' >And much more"+
                      "<ul><li>Lots Of Buzzwords</li><li>Humor !</li><li>Advices</li><li>and a bit of Culture</li></ul></li></ul>"+
                      "<img style='width:300px;top:140px;right:0px;position:absolute' src='multidevicesweb.jpg'/><img src='tileshift.jpg'/>"
, data:{x:0,y:-1500}}));

slides.push(new Slide({title:presTitle, content:
"<div style='font-size:50px;font-weight:bold;width:100%;text-align:center;top:400px;position:absolute'> Be proud of your company</div>"
                      , data:{x:1000,y:-1500}}));



slides.forEach(function(slide){
  slide.insert();
});

impress().init();
});

