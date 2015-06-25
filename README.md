# luggage_map
This feature gives the user the ability to map geographic data on a Drupal node by allowing the user to upload a csv file that contains data points, and other information.

## What this feature provides you
- A custom file field formatter that outputs data points inside a [Leaflet][leaflet] map.

## Data structure
Luggage_map is dependent on well-formed data being uploaded. The required structure is as follows:

label     | latitude  | longitude  | grouping   | grouping color | comment
--------- | --------- | ---------- | ---------- | -------------- | ---------
label 1   | 23.73667  | -109.84381 | grouping 1 | ylw            | comment 1
label 2   | 23.73499  | -109.84168 | grouping 2 | red            | comment 2

Some of the possible color labels have been shortened, the possibilities and there shortened formed are:

Color | Label
----- | -----
Blue  | blue
Green | green
Black | black
Red   | red
Gray  | gray
Pink  | pink
Purple  | purple
Light Blue | ltblue
Yellow  | ylw
Brown | brown

## How to use
1. Clone this repo into your Drupal's `sites/all/modules/luggage_map` directory.
1. Download & extract the [Leaflet Javascript library][leafletjs] into your Drupal's `sites/all/libaries/leaflet`.
  * *Note: you will need to rename the downloaded folder from `leaflet-0.x.y` to `leaflet`*
  * *Check permissions!*
1. Enable the module
  * *With Drush: `drush @site.server en luggage_map -y`*
  * .. or using the modules page
1. Navigate to the content type where you want the field and add a 'file' field. Save!
2. Edit the file field's settings & allow `CSV` files to be uploaded.
1. Under the 'Manage Display' tab, locate the field that you just added and change the format to *'Luggage Map Output Map'*. Save!
1. Create/edit a node of the previous type and upload a csv file using the aforementioned format. Save!

Hooray! The node should now display a map of data points.

[leaflet]: http://leafletjs.com/ "Leaflet"
[leafletjs]: http://leafletjs.com/download.html "Leaflet Javascript downloads"
