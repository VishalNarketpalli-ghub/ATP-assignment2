# Assignment 5

## Overview

This assignment is a static testimonial-card layout built with HTML and CSS. The page uses a grid-based composition, card-level styling, image avatars, and card variants to create a polished visual hierarchy.

## Workflow

1. Open `index.html` in a browser.
2. The page loads `style.css` through the `<link>` tag in the document head.
3. The `.container` element creates the overall layout using CSS Grid.
4. Each `.card` shares a base style, while `.card1` to `.card5` define position and color variations.
5. The `.user` block aligns the avatar and user metadata.
6. The `title` and `desc` blocks handle content emphasis and body copy.

## Theory

- CSS Grid is used here for two-dimensional layout control, which is ideal for arranging cards with different spans.
- Shared utility-like styles reduce repetition and keep the card structure consistent.
- `grid-column` and `grid-row` control the placement and size of each card inside the grid.
- `box-shadow`, `border-radius`, and color contrast create visual depth and separation.
- `object-fit: cover` keeps avatar images clean and proportional inside circular frames.

## Files

### `index.html`

Contains the semantic page structure, card markup, user profile blocks, headings, and descriptive content.

### `style.css`

Defines the global reset, page background, grid container, card styling, typography, spacing, and per-card placement rules.

## Layout Notes

- `.card1` spans two columns to act as the main feature card.
- `.card3` is a tall white card that spans two rows.
- `.card4` and `.card3` use darker text on a light surface to create contrast against the colored cards.
- The design currently assumes a desktop-size canvas; for production delivery, responsive breakpoints should be added for tablet and mobile views.

## Learning Outcome

By completing this assignment, you practice CSS Grid placement, card-based composition, and reusable styling patterns that are common in modern landing pages and testimonial sections.
