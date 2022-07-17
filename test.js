<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link
      rel="stylesheet"
      href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css"
    />
    <script src="js/ol.js"> </script>

    <script language="javascript">
      function init() {
        var vectorLayer = new ol.layer.Vector({
          source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
              defaultDataProjection :'EPSG:26191', 
              projection: 'EPSG:26191'
            }),
            url: 'test.geojson'
          })
        });

        new ol.Map({
          layers: [
            vectorLayer,
            new ol.layer.Tile({source: new ol.source.OSM('pk.eyJ1Ijoic29rYWluYSIsImEiOiJjbDVvb3FnbHQwY2J3M2pvMzA2NTEyNHRsIn0.nUx72I1tneOYv6CI_TZaZA')})          
          ],
          controls: [ new ol.control.Zoom()],
          view: new ol.View({
            center: [263300,6250000],
            zoom: 15
          }),
          target: 'map'
        });
      }
    </script>
  </head>

  <body onLoad="javascript:init();">
    <div id="map" style="width: 1100px; height: 550px"></div>
  </body>
</html>
