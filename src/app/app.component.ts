import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trackOrder';
  orderTrack=[
    {
    ref:"ordered",
    name:"Ordered",
    status:"completed",
    date:"Wed, Dec 14",
    icon:""
    },
    {
    ref:"shipped",
    name:"Shipped",
    status:"completed",
    date:"Fri, Dec 16",
    icon:""
    },
    {
    ref:"delivered",
    name:"Delivered",
    status:"in-progress",
    date:"Mon, Dec 26",
    icon:""
    }
    ]
}


 // {
    //   ref:"reviewed",
    //   name:"Reviewed",
    //   status:"completed",
    //   date:"Mon, Dec 26",
    //   icon:""
    //   },
    //   {
    //     ref:"final",
    //     name:"Final",
    //     status:"in-progress",
    //     date:"Mon, Dec 26",
    //     icon:""
    //     }
