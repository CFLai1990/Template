define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'datacenter',
    'config',
    'Base',
    ], function(require, Mn, _, $, Backbone, Datacenter, Config, Base) {
        'use strict';
        String.prototype.visualLength = function(d)
        {
            var ruler = $("#ruler");
            ruler.css("font-size",d+'px').text(this);
            return [ruler[0].offsetWidth, ruler[0].offsetHeight];
        }

        var Child1_CollectionView = Mn.CollectionView.extend(_.extend({

            tagName: 'g',

            attributes: {
                "id":"Viewfocus",
            },

            childView: null,

            childEvents: {
            },

            childViewOptions: {
                layout: null,
            },

            initialize: function (options) {
                var self = this;
                var t_width = parseFloat($("#ViewfocusViewSVG").css("width"));
                var t_height = parseFloat($("#ViewfocusViewSVG").css("height"));
                var t_defaults = {
                    layotu: null,
                };
                options = options || {};
                _.extend(this, t_defaults);
                _.extend(this, options);
                this.layout = Config.get("childviewLayout");
                this.bindAll();
            },

            onShow: function(){
                var self = this;
            },

            bindAll: function(){
            },

            clearAll: function(){
            },
        },Base));

        return Child1_CollectionView;
    });
