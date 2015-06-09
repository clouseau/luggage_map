<div class="leaflet-map">
  <div class="leaflet-map-controls-wrapper">
    <ul class="leaflet-map-controls">
      <li>
        <div class="leaflet-dropdown-wrapper">
          <span class="">Grouping: <span class="grouping">None</span></span>
          <span class="caret"></span>
          <ul class="leaflet-dropdown">
            <li><a href data-showall="true">None</a></li>
            <?php foreach ($keys as $color => $value): ?>
              <li><a href data-color="<?php print $color; ?>" class="leaflet-grouping-color-<?php print $color; ?>"><?php print $value; ?></a></li>
            <?php endforeach ?>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <?php print $map; ?>
  <table class="leaflet-map-legend">
    <tr>
      <?php foreach ($keys as $color => $value): ?>
        <td>
          <img width="20px" height="20px" src="http://maps.google.com/mapfiles/kml/paddle/<?php print $color; ?>-circle.png">&nbsp;<small><?php print $value; ?></small>
        </td>
      <?php endforeach ?>
    </tr>
  </table>
</div>