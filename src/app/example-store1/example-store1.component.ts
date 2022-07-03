import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-store1',
  templateUrl: './example-store1.component.html',
  styleUrls: ['./example-store1.component.css']
})
export class ExampleStore1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
     
  };  
  images=[
    {img:"../../assets/img/bg-img/banner-1.png"},
    {img:"../../assets/img/bg-img/banner-3.png"},
    {img:"../../assets/img/bg-img/banner-2.png"}]
    pagination=[
       
      {id:2},
      {id:3},
      {id:4},
      {id:'...'},
      {id:9}
    ]


  shopCards = [
  {img:"../../assets/nfts/1.png"},
  {img:"../../assets/nfts/2.png"},
  {img:"../../assets/nfts/3.png"},
  {img:"../../assets/nfts/4.png"},
  {img:"../../assets/nfts/5.png"},
  {img:"../../assets/nfts/6.png"},
  {img:"../../assets/nfts/7.png"},
  {img:"../../assets/nfts/2.png"},
  {img:"../../assets/nfts/1.png"},
  {img:"../../assets/nfts/4.png"},
  {img:"../../assets/nfts/6.png"},
  {img:"../../assets/nfts/7.png"},

]}
