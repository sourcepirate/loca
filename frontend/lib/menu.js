import $ from 'jquery';
import application from './application';

export default () => {
    $(document).on('click', '.js-nav-action', function() {
        var viewId = $(this).data('id');
        application.updateView(viewId, null, true);
    });
    $(document).on('click', '.navbar-collapse.collapse.in a:not(.dropdown-toggle)', function() {
        $(this).closest('.navbar-collapse').collapse('hide');
    });
    $(document).on('click', '.navbar-collapse.collapse.in button:not(.navbar-toggle)', function() {
        $(this).closest('.navbar-collapse').collapse('hide');
    });

    // affix management for js-side-menu
    $(document).on('before-show-card', '.js-side-menu', function() {
        $(this).affix({offset: { top: 0 }});
    });

    $(document).on('after-show-card', '.js-side-menu', function() {
        $(this).affix('checkPosition');
    });

    $(document).on('before-hide-card', '.js-side-menu', function() {
        $(window).off('.affix');
        $(this).removeData('bs.affix').removeClass('affix affix-top affix-bottom');
    });

    $(document).on('affix.bs.affix', '.js-side-menu', function() {
        $(this).width($(this).width());
    });

    $(window).resize(function () {
        var parentSize = $('#right-menu-pane').width();
        $('.active.affix').each(function() {
            var affixPadding = $(this).innerWidth() - $(this).width();
            $(this).width(parentSize - affixPadding);
        });
    });
};
