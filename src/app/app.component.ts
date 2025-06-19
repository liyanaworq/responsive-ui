// app.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('leftPanel') leftPanel!: ElementRef;
  @ViewChild('rightPanel') rightPanel!: ElementRef;
  @ViewChild('leftTitle') leftTitle!: ElementRef;
  @ViewChild('rightTitle') rightTitle!: ElementRef;
  @ViewChild('leftLabel1') leftLabel1!: ElementRef;
  @ViewChild('leftLabel2') leftLabel2!: ElementRef;
  @ViewChild('leftLabel3') leftLabel3!: ElementRef;
  @ViewChild('rightLabel1') rightLabel1!: ElementRef;
  @ViewChild('rightLabel2') rightLabel2!: ElementRef;
  @ViewChild('rightLabel3') rightLabel3!: ElementRef;

  contentHtml: string = `
    <h2 class="text-2xl font-semibold mb-4">Welcome 👋</h2>
    <p class="text-gray-600">Click the sidebar to load content. On mobile, tap the floating buttons.</p>
  `;

  leftCollapsed = false;
  rightCollapsed = false;

  togglePanel(side: 'left' | 'right') {
    if (side === 'left') {
      this.leftCollapsed = !this.leftCollapsed;
      this.leftPanel.nativeElement.style.width = this.leftCollapsed ? '3.5rem' : '12rem';
      this.leftTitle.nativeElement.style.display = this.leftCollapsed ? 'none' : 'inline';
      [this.leftLabel1, this.leftLabel2, this.leftLabel3].forEach(label => {
        label.nativeElement.style.display = this.leftCollapsed ? 'none' : 'inline';
      });
    }

    if (side === 'right') {
      this.rightCollapsed = !this.rightCollapsed;
      this.rightPanel.nativeElement.style.width = this.rightCollapsed ? '3.5rem' : '12rem';
      this.rightTitle.nativeElement.style.display = this.rightCollapsed ? 'none' : 'inline';
      [this.rightLabel1, this.rightLabel2, this.rightLabel3].forEach(label => {
        label.nativeElement.style.display = this.rightCollapsed ? 'none' : 'inline';
      });
    }
  }

  toggleMobilePanel(side: 'left' | 'right') {
    const target = document.getElementById(`mobile${side.charAt(0).toUpperCase() + side.slice(1)}`);
    const other = document.getElementById(`mobile${side === 'left' ? 'Right' : 'Left'}`);
    const overlay = document.getElementById('mobileOverlay');

    target?.classList.toggle(`mobile-${side}-show`);
    target?.classList.toggle(`mobile-${side}-hidden`);

    other?.classList.add(`mobile-${side === 'left' ? 'right' : 'left'}-hidden`);
    other?.classList.remove(`mobile-${side === 'left' ? 'right' : 'left'}-show`);

    const isOpen = target?.classList.contains(`mobile-${side}-show`);
    overlay?.classList.toggle('hidden', !isOpen);
  }

  closeAllMobilePanels() {
    document.getElementById('mobileLeft')?.classList.remove('mobile-left-show');
    document.getElementById('mobileLeft')?.classList.add('mobile-left-hidden');
    document.getElementById('mobileRight')?.classList.remove('mobile-right-show');
    document.getElementById('mobileRight')?.classList.add('mobile-right-hidden');
    document.getElementById('mobileOverlay')?.classList.add('hidden');
  }

  setContent(key: string) {
    const views: Record<string, string> = {
      dashboard: `<h2 class="text-2xl font-semibold mb-4">📊 Dashboard</h2><p class="text-gray-600">Recent insights and charts.</p>`,
      profile: `<h2 class="text-2xl font-semibold mb-4">👤 Profile</h2><p class="text-gray-600">Manage your personal settings.</p>`,
      settings: `<h2 class="text-2xl font-semibold mb-4">⚙️ Settings</h2><p class="text-gray-600">System configuration options.</p>`,
      tools: `<h2 class="text-2xl font-semibold mb-4">🛠️ Tools</h2><p class="text-gray-600">Developer and admin utilities.</p>`,
      help: `<h2 class="text-2xl font-semibold mb-4">❓ Help</h2><p class="text-gray-600">Support articles and FAQs.</p>`,
      about: `<h2 class="text-2xl font-semibold mb-4">ℹ️ About</h2><p class="text-gray-600">Project and team info.</p>`
    };

    this.contentHtml = views[key] || `<h2 class="text-xl font-semibold mb-4">Not Found</h2><p class="text-gray-600">Content not available.</p>`;
  }
}
