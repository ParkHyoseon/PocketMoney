/*
 *  Project: SKT HTML5 Framework
 *  CodeName : CornerStone
 *  FileName : plugin-spinner.js
 *  Description: 스피너는 화면전환 등의 로딩이 필요한 컨텐츠에 대해 UI적으로 로딩 중이라는 것을 표현하기 위한 플러그인이다.
 *  Author: 김우섭
 *  License :
 */

;
(function (root, doc, factory) {
    factory(root.jQuery, root, doc);
}(this, document, function (jQuery, window, document, undefined) {

    var hasTouch = ('ontouchstart' in window);

    /**
     * @class Spinner
     * @constructor
     */
    var Spinner = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.spinner.defaults, options);
    };

    Spinner.prototype.setState = function (state) {
        var d = "disabled"
            , $el = this.$element
            , data = $el.data()
            , val = $el.is("input") ? "val" : "html";

        state = state + "Text";
        data.resetText || $el.data("resetText", $el[val]());

        $el[val](data[state] || this.options[state]);

        // push to event loop to allow forms to submit
        setTimeout(function () {
            state == "loadingText" ?
                $el.addClass(d).attr(d, d) :
                $el.removeClass(d).removeAttr(d)
        }, 0)
    };

    Spinner.prototype.toggle = function () {
        var $parent = this.$element.parent("[data-toggle='buttons-radio']");

        $parent && $parent
            .find(".active")
            .removeClass("active");

        this.$element.toggleClass("active")
    };

    Spinner.prototype.show = function () {
        this.$element.addClass("widget-spinner").append("<div class='widget-spinner-icon" + (hasTouch ? 2 : "" ) + "'></div>");
    };

    Spinner.prototype.showText = function () {
        var text = this.$element.data("spinner-text");

        if (typeof text !== "string" && $.trim(text).length < 1) {
            return false;
        }

        $("div.widget-spinner div.spinner-center").attr({
            "data-content":text
        });
    };

    Spinner.prototype.removeText = function () {
        $("div.widget-spinner div.spinner-center").attr({
            "data-content":""
        });
    };

    Spinner.prototype.hide = function () {
        this.$element, this.$element.removeClass("widget-spinner").find(".widget-spinner-icon" + (hasTouch ? 2 : "" )).remove();
    };

//    Spinner.prototype.destroy = function () {
//        $(".widget-spinner").remove();
//    };


    /* BUTTON PLUGIN DEFINITION
     * ======================== */

    $.fn.spinner = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data("spinner")
                , options = typeof option == "object" && option;

            if (!data) {
                $this.data("spinner", (data = new Spinner(this, options)));
            }

            if (option == "show") {
                data.show();
            } else if (option == "hide") {
                data.hide();
            } else if (option) {
                data.setState(option)
            }
        });
    };

    $.fn.spinner.defaults = {
        loadingText:"loading..."
    };

    $.fn.spinner.Constructor = Spinner;


    $(function () {
        $("body").on("click.Spinner.data-api", "[data-plugin^=spinner]", function (e) {
            var $btn = $(e.target);
            var type = $btn.data("spinnerType");
            var target = $btn.data("spinnerTarget");
            $(target).spinner(type);
        });
    });
}));

