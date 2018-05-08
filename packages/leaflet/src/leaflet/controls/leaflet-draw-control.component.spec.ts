import { LeafletDrawControlComponent } from './leaflet-draw-control.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafletMap } from '../leaflet-map';
import { By } from '@angular/platform-browser';
import { FlyoutModule } from '@acpaas-ui/flyout';

describe('The leaflet draw control component', () => {
    let fixture: ComponentFixture<LeafletDrawControlComponent>;
    let comp: LeafletDrawControlComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FlyoutModule
            ],
            declarations: [
                LeafletDrawControlComponent
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(LeafletDrawControlComponent);
        comp = fixture.componentInstance;
        comp.map = new LeafletMap({
            zoom: 13,
            center: [51.215, 4.425]
        });
    });

    it('should switch to polygons', () => {
        const polygonSpy = spyOn(comp.map, 'switchToPolygon');
        fixture.debugElement.query(By.css('li:first-child a')).triggerEventHandler('click', null);
        expect(polygonSpy).toHaveBeenCalled();
    });

    it('should switch to lines', () => {
        const lineSpy = spyOn(comp.map, 'switchToLine');
        fixture.debugElement.query(By.css('li:last-child a')).triggerEventHandler('click', null);
        expect(lineSpy).toHaveBeenCalled();
    });
});
