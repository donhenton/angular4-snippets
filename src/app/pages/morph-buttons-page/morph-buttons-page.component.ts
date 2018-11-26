
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
// import { MorphButtonComponent } from 'app/components/morph-button/morph-button.component';
import { trigger, style, transition, animate, group, state, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-morph-buttons-page',
  templateUrl: './morph-buttons-page.component.html',
  styleUrls: ['./morph-buttons-page.component.scss'],
})

export class MorphButtonsPageComponent implements OnInit {


  animateChoices = { choice: 'basic' };

  // @ViewChild('morphButton') morphButton: MorphButtonComponent;
  constructor() {

  }

  ngOnInit() {
  }

  chooseAnimation(anim) {
    // click action for radios, occurs before the ngModel value set
    // console.log(`anim ${anim} choices ${this.animateChoices.choice}`)

  }


}


@Component({
  selector: 'app-animbox',
  template: ``,
  // template: `<div [@changeState]="currentState" class="mybox"></div>`,
  styleUrls: ['./morph-buttons-page.component.scss'],
  animations: [
    trigger('changeState', [

      state('basic', style(
        {
          backgroundColor: 'red',
          width: '100px',
          height: '120px',
          transform: 'scale(.4)'
        }
      )),
      state('original', style(
        {
          backgroundColor: 'green',
          width: '100px',
          height: '120px',
          transform: 'scale(1)'
        }
      )),
      state('delay', style(
        {
          backgroundColor: 'blue',
          width: '100px',
          height: '120px',
          transform: 'scale(.5)',
          borderRadius: '75px'
        }
      )),
      state('easing', style(
        {
          backgroundColor: 'purple',
          width: '100px',
          height: '120px',
          transform: 'scale(.2)',

        }
      )),
      state('stepped', style(
        {
          backgroundColor: 'yellow',
          transform: 'scale(1)',
          width: '100px',
          height: '120px',
          // borderColor: 'green',
          // borderThickness: '2px',
          // borderStyle: 'solid'

        }
      )),
      // transition('original => basic, easing => basic, delay => basic', animate('800ms')),

      transition('* => original', animate('200ms')),
      transition('* => basic', animate('200ms')),
      transition('* => delay', animate('400ms 1000ms ease-out')),
      transition('* => easing', animate('700ms ease-in-out')),

      transition('* => stepped', animate('1300ms ease-out', keyframes([
        style({ backgroundColor: 'red', transform: 'scale(1.4)', offset: 0.0 }),
        style({ backgroundColor: 'white', transform: 'scale(1)', offset: 0.6 }),
        style({ backgroundColor: 'blue', transform: 'scale(1.4)', offset: 1.0 })
      ])))

    ])



    // https://embed.plnkr.co/plunk/HhI9sS


    // https://medium.com/codingthesmartway-com-blog/angular-6-animations-from-scratch-76e110cba5fb
    // https://stackoverflow.com/questions/53049799/angular-4-keyframe-animation-stay-on-last-position
    // https://coursetro.com/posts/code/63/Angular-4-Animation-Tutorial
    // https://codecraft.tv/courses/angular/custom-directives/hostlistener-and-hostbinding/

  ]
})
export class AnimboxComponent implements OnInit {

  @Input() currentState;
  @Output() eventItem = new EventEmitter<string>();


  private counter = 0;


  constructor(private el: ElementRef,
    private renderer: Renderer2) {

  }

  ngOnInit(): void {
   // console.log(this.el)
  }


   @HostBinding('@changeState') get changeState () {
     return this.currentState;
   }

  @HostListener('@changeState.done', ['$event']) endTimes(ev) {
    console.log('done')
    console.log(ev)
  }
  @HostListener('@changeState.start', ['$event']) startTimes(ev) {
    console.log('start')
    console.log(ev)
  }


}

