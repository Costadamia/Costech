function activarScroll (selector) {
    var button = document.querySelector(selector);
    button.addEventListener('click', function(event){
        event.preventDefault();
        var page = document.querySelector('html');
        var origin = Math.max(page.scrollTop);
        var dest = document.querySelector(this.attributes.href.value).offsetTop;

        var counter = 0;
        var animation = setInterval(function(){
            counter++;
            page.scrollTop = origin + (dest * counter * 0.1);
        }, 50);

        setTimeout(function() {
            clearInterval(animation);
        }, 500);
    })
}

 activarScroll ('a[href*=inicio]');
 activarScroll ('a[href*=servicios]');
 activarScroll ('a[href*=portafolio]');
 activarScroll ('a[href*=contacto]');