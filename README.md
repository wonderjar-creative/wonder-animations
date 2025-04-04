# Wonder Animations

Contributors: wonderjarcreative  
Donate link: https://example.com/  
Tags: wordpress, animations, css, frontend  
Requires at least: 5.0  
Tested up to: 6.2  
Stable tag: 1.9.0  
License: GPLv2 or later  
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add stunning animations to your WordPress blocks with ease.

## Description

Wonder Animations is a WordPress plugin that allows you to add CSS animations to your Gutenberg blocks. It provides a user-friendly interface for selecting animations, delays, durations, and repeat options, making it easy to create engaging and dynamic content.

## Features

- Add CSS animations to Gutenberg blocks.
- Customize animation delay, duration, and repeat options.
- Reset animations when blocks leave the viewport.
- Fully compatible with modern WordPress versions.
- Lightweight and easy to use.

## Installation

1. Download the plugin files.
2. Upload the plugin folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the 'Plugins' menu in WordPress.

## Usage

1. Edit a block in the Gutenberg editor.
2. Use the "Animation" panel in the block settings to select an animation.
3. Customize the animation delay, duration, and repeat options.
4. Save your changes and view the animations on the front end.

## File Structure

wonder-animations/  
├── LICENSE
├── README.md
├── build
│   ├── index.asset.php
│   ├── index.js
│   ├── index.js.map
│   ├── style-index-rtl.css
│   ├── style-index.css
│   └── style-index.css.map
├── package-lock.json
├── package.json
├── readme.txt
├── src
│   ├── index.js
│   ├── style.scss
│   └── utils
│   └── fetchAnimateCssClasses.js
└── wonder-animations.php

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This plugin is licensed under the GPLv2 or later.

## Credits

- [Animate.css](https://animate.style/) for providing the animation library.
