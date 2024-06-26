# @acpaas-ui/ngx-leaflet

This module renders a map component with some basic controls, based on [Leaflet](https://leafletjs.com).

## Dependencies

- `leaflet`
- `leaflet-draw`
- `esri-leaflet`

## Usage

```typescript
import { LeafletMap } from '@acpaas-ui/ngx-leaflet';
```

Add the leaflet CSS styles to the `src/angular.json` file.

```typescript
"styles": [
    "node_modules/leaflet/dist/leaflet.css",
    "node_modules/leaflet-draw/dist/leaflet.draw.css"
]
```

## Documentation

Visit our [documentation site](https://antwerp-ui.digipolis.be/) for full how-to docs and guidelines

### Leaflet module

#### API

| Name                               | Default value | Description                                                                                     |
| ---------------------------------- | ------------- | ----------------------------------------------------------------------------------------------- |
| `@Input() leafletMap: LeafletMap;` | `-`           | An instance of the [Leaflet Map class](https://leafletjs.com/reference-1.3.0.html#map-example). |
| `@Input() hasSidebar: boolean;`    | `false`       | Define if the map has a sidebar.                                                                |
| `@Input() zoomLevel: number;`      | `19`          | Define how far to zoom in [Leaflet Zoom Level](https://leafletjs.com/examples/zoom-levels/)     |

Check the [Leaflet API reference](https://leafletjs.com/reference-1.3.0.html) for Leaflet specific API's.

#### Example

```typescript
import { LeafletMap, baseMapWorldGray, baseMapAntwerp } from '@acpaas-ui/ngx-leaflet';

public leafletMap: LeafletMap = new LeafletMap({
    zoom: 13, // default zoom level
    center: [51.215, 4.425], // default center point
    onAddPolygon: (layer) => {},
    onAddLine: (layer) => {},
    onEditFeature: (feature) => {},
});

public ngOnInit(): void {
    this.leafletMap.onInit.subscribe(() => {
        this.leafletMap.addTileLayer(baseMapWorldGray);
        this.leafletMap.addTileLayer(baseMapAntwerp);
    });
}
```

```html
<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
  <div controls top left>
    <aui-leaflet-drag-control></aui-leaflet-drag-control>
    <aui-leaflet-draw-control></aui-leaflet-draw-control>
  </div>
  <div controls top right>
    <aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
  </div>
  <div controls bottom left>
    <aui-leaflet-locate-control zoomLevel="16"></aui-leaflet-locate-control>
  </div>
  <div controls bottom right>
    <aui-leaflet-zoom-control></aui-leaflet-zoom-control>
  </div>
  <div>Content displayed in sidebar</div>
</aui-leaflet>
```

#### Custom services

- `map`: The native leaflet map instance
- `addTileLayer(layer: LeafletLayer)`: adds a tile layer to the map. (see leaflet docs)
- `addFeatureLayer(config: any)`: adds a feature layer to the map. (see esri leaflet docs)
- `addVectorLayer(config: LeafletLayer)`: adds a vector layer to the map. When passing the URL of the VectorTileServer, you don't need to suffix it with {z}/{y}/{x}.pbf, the following URL would work: https://tiles.arcgis.com/tiles/1KSVSmnHT2Lw9ea6/arcgis/rest/services/basemap_antwerpen_met_labels_20220218/VectorTileServer (Also the style that is provided under ../../VectorTileServer/resources/styles will be used by default.) See [esri-leaflet-vector](https://github.com/Esri/esri-leaflet-vector) for more information.
- `addGeoJSON(geoJson: any, config: any)`: add geoJSON to the map. (see leaflet docs)
- `fitFeatureLayers(featureLayers)`: Fit the map bounds to the given feature layers.
- `removeLayer(layer)`: removes a layer
- `zoomIn()`: Zoom in
- `zoomOut()`: Zoom out
- `toggleFullscreen()`: Toggle fullscreen
- `locate(zoomLevel)`: Start zooming to current location with an optional zoom level
- `setView(center, zoom)`: Zoom to the given center and zoom values.
- `addMarker(position, options)`: Adds a marker to the given position. (see leaflet docs)
- `addHTMLMarker`: Adds an HTML marker to the given position.

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
