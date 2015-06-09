/**
 * Adds functionality to collapse the menu when viewing on a mobile device
 * Author: Ryan Frahm
 * Date: 8/11/14
 */

(function($) {
  Drupal.behaviors.luggageMapLeafletMap = {
    attach: function (context) {
      $('body', context).once('luggageMapLeafletMap', function() {
        $('.leaflet-map').each(function() {
          var lbl = $(this).find('.leaflet-dropdown-wrapper .grouping');
          $(this).find('.leaflet-dropdown-wrapper').click(function(e) {
            e.stopPropagation();
            $(this).find('.leaflet-dropdown>li').toggle();
            return false;
          });
          $('body').click(function() {
            $(this).find('.leaflet-dropdown>li').hide();
          });
          $(this).find('.leaflet-dropdown>li>a').click(function() {
            lbl.text($(this).text());
            var m = $(this).parents('.leaflet-map');
            m.find('.leaflet-marker-icon').show();
            if(!$(this).data().showall) {
              m.find('.leaflet-marker-icon:not([src="http://maps.google.com/mapfiles/kml/paddle/' + $(this).data().color + '-circle.png"])')
                .hide();
            }
          });
        });
      });
    }
  };
})(jQuery);
