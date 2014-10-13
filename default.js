// add dashboard localhostswap google logo with trollface, octodex images
$('.jumbotron').css({
  //background: 'url(//bit.ly/ghD24e) no-repeat',
  background: 'url(https://octodex.github.com/images/dojocat.jpg) no-repeat',
  //float: right
  backgroundSize: 'auto 40px'
});

$('head').prepend('<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet"><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script><script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>');

$('body').prepend('<div class="span2"><ul class="nav nav-pills nav-stacked nav-stacked-menu"><li class=""><a href="/kali/kali/edit" class="stat-tab tab "><i class="icon-edit"></i>Edit Project</a></li><li class=""><a href="/kali/kali/team" class="team-tab tab"><i class="icon-group"></i>Members</a></li><li class=""><a href="/kali/kali/deploy_keys"><span></span>Deploy Keys</a></li><li class="active"><a href="/kali/kali/hooks"><span></span>Web Hooks</a></li><li class=""><a href="/kali/kali/services"><span></span>Services</a></li><li><a href="#" class="btn btn-mini center" onclick="checkAll()"><i class="icon-info"> Check all </i></a></li></ul></div>');


$('.span2').css({background: 'url(https://octodex.github.com/images/dojocat.jpg) no-repeat'});

$('.nav').css({"list-style": "none", "float": "right"});


// a script to check all boxes in a page checkAll()


function checkAll()
{
     cbs = document.getElementsByTagName('input');for(var i=0; i < cbs.length; i++){if(cbs[i].type == 'checkbox'){cbs[i].checked = true;}};
}
