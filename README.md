# Logly Theme

A stylish, modern, and content-focused theme for Ghost. Logly is designed to be easy to use and customize, providing a great reading experience for your audience.

&nbsp;

## Installation Guide

Installing the Logly theme on your Ghost blog is a straightforward process. Follow these simple steps:

1.  **Download the Theme**
    - Navigate to the [releases page](https://github.com/frontendweb3/logly/releases) of this repository.
    - Download the latest `logly.zip` file.

2.  **Upload to Ghost**
    - Log in to your Ghost admin panel.
    - Go to **Settings** -> **Design**.
    - Click on **Change theme** and then click the **Upload theme** button.
    - Select the `logly.zip` file you downloaded.

3.  **Activate the Theme**
    - Once the upload is complete, click **Activate** to start using the Logly theme on your site.

That's it! Your Ghost blog is now using the Logly theme.

&nbsp;

## Development

If you're a developer and want to customize the theme, you can set up a local development environment.

### 1. Setup

Clone the repository and install the dependencies. We recommend using `pnpm` for package management.

```bash
# Clone the repository
git clone https://github.com/your-username/logly.git

# Navigate to the theme directory
cd logly

# Install dependencies
pnpm install
```

### 2. Run Development Server

Start the development server to see live changes as you edit the files.

```bash
pnpm run dev
```

This will compile the assets and enable live reloading. Any changes to CSS, JavaScript, or Handlebars (`.hbs`) files will be reflected in your browser automatically.

### 3. Build for Production

When you're ready to deploy your changes, build the theme assets for production.

```bash
pnpm run build
```

### 4. Create a Zip Archive

To upload your customized theme to Ghost, create a zip file.

```bash
pnpm run zip
```

This will create a `logly.zip` file in the root of the project, which you can then upload to your Ghost blog.

&nbsp;

## Copyright & License

Copyright (c) 2023-2026 Logly - Released under the [MIT license](LICENSE).
