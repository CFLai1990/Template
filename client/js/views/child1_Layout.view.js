define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'd3',
    'Base',
    'Child1_CollectionView',
    'datacenter',
    'text!templates/child1_Layout.tpl'
], function(require, Mn, _, $, Backbone, d3, Base, Child1_CollectionView, Datacenter, Tpl){
    'use strict';
    return Mn.LayoutView.extend(_.extend({

        tagName:'svg',

        template: _.template(Tpl),

        regions:{
            'Child1_CollectionView':'#Child1_CollectionView',
        },

        attributes:{
            'id':'Child1_CollectionViewSVG',
        },

        initialize: function(){
            var self = this;
            var t_defaults = {
                width: null,
                height: null,
            };
            _.extend(this, t_defaults);
        },

        onShow: function(){
            var self = this;
            self.width = self.$el.width();
            self.height = self.$el.height();
                        var t_layout = {
                           width: this.width,
                         height: this.height,
                      };
                      _.extend(Config.get("childviewLayout"), t_layout);
            self.showChildView('Child1_CollectionView', new Child1_CollectionView({collection: Datacenter.Child1_Collection}));
        },

    }, Base));
});