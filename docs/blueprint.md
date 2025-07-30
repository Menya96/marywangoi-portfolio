# **App Name**: Shellfolio

## Core Features:

- Terminal Simulation: Simulate a command-line interface environment for the portfolio.
- "Typing" Animation: Animate text to appear as if it's being typed in real-time on the terminal.
- Interactive Commands: Implement interactive prompts (e.g., `> whoami`, `> list_skills`) that, when clicked, display corresponding information in the terminal.
- UI Layout: Offer several layout options that the user can immediately select with a UI component (e.g. different panes)
- AI-Powered ASCII Art: Generate an ASCII art representation of an uploaded photo for display in the terminal, using a generative AI tool to refine the conversion.
- Animated Progress Bar: Include a dynamic progress bar for project loading.
- Legacy browser support: Support cross-browser compatibility, specifically using components or approaches that provide backwards compatibility to older web browsers, to support viewers of the portfolio who do not use the newest or best browser for viewing the app

## Style Guidelines:

- Background color: Dark, desaturated blue-gray (#282c34) to emulate a terminal environment.
- Primary color: Bright, slightly desaturated green (#98c379) for text to mimic classic terminal text color.
- Accent color: Pale, light blue (#61afef) for interactive prompts and highlights to draw attention.
- Font: 'Source Code Pro' (monospace) for all text elements to maintain the terminal look. Use its normal weight for nearly all body text, but consider its semibold or bold weights for some headers if needed.
- Mimic the structure of a terminal with a main window area and a prompt line. Use clear spacing to separate commands and outputs.
- Animate the appearance of text, character by character, to simulate typing. Implement a subtle blinking cursor.
- Use simple, line-based icons for visual cues related to different commands or sections. For instance, use icons from a basic set like Font Awesome or similar, if appropriate for commands like 'email' or 'download resume.'