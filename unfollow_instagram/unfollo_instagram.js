
let scrollBottomUntilFinishLazyLoad = (function() {
    return function() {
        let screen = document.querySelector("html"), 
        criteria = "",
        scrollBefore,
        scrollAfter,
        {error} = window.console;

    function getScrollTop() {
        scrollTo(0, screen.scrollTop += 1000);
        return screen.scrollTop;
    }       

    function scrollBottom() {
        scrollBefore = getScrollTop();    
        scrollAfter = getScrollTop();

        // error(scrollBefore);      
        // error(scrollAfter);

        if(scrollBefore == scrollAfter) {
            criteria = 1;
            return;
        }
        return setTimeout(scrollBottom, 1000);
    }
    
    function unfollow() {
        let unfollow = document.querySelectorAll(".unfollow-text");
        unfollow.forEach(el => el.click());
    }

    scrollBottom();

    if(criteria) {
        unfollow();
    }

    };

})();

scrollBottomUntilFinishLazyLoad();

