# Lucide iconpack for Home Assistant

<p align="center"><img width="410" src="https://lucide.dev/logo-text.svg" alt="Lucide Logo"></p>

This enables all the awesome [Lucide icons](https://lucide.dev/) to your Home Assistant. Current version of the Lucide package is [v.0.276.0](https://github.com/lucide-icons/lucide/releases/tag/0.276.0).

## Table of Content

- [Installations methods](#installation-methods)
  - [HACS](#hacs)
  - [Manual installation](#manual-installation)
- [User manual](#user-manual)
  - [Example](#example)

## Installation methods

### HACS

Recommended way to install Lucide iconpack is via [Home Assistant Community Store](https://hacs.xyz)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Lavve&repository=ha-lucide-iconpack&category=frontend)

After installing through HACS:

1. Add the following lines to your `configuration.yaml`

   ```yaml
   frontend:
     extra_module_url:
       - /local/community/ha-lucide-iconpack/lucide-icons.js
   ```

2. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

   ```yaml
   resources:
     - type: js
       url: /local/community/ha-lucide-iconpack/lucide-icons.js
   ```

### Manual installation

To add custom repositories please follow [this guide](https://hacs.xyz/docs/faq/custom_repositories/). Set URL to ``and category to`Lovelace`.

1. Download `lucide-icons.js` file from the [latest release](/releases/latest).

2. Copy the `lucide-icons.js` file into `<config>/www/` the directory where your `configuration.yaml` resides.

3. Add the following to the `frontend` section of your `configuration.yaml`

   ```yaml
   frontend:
     extra_module_url:
       - /local/lucide-icons.js
   ```

4. (Optional) YAML mode users. Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml.

   ```yaml
   resources:
     - type: js
       url: /local/lucide-icons.js
   ```

5. Restart Home Assistant.

## User manual

Lucide iconpack uses the prefix `luc:` followed by the icon name

Example: `luc:egg` ![Preview](https://raw.githubusercontent.com/lucide-icons/lucide/7feae886013856a10052656180cdf1ad4439a44c/icons/egg.svg)

Example: `luc:qr-code` ![Preview](https://raw.githubusercontent.com/lucide-icons/lucide/7feae886013856a10052656180cdf1ad4439a44c/icons/qr-code.svg)

### Example

Example of Lucide iconpack in a lovelace card:

```yaml
entities:
  - entity: light.lamp_ceiling
    icon: 'luc:lamp-ceiling'
    name: Lamp ceiling
  - entity: light.light_office
    icon: 'luc:lamp-desk'
    name: Desk lamp
  - entity: media_player.sonos_kitchen
    icon: 'luc:music'
    name: Music
show_header_toggle: false
title: Lucide iconpack
type: entities
```
