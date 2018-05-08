import { Component } from '@angular/core';
import { LeafletMap } from '../leaflet-map';
@Component({
    selector: 'aui-leaflet-draw-control',
    template: `<div auiFlyout>
        <button auiFlyoutAction class="a-button a-button--small has-icon">
            <i class="fa fa-pencil"></i>
        </button>
        <div auiFlyoutZone>
            <ul class="m-selectable-list m-selectable-list--no-border">
                <li auiFlyoutClose><a (click)="map?.switchToPolygon()" class="m-selectable-list__item">Vorm intekenen</a></li>
                <li auiFlyoutClose><a (click)="map?.switchToLine()" class="m-selectable-list__item">Lijn/route intekenen</a></li>
            </ul>
        </div>
    </div>`
})
export class LeafletDrawControlComponent {
    map: LeafletMap;
}
