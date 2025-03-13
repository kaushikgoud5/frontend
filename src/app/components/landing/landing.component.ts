import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [CommonModule, ChatComponent,RouterLink],
  animations: [
    trigger('wordBlurToClear', [
      transition(':enter', [
        query('span', [
          style({ filter: 'blur(10px)', opacity: 0 }), // Start blurred
          stagger(100, animate('1s ease-out', style({ filter: 'blur(0px)', opacity: 1 }))) // Animate words one by one
        ])
      ])
    ]),

  ]
})
export class LandingComponent implements OnInit {
  showChat = false;
 text='Never Lose';
 subtitleText = 'Another Great Find';
  descriptionText = 'Empower Your Workforce with Instant Company Knowledge at Your Fingertips with corpIQ';
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // Run animations outside Angular's change detection
    // this.ngZone.runOutsideAngular(() => {
    //   this.animateTitle();
    // });
  }

  // animateTitle() {
  //   const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  //   timeline
  //     .from('.title span', {
  //       opacity: 0,
  //       y: 100,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       ease: 'back.out(1.7)'
  //     })
  //     .from('.subtitle', {
  //       opacity: 0,
  //       y: 20,
  //       duration: 0.8,
  //     }, '-=0.4')
  //     .from('.try-button', {
  //       opacity: 0,
  //       scale: 0.5,
  //       duration: 0.8,
  //       ease: 'back.out(1.7)'
  //     }, '-=0.4');
  // }

  // toggleChat() {
  //   this.showChat = true;
    
  //   this.ngZone.runOutsideAngular(() => {
  //     const timeline = gsap.timeline();
      
  //     timeline
  //       .to('.landing-content', {
  //         opacity: 0,
  //         y: -50,
  //         duration: 0.5,
  //         onComplete: () => {
  //           gsap.set('.landing-content', { display: 'none' });
  //         }
  //       })
  //       .from('.chat-wrapper', {
  //         opacity: 0,
  //         y: 50,
  //         duration: 0.5,
  //       });
  //   });
  // }
}