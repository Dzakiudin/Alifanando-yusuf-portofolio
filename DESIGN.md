# Design System Document

## 1. Overview & Creative North Star: "The Cinematic Curator"
This design system is built to transform a digital portfolio into a high-end editorial experience. The Creative North Star is **"The Cinematic Curator"**—a philosophy where the UI disappears to let the media lead, using deep atmospheric depth, neon luminescence, and intentional asymmetry to break the "template" feel of the modern web. 

Instead of a rigid, boxed-in grid, we utilize **Tonal Layering** and **Active Negative Space**. Elements should feel like they are floating in a dark, infinite gallery. We move away from "functional" layouts toward "emotional" compositions, where the hierarchy is driven by massive typography and surgical strikes of neon light.

---

## 2. Colors & Atmospheric Depth
The palette is rooted in the "void"—a series of near-black neutrals that provide the canvas for high-chroma accents.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections or cards. Layout boundaries must be established exclusively through:
*   **Background Shifts:** Transitioning from `surface` (#131313) to `surface_container_low` (#1c1b1b).
*   **Light Bleed:** Using a subtle glow from a `primary_container` (#9d4edd) to hint at an edge.
*   **Vertical Rhythms:** Using the Spacing Scale (specifically `16` and `20`) to create "islands" of content.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
*   **Base Level:** `surface_container_lowest` (#0e0e0e) for the deep background.
*   **Sectional Level:** `surface` (#131313) for the primary content areas.
*   **Interaction Level:** `surface_bright` (#3a3939) for hovered states or elevated utility panels.

### The "Glass & Gradient" Rule
To achieve a "Premium" feel, floating elements (modals, navigation bars, hover cards) must use **Glassmorphism**:
*   **Fill:** `surface_container` (#201f1f) at 60% opacity.
*   **Blur:** `backdrop-filter: blur(20px)`.
*   **Signature Glow:** Apply a linear gradient (45deg) from `primary_container` (#9d4edd) to `secondary_container` (#00d2fd) at 15% opacity on the background of CTAs to give them "soul."

---

## 3. Typography: Editorial Authority
We use a tri-font strategy to balance modern utility with expressive character.

*   **The Hero (Epilogue):** Used for `display` and `headline` scales. This is our "Statement" font. It should be tracked tightly (-0.02em) and set to Bold or Extra Bold. It represents the "Voice" of the specialist.
*   **The Narrative (Inter):** Used for `title` and `body` scales. Inter provides a neutral, high-readability counter-point to the expressive headlines.
*   **The Technical (Space Grotesk):** Reserved for `label` scales. These are high-contrast, often all-caps, used for metadata, categories, and micro-copy.

**Hierarchy Strategy:** Use "Size Shock"—juxtapose a `display-lg` headline with a `label-sm` metadata tag nearby. This high-contrast scale creates an award-winning, editorial rhythm.

---

## 4. Elevation & Depth
In this system, depth is a spectrum of light, not a collection of lines.

### The Layering Principle
Do not use shadows to create separation. Instead, use **Tonal Stacking**. 
*   Place a `surface_container_high` card on a `surface` background. The difference is felt, not seen.
*   For "Active" elements, use a **Ghost Border**: an `outline_variant` (#4d4353) set to **15% opacity**. This provides a whisper of a boundary that only appears upon close inspection.

### Ambient Glows
When an element needs to "pop," avoid black shadows. Use an **Ambient Glow**:
*   **Shadow Color:** A 10% opacity version of the `primary` (#e0b6ff) or `secondary` (#a2e7ff) token.
*   **Blur:** 40px to 80px.
*   **Purpose:** This mimics the way a neon sign casts light on a dark street, grounding the element in a "cinematic" environment.

---

## 5. Components

### Buttons: The "Neon Pulse"
*   **Primary:** Background is a gradient of `primary_container` to `secondary_container`. Text is `on_primary_container`. No border. On hover, increase the `ambient-glow`.
*   **Secondary (Ghost):** No background. `Ghost Border` (15% opacity `outline_variant`). On hover, the border opacity increases to 40% and text shifts to `secondary`.
*   **Tertiary:** Pure text using `label-md` in `primary` color, with a 2px underline that expands from center on hover.

### Cards: The "Media-First" Container
*   **Rule:** Forbid divider lines.
*   **Style:** Use `surface_container_low`. Images within cards should have a subtle `0.5` padding to create a "framed" look.
*   **Interaction:** On hover, the card should scale slightly (1.02x) and the background should shift to `surface_container_highest`.

### Navigation: The "Floating Lens"
*   **Style:** Positioned at the top or bottom as a floating pill.
*   **Material:** Glassmorphism (60% opacity `surface_container_lowest` + blur).
*   **Active State:** A small dot of `secondary_fixed_dim` (#3cd7ff) below the menu item, rather than a bold highlight.

### Input Fields: The "Minimalist Entry"
*   **Style:** Only a bottom "Ghost Border." 
*   **Focus:** The bottom border transforms into a gradient of `primary` to `secondary`, and a subtle glow appears behind the input area.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Offset your headlines. Let an image span 7 columns of a 12-column grid and leave the rest empty.
*   **Use Motion as Logic:** Elements should fade and slide upward (`20px`) as they enter the viewport to simulate a camera pan.
*   **Prioritize Breathing Room:** Use `spacing-20` (7rem) between major sections to let the "Cinematic" feel take hold.

### Don't:
*   **Don't use Pure White:** Never use #FFFFFF. Use `on_surface` (#e5e2e1) for text to prevent eye strain against the deep black.
*   **Don't use Standard Shadows:** Avoid CSS `box-shadow: 0 4px 10px rgba(0,0,0,0.5)`. It looks cheap. Use Tonal Layering or Ambient Glows.
*   **Don't use Grids for Everything:** If a piece of text feels better floating slightly off-center, let it. This is a portfolio, not a spreadsheet.