let deviceTier, deviceOrientation;

$(function() {
    tierAndOrientation();
    headerRightColumnHeight();
    carouselHeight();
});

$(window).on('load', function (e) {
	
});

$(window).resize(function() {
    tierAndOrientation();
    headerRightColumnHeight();
    carouselHeight();
});

$(window).scroll(function() {

});

$('.contact__input--js').focus(function() {
    $(this).closest('.contact__form-group').addClass('contact__form-group--focus');
});

$('.contact__input--js').focusout(function() {
    $(this).closest('.contact__form-group').removeClass('contact__form-group--focus');
});

$('.contact__select--js').focus(function() {
    $(this).closest('.contact__form-group').addClass('contact__form-group--focus');
});

$('.contact__select--js').focusout(function() {
    $(this).closest('.contact__form-group').removeClass('contact__form-group--focus');
});

$('.contact__textarea--js').focus(function() {
    $(this).closest('.contact__form-group').addClass('contact__form-group--focus');
});

$('.contact__textarea--js').focusout(function() {
    $(this).closest('.contact__form-group').removeClass('contact__form-group--focus');
});

$('.contact__input--name').keyup(function() {
    if ($(this).val() == '') {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--valid');
        $(this).next('.input-group-append').children('.contact__input-icon').html('');
        $(this).closest('.contact__form-group').addClass('contact__form-group--error');
    }
    else {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--error');
        $(this).next('.input-group-append').children('.contact__input-icon').html('&#10004');
        $(this).closest('.contact__form-group').addClass('contact__form-group--valid');
    }
});

$('.contact__input--email').keyup(function() {
    if ($(this).val() == '') {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--valid');
        $(this).next('.input-group-append').children('.contact__input-icon').html('');
        $(this).closest('.contact__form-group').children('.contact__status-message').text('This field is required');
        $(this).closest('.contact__form-group').addClass('contact__form-group--error');
    }
    else if (!isEmail($(this).val())) {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--valid');
        $(this).next('.input-group-append').children('.contact__input-icon').html('');
        $(this).closest('.contact__form-group').children('.contact__status-message').text('Please type a valid e-mail address');
        $(this).closest('.contact__form-group').addClass('contact__form-group--error');
    }
    else {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--error');
        $(this).next('.input-group-append').children('.contact__input-icon').html('&#10004');
        $(this).closest('.contact__form-group').children('.contact__status-message').text('This field is required');
        $(this).closest('.contact__form-group').addClass('contact__form-group--valid');
    }
});

$('.contact__select--js').change(function() {
    if ($(this).val() == 'Subject') {
        $(this).closest('.contact__form-group').addClass('contact__form-group--error');
    }
    else {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--error');
    }
});

$('.contact__textarea--js').keyup(function() {
    let textSize = $(this).val().length;
    $('.contact__characters-left').text(500 - textSize);
    if (textSize > 500) {
        $(this).closest('.contact__form-group').addClass('contact__form-group--error');
    }
    else {
        $(this).closest('.contact__form-group').removeClass('contact__form-group--error');
    }
});

$('.header__hamburger-button--js').click(function() {
    $('.mobile-off-canvas').addClass('mobile-off-canvas--open');
    $('body').addClass('no-scroll');
});

$('.mobile-off-canvas__close--js').click(function() {
    $('.mobile-off-canvas').removeClass('mobile-off-canvas--open');
    $('body').removeClass('no-scroll');
});

$('.header__search-button--js').click(function() {
    $('.search-off-canvas').addClass('search-off-canvas--open');
    $('body').addClass('no-scroll');
});

$('.search-off-canvas__close--js').click(function() {
    $('.search-off-canvas').removeClass('search-off-canvas--open');
    $('body').removeClass('no-scroll');
});

function tierAndOrientation() {
    if ($('.visible-xl').css('display') == 'block') {
      deviceTier = 'xl';
    }
    else if ($('.visible-lg').css('display') == 'block') {
        deviceTier = 'lg';
    }
    else if ($('.visible-md').css('display') == 'block') {
        deviceTier = 'md';
    }
    else if ($('.visible-sm').css('display') == 'block') {
        deviceTier = 'sm';
    }
    else if ($('.visible-xs').css('display') == 'block') {
        deviceTier = 'xs';
    }
    if (window.innerHeight >= window.innerWidth) {
        deviceOrientation = 'portrait';
    }
    else {
        deviceOrientation = 'landscape';
    }
    $('body').removeClass('xl lg md sm xs portrait landscape').addClass(deviceTier).addClass(deviceOrientation);
}

function headerRightColumnHeight() {
    if ((deviceTier == 'lg') || (deviceTier == 'xl')) {
        $('.header__right-column--js').height($('.header').height());
    }
    else {
        $('.header__right-column--js').height('auto');
    }
}

function carouselHeight() {
    if (deviceOrientation == 'portrait') {
        $('.carousel--js').css('height', '50vh');
    }
    else {
        $('.carousel--js').css('height', '100vh');
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}