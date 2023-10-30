import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit,OnChanges,OnDestroy{

  @Input()
  public price:number = 0;

  ngOnInit(): void {
    console.log("HIJO: ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HIJO: ngOnChanges");
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log("HIJO: ngOnDestroy");
  }
}
