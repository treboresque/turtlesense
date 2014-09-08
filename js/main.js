requirejs.config({
  baseUrl: 'bower_components',
  paths: {
    d3: 'd3/d3.min',
    jquery: 'jquery/dist/jquery.min',
    bootstrap: 'bootstrap/dist/js/bootstrap.min',
    async:     'requirejs-plugins/src/async',

    // internal components

    nestMap:    '../js/components/nestmap',
    nestDetail: '../js/components/nestdetail',
    googleMap:  '../js/components/googlemap'
  },
  shim: {
    bootstrap: {deps: ['jquery']},
  }
});


define(['d3', 'jquery', 'bootstrap', 'nestMap'], function (d3, $, bs, Map) {

  var chart = new Map($(".chart").get(0));
  chart.initialize(generateData());

  function generateData() {
    var data = [
      {lat: 35.2120272, lng: -75.6824722, name: "Athena"    },
      {lat: 35.193950 , lng: -75.738820 , name: "Demeter"   },
      {lat: 35.234716 , lng: -75.570137 , name: "Iris"      },
      {lat: 34.582251 , lng: -76.533506 , name: "Persephone"},
    ];

    data.forEach(function(nest) {
      nest.date = new Date();
    });

    return data;
  }
});

