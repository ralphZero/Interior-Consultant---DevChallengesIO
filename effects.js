(function(){
    var navCollapsed = document.querySelector('#nav-collapsed');
    var navToggle = document.querySelector('#nav-toggle');
    var collapseToggle = document.querySelector('#nav-collapse-toggle');
    var isToggled = false;

    navToggle.addEventListener('click', function(e){
        if(!isToggled){
            navCollapsed.className = 'nav-list-collapsed';
            isToggled = true;
        }
    }, false);

    collapseToggle.addEventListener('click', function(e){
        if(isToggled){
            navCollapsed.className = 'nav-list-collapsed hidden';
            isToggled = false;
        }
    }, false);

})();