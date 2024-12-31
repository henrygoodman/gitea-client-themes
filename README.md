# Gitea Gruvbox Theme Extension

This browser extension applies a custom Gruvbox-inspired theme to your Gitea instances.

## Features

- Applies a sleek, Gruvbox-inspired theme for all Gitea instances.

## Installation

- Clone this repository
- Open your browser's extensions page:
  - Firefox: Navigate to about:debugging#/runtime/this-firefox.
- Click "Load Temporary Add-on" (or equivalent for your browser).
- Select the manifest.json file from the extension folder.

## Usage

- Ensure the extension is enabled.
- Visit any Gitea instance (e.g., https://gitea.com).
- If prompted by the browser to allow the extension to run on the site:
  - Firefox: Click the extension icon in the toolbar and select "Always Allow" for the current site.
- Reload the Gitea page, and the Gruvbox theme will be applied automatically.

## Notes

- Server-Side vs. Client-Side Theming: Gitea supports server-side themes, which can be applied by administrators for all users. However, if the admin does not add a theme or you prefer a personal customization, this extension allows you to apply your own Gruvbox theme on the client side.
- This extension applies the theme to all URLs by default. It's up to the user to manage where the extension runs.

## Contributing

Feel free to submit issues or pull requests to improve the extension!

## License

This project is licensed under the MIT License.
