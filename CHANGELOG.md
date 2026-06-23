# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.9.1] - 2026-06-23

### Fixed

- Front end no longer loads the block editor stack. The editor bundle (which depends on `wp-editor` and pulls in `wp-core-data`) previously loaded on every front-end page via `enqueue_block_assets`, triggering a `wp/v2/users/me?context=edit` request that 401s for logged-out visitors. The resulting unhandled promise rejection could break the hydration of other blocks on the page (e.g. the WooCommerce Cart/Checkout blocks on WebKit).

### Changed

- Split asset loading by context: the editor UI bundle now enqueues only on `enqueue_block_editor_assets`, and the front end loads a small dependency-free `assets/view.js` for the viewport observer. Shared animate.css styles still load in both contexts via `enqueue_block_assets`.

## [1.9.0] - 2025-04-04

### Removed

- Removed `async` attribute from `wp_enqueue_script`.

## [1.8.1] - 2025-04-01

### Fixed

- Fixed version number consistency.

## [1.8.0] - 2025-03-26

### Changed

- Using IntersectionObserver to determine viewport on the frontend.

## [1.7.0] - 2025-03-26

### Added

- Introduced a new structure focused on JavaScript React blocks, moving away from the previous PHP-based implementation.

### Changed

- Updated `@use` path for better compatibility.
- Adjusted `resetView` setTimeouts to improve performance.
- Changed enqueued style file name for clarity.
- Renamed multiple files and imports for consistency.

### Notes

- Versions prior to `1.7.0` are not included in this changelog.
- For earlier changes, refer to the commit history in the repository.
