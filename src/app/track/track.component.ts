import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() orderTrack: any = [];
  classState: any[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('order: ', this.orderTrack);
    for (let state = 0; state < this.orderTrack.length; state++) {
      if (state == this.orderTrack.length - 1) {
        console.log('final state: ', this.orderTrack[state].status);

        if (this.orderTrack[state].status == 'in-progress')
          this.classState.push('step finalProgress');
        else if (this.orderTrack[state].status == 'completed')
          this.classState.push('step successDone');
      } else {
        this.classState.push(
          this.orderTrack[state].status == 'completed' &&
            this.orderTrack[state + 1].status == 'in-progress'
            ? 'step editing progress'
            : this.orderTrack[state].status == 'completed' &&
              this.orderTrack[state + 1].status == 'completed'
            ? 'step editing done'
            : 'step inComplete'
        );
      }
    }
    console.log('classes: ', this.classState);
  }
}
