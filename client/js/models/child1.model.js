define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'config',
], function(require, Mn, _, $, Backbone, Config) {
    'use strict';

    var child1 =  Backbone.Model.extend({

        initialize: function(v_options){
            var t_defaults = {
            };
            _.extend(this, t_defaults);
            _.extend(this, v_options);
        },
    });
    return child1;
});
