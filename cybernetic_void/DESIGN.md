# Design System Documentation: The Cybernetic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** 

This system moves away from the "flat web" or generic bootstrap aesthetics. It is a high-end, editorial experience that treats digital space as a series of physical, illuminated layers. Inspired by cybernetic precision and the bioluminescence of futuristic tech, the system utilizes high-contrast typography, intentional asymmetry, and "glass-on-void" depth. We do not just present content; we archive it within a professional, high-tech environment that feels both cutting-edge and authoritative.

---

## 2. Colors
Our palette is rooted in the deep vacuum of `surface` (#10141a), punctuated by the high-frequency energy of cyan and teal.

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders for sectioning are strictly prohibited.** We define boundaries through tonal shifts. For example, a main content area might sit on `surface`, while a sidebar or secondary module uses `surface_container_low`. This creates a sophisticated, seamless transition that feels like a custom-engineered interface rather than a template.

### Surface Hierarchy & Nesting
Depth is achieved by "stacking" the surface-container tiers. Treat the UI as layers of high-tech material:
*   **Base Layer:** `surface` (#10141a)
*   **Secondary Content:** `surface_container_low` (#181c22)
*   **Interactive Cards:** `surface_container` (#1c2026)
*   **Floating/Active Elements:** `surface_container_highest` (#31353c)

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, navigation bars) must utilize **Glassmorphism**. Use a semi-transparent version of `surface_container` with a `backdrop-blur` of 12px to 20px. 
*   **Signature Textures:** For high-impact areas like Hero backgrounds or CTAs, use subtle linear gradients transitioning from `primary_fixed_dim` (#00daf3) to `on_primary_container` (#006b78) at a 135-degree angle. This mimics the light-bleed seen in high-end fiber optics.

---

## 3. Typography
This design system employs a dual-font strategy to balance "High-Tech" with "High-Readability."

*   **Display & Headlines (Space Grotesk):** This geometric sans-serif is used for all `display-` and `headline-` tokens. Its quirky, technical apertures provide the "Cybernetic" soul of the brand. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for an aggressive, editorial look.
*   **Body & Titles (Manrope):** A modern, functional sans-serif used for `body-` and `title-` tokens. It ensures long-form blog posts remain legible and professional. 
*   **Labels (Space Grotesk):** Use `label-md` and `label-sm` for metadata, categories, and "tech" callouts. This reinforces the technical nature of the content even at small scales.

---

## 4. Elevation & Depth
In this design system, elevation is a function of light and tone, not shadows.

### The Layering Principle
Do not use shadows to separate items on the same plane. Instead, place a `surface_container_lowest` card on a `surface_container_low` background. This "Tonal Layering" creates a soft, natural lift that feels integrated into the interface.

### Ambient Shadows & Neon Glows
When a floating effect is required (e.g., a primary button or a featured blog card), use **Ambient Glows**:
*   **Shadow Blur:** 24px - 40px.
*   **Shadow Color:** Use `surface_tint` (#00daf3) at 8% opacity. This mimics the neon "glow" from the brand's visual identity, suggesting the component is emitting light onto the surface below.

### The "Ghost Border" Fallback
If a border is required for accessibility, it must be a **Ghost Border**. Use the `outline_variant` (#3a494a) at 20% opacity. Forbid 100% opaque borders as they break the immersion of the "void" aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary_fixed_dim` (#00daf3) background with `on_primary_fixed` (#001f24) text. Use `DEFAULT` (0.25rem) rounding for a sharp, precision-cut look. Add a subtle outer glow using the Ambient Shadow rule.
*   **Secondary:** Glassmorphism style. Semi-transparent `surface_variant` with a Ghost Border.
*   **Tertiary:** Text-only using `primary_fixed_dim` with an icon.

### Cards & Lists
*   **Constraint:** Forbid divider lines. Use `spacing-8` (2rem) of vertical white space or a subtle background shift to `surface_container_low`.
*   **Interaction:** On hover, a card should shift from `surface_container` to `surface_container_high`, and the Ghost Border opacity should increase to 40%.

### Input Fields
*   **Styling:** Use `surface_container_lowest` for the field background. The bottom edge should have a 2px highlight of `primary_fixed_dim` when focused, creating a "scanning line" effect.
*   **Rounding:** `sm` (0.125rem) to maintain a technical, sharp-edged feel.

### Additional Component: "The Data Strip"
A signature element for this brand. A 2px tall horizontal line using the `primary_fixed_dim` gradient, used to separate major editorial sections or to "underline" hero titles. It represents a data stream and adds a horizontal rhythm to the layout.

---

## 6. Do's and Don'ts

### Do
*   **Do** embrace asymmetry. Position images off-center or allow typography to overlap the edge of a container.
*   **Do** use `spaceGrotesk` for all numbers and technical data to reinforce the "tech" vibe.
*   **Do** use `backdrop-blur` generously on navigation and overlays to maintain the "frosted glass" depth.

### Don't
*   **Don't** use standard #000000 black. Always use the specified `surface` (#10141a) to maintain tonal depth.
*   **Don't** use `full` rounding (pills) for buttons. Stick to `DEFAULT` or `md` to keep the "cybernetic" edge.
*   **Don't** use high-contrast white text for everything. Use `on_surface_variant` (#b9caca) for secondary text to reduce eye strain in dark mode and create a tiered hierarchy.