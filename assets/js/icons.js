// Initialize Lucide icons - include only the icons you need
import { createIcons, Sun, Moon, Search,UserRound, SendHorizontal, House, ChevronRight,ChevronLeft, PanelLeft, CircleUserRound, Rss, Hash, Dot, ArrowRight, BadgeCheck } from 'lucide';

export function initIcons() {
  createIcons({
    icons: {
      Sun,
      Moon,
      Search,
      UserRound,
      SendHorizontal,
      House,
      ChevronRight,
      ChevronLeft,
      PanelLeft,
      CircleUserRound,
      Rss,
      Hash,
      Dot,
      ArrowRight,
      BadgeCheck
    }
  });
}
``
// Auto-initialize icons
initIcons();

// How to Use?

/* Example usage in Handlebars: {{> "components/icon" name="house" ariaLabel="home icon"}} */