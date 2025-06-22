import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contentHtml: string = `
    <h2 class="text-2xl font-semibold mb-4">Welcome 👋</h2>
    <p class="text-gray-600">Click the sidebar to load content. On mobile, tap the floating buttons.</p>
  `;

  leftCollapsed = false;
  rightCollapsed = false;
  navbarCollapsed = false;

  togglePanel(side: 'left' | 'right') {
    if (side === 'left') this.leftCollapsed = !this.leftCollapsed;
    if (side === 'right') this.rightCollapsed = !this.rightCollapsed;
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  toggleMobilePanel(side: 'left' | 'right') {
    const target = document.getElementById(`mobile${side.charAt(0).toUpperCase() + side.slice(1)}`);
    const other = document.getElementById(`mobile${side === 'left' ? 'Right' : 'Left'}`);
    const overlay = document.getElementById('mobileOverlay');

    target?.classList.add(`mobile-${side}-show`);
    target?.classList.remove(`mobile-${side}-hidden`);

    other?.classList.remove(`mobile-${side === 'left' ? 'right' : 'left'}-show`);
    other?.classList.add(`mobile-${side === 'left' ? 'right' : 'left'}-hidden`);

    if (target?.classList.contains(`mobile-${side}-show`)) {
      overlay?.classList.remove('hidden');
    }
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
