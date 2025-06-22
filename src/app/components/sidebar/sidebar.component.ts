import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;
  @Input() side: 'left' | 'right' = 'left';
  @Output() togglePanelEvent = new EventEmitter<void>();
  @Output() setContentEvent = new EventEmitter<string>();

  setContent(content: string) {
    this.setContentEvent.emit(content);
  }

  togglePanel() {
    this.togglePanelEvent.emit();
  }
}
