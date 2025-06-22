import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() collapsed: boolean = false;

  @Output() toggleMobilePanelEvent = new EventEmitter<'left' | 'right'>();
  @Output() closeAllMobilePanelsEvent = new EventEmitter<void>();
  @Output() toggleNavbarEvent = new EventEmitter<void>();

  toggleMobile(side: 'left' | 'right') {
    this.toggleMobilePanelEvent.emit(side);
  }

  closeOverlay() {
    this.closeAllMobilePanelsEvent.emit();
  }

  toggleNavbar() {
    this.toggleNavbarEvent.emit();
  }
}
