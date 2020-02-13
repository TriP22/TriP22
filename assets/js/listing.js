$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 15,
      values: [ 3, 8 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " Nights/ " + (ui.values[ 0 ]+1) + " Days");
        $( "#amount1" ).val(ui.values[ 1 ] + " Nights/ " + (ui.values[ 1 ]+1) + " Days");
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) + " Nights/ " + ($( "#slider-range" ).slider( "values", 0) + 1) + " Days");

    $( "#amount1" ).val($( "#slider-range" ).slider( "values", 1 ) + " Nights/ " + ($( "#slider-range" ).slider( "values", 1 )+1) + " Days");
} );

$( function() {
    $( "#slider-range-price" ).slider({
      range: true,
      min: 1000,
      max: 100000,
      step: 1000,
      values: [ 5000, 70000 ],
      slide: function( event, ui ) {
        $( "#min-amount" ).val('₹ ' +ui.values[ 0 ]);
        $( "#max-amount" ).val('₹ ' +ui.values[ 1 ]);
      }
    });
    $( "#min-amount" ).val('₹ ' + $( "#slider-range-price" ).slider( "values", 0 ) );

    $( "#max-amount" ).val('₹ ' + $("#slider-range-price" ).slider( "values", 1 ) );
  } );