import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-detail-page',
  templateUrl: './locations-detail-page.component.html',
  styleUrls: ['./locations-detail-page.component.scss']
})
export class LocationsDetailPageComponent implements OnInit {
  location: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const idLocation = params.get('idLocation');
      this.locationsService.getLocation(idLocation).subscribe((location: any) => {
        this.location = location;
      }
      )
    })
  }

  constructor(private route: ActivatedRoute, private locationsService: LocationsService){

  }
}
