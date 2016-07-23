import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ObservableArray} from 'data/observable-array';
import { Animation } from 'ui/animation';
import { View } from 'ui/core/view';
import {
    LoggerService,
    LoopBackConfig,
    Advert,
    AdvertInterface,
    BASE_URL,
    API_VERSION
} from '../../shared';

@Component({
  selector: 'room-list',
  templateUrl: '+rooms/room-list/room-list.component.html',
  providers: []
})
export class AdvertsComponent {
    @ViewChild("advertsContainer") roomsContainer: ElementRef;
    private adverts: ObservableArray<AdvertInterface>;
    private advert : AdvertInterface = new Advert();
}