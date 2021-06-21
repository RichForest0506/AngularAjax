import { Component, OnInit } from '@angular/core';
import { SrviceService } from '../../services/srvice.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  public jsonData = [];
  Cols = [];

  constructor(private jasnDataServic: SrviceService) {
    // this.keys()
  }

  ngOnInit(): void {
    this.jasnDataServic.getJsonData().subscribe((data) => {
      this.jsonData = data;
      this.Cols = Object.keys(this.jsonData[0]);
    });
  }
}
