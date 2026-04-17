# Testable Profile Card

A small accessible and responsive profile card built with semantic HTML, modern CSS, and vanilla JavaScript.

## Run locally

Because this project is static, you can run it in either of these ways:

1. Open `index.html` directly in your browser.
2. Or use a local static server (recommended), for example:
   - `npx serve .`
   - then open the local URL shown in the terminal.

## Project structure

- `index.html` - semantic profile card markup with all required `data-testid` attributes.
- `styles.css` - responsive and accessible card styles.
- `script.js` - renders and updates current epoch time in milliseconds.

## Accessibility notes

- Uses semantic landmarks and sections (`main`, `article`, `header`, `figure`, `nav`, `section`).
- Avatar has meaningful `alt` text.
- Time element uses `aria-live="polite"` so assistive technology can receive updates.
- Links have accessible names and are keyboard-focusable.
- Focus states are visible via `:focus-visible`.
- Text/background colors are selected for WCAG AA contrast.

## Requirement mapping

- Root card: `data-testid="test-profile-card"`
- Name: `data-testid="test-user-name"`
- Bio paragraph: `data-testid="test-user-bio"`
- Current time in milliseconds: `data-testid="test-user-time"` (updated every second)
- Avatar image: `data-testid="test-user-avatar"`
- Social links container: `data-testid="test-user-social-links"`
- Per-network social links:
  - `data-testid="test-user-social-twitter"`
  - `data-testid="test-user-social-github"`
  - `data-testid="test-user-social-linkedin"`
- Hobbies list section: `data-testid="test-user-hobbies"`
- Dislikes list section: `data-testid="test-user-dislikes"`

## Manual verification checklist

- Confirm every required `data-testid` exists exactly as specified.
- Confirm `test-user-time` displays a millisecond epoch value near `Date.now()`.
- Confirm social links open in a new tab and use `rel="noopener noreferrer"`.
- Confirm Tab navigation reaches each social link with a visible focus indicator.
- Confirm layout stacks on small screens and switches to avatar-left/content-right on wider screens.
