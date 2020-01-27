// Browser friendly label float

// Run this function whenever loading pre-populated content to float the label
function checkLabelFloat() {
    $('.float-style').filter(function(){
        if(this.value){
            $(this).addClass('active');
        }
    });
}

$(document).on('focus', '.float-style', function() {
    $(this).addClass('active');
});

$(document).ready(function(){
    checkLabelFloat();
    $('.float-style').filter(function(){
        if(this.value){
            $(this).addClass('active');
        }
    });
});

$(document).on('blur', '.float-style', function() {
    if ($(this).val() == '') {
        $(this).removeClass('active');
    }
});
// Browser friendly label float
