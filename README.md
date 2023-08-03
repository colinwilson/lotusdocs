# Lotus Docs

[Lotus Docs](https://lotusdocs.dev) is an easily updated and customisable [Hugo](https://gohugo.io/) theme for building fast, secure, and SEO-friendly documentation sites.

![Lotus Docs Banner](https://res.cloudinary.com/lotuslabs/image/upload/v1688223320/Lotus%20Docs/Social%20Media/lotus_docs_banner_mockup_v1.1_rounded_glwogb.webp)

Check out the demo site [https://lotusdocs.dev/docs](https://lotusdocs.dev/docs) (also doubles as the documentation guide for Lotus Docs 📖)

🚧 **WARNING** 🚧 - **Lotus Docs is currently in pre-release development and thus not recommended for use in production at this time. But please do try it out 😊**

## Features

* [x] Modern documentation layout
* [x] Responsive design / Mobile support
* [x] Fast, Accessible and SEO-Friendly (💯 scores on [Google Lighthouse](https://pagespeed.web.dev/)!)
* [x] Secure by default
* [x] Built on Bootstrap 5
* [x] Deploy on [Vercel](https://vercel.com/) with multiple options
* [x] Multilingual support (i18n)
* [x] Powerful Syntax Highlighting via [Prism.js](https://prismjs.com/)
* [x] Dark Mode
* [x] Custom fonts (via [Google Fonts](https://fonts.google.com/))
* [x] Custom icons (via [Google Material Symbols](https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Symbols))
* [x] Landing page template included
* [x] Documentation sidebar menu (with optional icons)
* [x] Table of Contents menu on each page (optional)
* [x] Customisable theme accent colour
* [x] Social media links (Github, Twitter, Instagram etc)
* [x] Static Search plugin option (powered by [FlexSearch](https://github.com/nextapps-de/flexsearch), enabled by default)
* [x] Support for [DocSearch](https://docsearch.algolia.com/)
* [x] Custom shortcodes (PrismJS, Alerts, Tabs, Tables)
* [x] Analytics ([Google Analytics v4](https://analytics.google.com/analytics/web/), [Plausible Analytics](https://plausible.io/))
* [ ] [Open Graph](https://ogp.me/)
* [ ] [Mermaid](https://mermaid.js.org/) Support
* [ ] Math equations powered by [KaTeX](https://katex.org/)

## Getting Started

### Requirements

- Hugo **Extended** (minimum version: 0.100.0)
- git
- Go (minimum version v1.19)

### Getting started

The Lotus Docs theme can installed using one of the following methods:

- As a Hugo Module[^1]
- As a Git submodule
- Clone the theme files locally

### Initialize your site as a Hugo Module

The Lotus Docs theme makes use of the [Hugo Bootstrap Module](https://github.com/gohugoio/hugo-mod-bootstrap-scss). For this reason, it's necessary to initialize your site as a Hugo Module. If your site isn't already, use the `hugo mod init` command to initialize your site as a module:

```bash
hugo mod init github.com/<user>/<your-hugo-theme-name>
```

### Install as a Hugo Module

Now, edit the `hugo.toml` configuration file to include the [Lotus Docs theme](https://github.com/colinwilson/lotusdocs) and the [Hugo Bootstrap module](https://github.com/gohugoio/hugo-mod-bootstrap-scss) as modules:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    # this is needed when you add the theme as a submodule to your repo.
    # replacements = "github.com/colinwilson/lotusdocs -> themes/lotusdocs"
    [[module.imports]]
        path = "github.com/colinwilson/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
```

### Install as a Git Submodule

From the root of your project run the following `git` commands:

```bash
git init
git submodule add https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
```

### Install Locally

There may be cases where you prefer to customize and maintain the Lotus Docs theme yourself. In such cases, use `git` to clone the theme into the `themes/lotusdocs` directory:

```bash
git clone https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
```

## Author

[Colin Wilson](https://github.com/colinwilson)

Copyright © 2022-2023 [Colin Wilson](https://github.com/colinwilson)

[^1]: [Hugo Modules](https://gohugo.io/hugo-modules/)