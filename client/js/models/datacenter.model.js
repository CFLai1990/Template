 define([
    'require',
    'marionette',
    'underscore',
    'jquery',
    'backbone',
    'config',
    'variables',
    'data',
    'Child1_Collection'
    ], function(require, Mn, _, $, Backbone, Config, Variables, Data, Child1_Collection){
        'use strict';

        var dot=numeric.dot, trans=numeric.transpose, sub=numeric.sub, div=numeric.div, clone=numeric.clone, getBlock=numeric.getBlock,
        add=numeric.add, mul=numeric.mul, svd=numeric.svd, norm2=numeric.norm2, identity=numeric.identity, dim=numeric.dim,
        getDiag=numeric.getDiag, inv=numeric.inv, det = numeric.det, norm2Squared = numeric.norm2Squared, norm1 = numeric.norm1;

        return window.Datacenter = new (Backbone.Model.extend({
            defaults: function(){
                return {
                    data: null,
                    distType: null,
                };
            },

            initialize: function(url){
                var self = this;
                this.set("distType", Config.get("distType"));
                var t_default = {
                    ready: false,
                    shown: false,
                    transition: Config.get("transition"),
                };
                _.extend(this, t_default);
                this.data = new Data();
                this.Child1_Collection = new Child1_Collection();
                this.bindAll();
            },

            bindAll: function(){
                this.listenTo(this.data, "Data__DataReady", this.updateData);
            },

            start: function(){
                this.trigger("DataCenter__initialized");
                this.loadData(Config.get('dataPath'));
            },

            loadData: function(v_path){
                var self = this;
                d3.csv(v_path, function(d){
                    self.data.update({
                        data: d,
                        dimensions: _.allKeys(d[0]),
                        sampling: false,
                    });
                });
            },

            updateData: function(){
                console.info("DataCenter: data ready!");
                this.Child1_Collection.clearAll();
                var t_cord;
                Config.get("data").array = this.data.dataArray;
                Config.get("data").distances = MDS.getSquareDistances(this.data.dataArray);
        },
    }))();
});
