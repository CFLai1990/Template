require.config({
    shim: {
         'bootstrap': ['jquery'],
         'backbone': {
            deps: ['jquery','underscore'],
        },
          'MDS': ['numeric'],
          'data': ['MDS'],
          'datacenter': ['MDS'],
          'Switch': ['jquery', 'bootstrap'],
          'AppView': ['Switch'],
          'tooltip': ['jquery', 'bootstrap'],
     },
    paths: {
        // libs loader
        'text': '../bower_components/text/text',
        'jquery': ['../bower_components/jquery/dist/jquery.min'],
        'underscore': ['../bower_components/underscore/underscore-min'],
        'bootstrap': ['../bower_components/bootstrap/dist/js/bootstrap.min'],
        'backbone': ['../bower_components/backbone/backbone-min'],
        'marionette': ['../bower_components/backbone.marionette/lib/backbone.marionette.min'],
        'backbone.relational': ['../bower_components/backbone-relational/backbone-relational'],
        'colorjs': ['../bower_components/jscolor/jscolor'],
        'd3': ['../bower_components/d3/d3.min'],
        'numeric': ['../bower_components/numericjs/src/numeric'],
        'densityClustering': ['../bower_components/density-clustering/dist/clustering'],
        'hull': ['../bower_components/hull-js/dist/hull'],

        'Switch': 'libs/bootstrapSwitch',
        'tooltip': 'libs/tooltip',
        'MDS': 'libs/mds',
        'backbone.routefilter': '../bower_components/backbone.routefilter/dist/backbone.routefilter.min',
        // templates path
        'templates': '../templates',
        //controls
        'Router': 'controls/router',
        'Controller': 'controls/controller',
        //models
        'datacenter': 'models/datacenter.model',
        'config': 'models/config.model',
        'variables': 'models/variables.model',
        'data': 'models/data.model',
        'Child1_Model': 'models/child1.model',
        //collections
        'Child1_Collection': 'collections/child1_Collection',
        //views
        'Base': 'views/base.view',
        'AppView': 'views/app.view',
        'Child1_LayoutView': 'views/child1_Layout.view',
        'Child1_CollectionView': 'views/child1_Collection.view',
    }
});

require(['app'], function (App) {
    'use strict';
    var app = new App();
    app.start();
});

// require(['jquery', 'underscore', 'd3'], function ($, _, d3) {
//     'use strict';
//     require(['backbone', 'bootstrap'], function (Backbone, Bootstrap) {
//         require(['app'], function (App) { // require.js shim不能与cdn同用,因此3层require,非amd module需要如此
//             var app = new App();
//             app.start();
//         });
//     });
// });
