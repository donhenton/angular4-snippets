import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  // references to the view
  @ViewChild('heading',{ static: false }) header: ElementRef;
  // references to stuff via ng-content
  @ContentChild('contentParagraph',{static: false}) paragraph: ElementRef;

  constructor() {
   // console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
   // console.log('ngOnChanges called!');
   // console.log(changes);
  }

  ngOnInit() {
    // console.log('ngOnInit called!');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
   // console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
   // console.log('ngAfterContentInit called!');
   // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
   // console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
   // console.log('ngAfterViewInit called!');
   // console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
   // console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
   // console.log('ngOnDestroy called!');
  }

}
