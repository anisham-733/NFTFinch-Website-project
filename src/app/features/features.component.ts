import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabs = [
    {
      linking_id:'tab--1',
      linking:"1",
      ac:'tab1',
      as:'true',
      number:'01',
      name:'Create Marketplace'

    },
    {
      linking_id:'tab--2',
      linking:'2',
      ac:'tab2',
      as:'false',
      number:'02',
      name:'Digital Marketing'

    },
    {
      linking_id:'tab--3',
      linking:'3',
      ac:'tab3',
      as:"false",
      number:'03',
      name:'Business solution'

    },

  ]
  names = [
    {design:'Vanilla JavaScript'},
    {design:'Creative Design'},
    {design:'Bootstrap 5'}]
  cards1=[
    {
      classname:"cardx-artist floatinx",
      img:"../../assets/img/card-artist.png"
    },
    {
      classname:"cardx-music floatinx",
      img:"../../assets/img/card-music.png"
    }
  ]
  cards2 = [
    {
      classname:"cardx-video-e floatinx",
      img:"../../assets/img/card-video-e.png"
    },
    {
      classname:"cardx-gaming floatinx",
      img:"../../assets/img/card-gaming.png"
    }
  ]

}
