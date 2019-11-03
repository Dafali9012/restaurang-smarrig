$("#gallery-container>.row>section").hover(function () {
    $(this).children(".description").css({
        "bottom": "0"
    })
}, function () {
    $(this).children(".description").css({
        "bottom": "-30%"
    })
})