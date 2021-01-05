import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-slibar',
  templateUrl: './slibar.component.html',
  styleUrls: ['./slibar.component.css']
})
export class SlibarComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.loadScripts();
  }
  
}
