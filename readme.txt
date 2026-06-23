=== Wonder Animations ===

Contributors: wonderjarcreative<br>Donate link: https://example.com/<br>Tags: wordpress, animations, css, frontend<br>Requires at least: 5.0<br>Tested up to: 6.2<br>Stable tag: 1.9.1<br>License: GPLv2 or later<br>License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add stunning animations to your WordPress blocks with ease.

== Description ==

Wonder Animations is a WordPress plugin that allows you to add CSS animations to your Gutenberg blocks. It provides a user-friendly interface for selecting animations, delays, durations, and repeat options, making it easy to create engaging and dynamic content.

== Features ==

* Add CSS animations to Gutenberg blocks.
* Customize animation delay, duration, and repeat options.
* Reset animations when blocks leave the viewport.
* Fully compatible with modern WordPress versions.
* Lightweight and easy to use.

== Installation ==

1. Download the plugin files.
2. Upload the plugin folder to the <code>/wp-content/plugins/</code> directory.
3. Activate the plugin through the &#39;Plugins&#39; menu in WordPress.

== Usage ==

1. Edit a block in the Gutenberg editor.
2. Use the &quot;Animation&quot; panel in the block settings to select an animation.
3. Customize the animation delay, duration, and repeat options.
4. Save your changes and view the animations on the front end.

== File Structure ==

wonder-animations/<br>├── LICENSE
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

== Contributing ==

1. Fork the repository.
2. Create a new branch (<code>git checkout -b feature-branch</code>).
3. Commit your changes (<code>git commit -am 'Add new feature'</code>).
4. Push to the branch (<code>git push origin feature-branch</code>).
5. Create a new Pull Request.

== License ==

This plugin is licensed under the GPLv2 or later.

== Credits ==

* Animate.css (https://animate.style/) for providing the animation library.

== Changelog ==
All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog (https://keepachangelog.com/en/1.0.0/),<br>and this project adheres to Semantic Versioning (https://semver.org/).

== [Unreleased] ==

== [1.9.1] - 2026-06-23 ==

= Fixed =

* Front end no longer loads the block editor stack. The editor bundle (which depends on <code>wp-editor</code> and pulls in <code>wp-core-data</code>) previously loaded on every front-end page via <code>enqueue_block_assets</code>, triggering a <code>wp/v2/users/me?context=edit</code> request that 401s for logged-out visitors. The resulting unhandled promise rejection could break the hydration of other blocks on the page (e.g. the WooCommerce Cart/Checkout blocks on WebKit).

= Changed =

* Split asset loading by context: the editor UI bundle now enqueues only on <code>enqueue_block_editor_assets</code>, and the front end loads a small dependency-free <code>assets/view.js</code> for the viewport observer. Shared animate.css styles still load in both contexts via <code>enqueue_block_assets</code>.

== [1.9.0] - 2025-04-04 ==

= Removed =

* Removed <code>async</code> attribute from <code>wp_enqueue_script</code>.

== [1.8.1] - 2025-04-01 ==

= Fixed =

* Fixed version number consistency.

== [1.8.0] - 2025-03-26 ==

= Changed =

* Using IntersectionObserver to determine viewport on the frontend.

== [1.7.0] - 2025-03-26 ==

= Added =

* Introduced a new structure focused on JavaScript React blocks, moving away from the previous PHP-based implementation.

= Changed =

* Updated <code>@use</code> path for better compatibility.
* Adjusted <code>resetView</code> setTimeouts to improve performance.
* Changed enqueued style file name for clarity.
* Renamed multiple files and imports for consistency.

= Notes =

* Versions prior to <code>1.7.0</code> are not included in this changelog.
* For earlier changes, refer to the commit history in the repository.