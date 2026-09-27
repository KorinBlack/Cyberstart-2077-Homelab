# Privacy Policy — Cyberstart 2077 Custom

Last updated: September 27, 2026

Cyberstart 2077 Custom replaces the browser's New Tab page with a customizable start page and optional homelab monitoring. This policy describes what the extension stores and which network requests its features make. It is an independent fork of TealLogic's original project.

## Data stored on your device

The extension stores page preferences, bookmarks, widget content and settings, service URLs, monitor categories, and Proxmox API token IDs and secrets in the browser's extension-local storage. User-supplied background media and fonts may be stored in IndexedDB. This data is used to render and operate your New Tab page; it is not synced to a developer-operated service.

Proxmox token secrets are stored **in plain text** in extension-local storage. If you use **Export Settings**, the downloaded JSON also contains those secrets in plain text. Keep exports private and delete them when no longer needed. The extension does not encrypt these values at rest.

## Network requests

- **Proxmox monitoring:** When you configure a Proxmox card, the extension requests telemetry from the HTTPS server you specify. It sends the configured API token in an `Authorization` header only to that server. Redirects are disabled for token-bearing requests. Responses are displayed locally.
- **HTTP checks:** When you configure a check, the extension sends GET requests to the URL you specify, including an HTTP URL if you choose one. The configured service receives the request and may log it.
- **Search:** A search query is submitted to your selected search provider. The default option uses the browser's search API when available; custom search engines use their configured URLs.
- **Weather:** The weather widget sends its latitude and longitude to `api.open-meteo.com`. It starts with the page's preset Night City coordinates until you change them.
- **World clock:** If enabled, the world clock sends its selected coordinates to `timeapi.io`.
- **RSS:** If enabled, the RSS widget sends the configured feed URL to `api.allorigins.win` to retrieve the feed through its proxy.
- **Background media:** Remote backgrounds are loaded from their configured source. The default image is hosted by Pexels. A provider or user-selected host can see the request.

The extension does not operate an analytics service or send these settings to a developer-controlled server. The services above may process requests under their own privacy policies. Links to the original project and Buy Me a Coffee are opened only when you click them.

## Permissions

The `search` permission lets the default search option use the browser's search provider. Optional HTTP/HTTPS host access is requested for the specific host you configure in a Proxmox or HTTP card. You can review or revoke a granted host in the browser's extension settings; the affected card will then need access again to update.

## Your choices and retention

You can edit or remove cards, bookmarks, widgets, and settings in the extension. You can remove locally stored extension data through your browser's site-data or extension controls, or uninstall the extension. Exported JSON files remain wherever you saved them until you delete them yourself. Network requests stop when the corresponding feature is disabled or removed; collapsed monitor cards pause their periodic checks.

## Limited use

Information received from Google APIs is used only to provide or improve the user-facing features described above. The use of information received from Google APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements. We do not sell user data or use it for personalized advertising.

## Changes and contact

This policy may be updated when the extension's behavior changes. The current version is maintained with the extension source. For questions or requests, use the [project issue tracker](https://github.com/KorinBlack/Cyberstart-2077-Homelab/issues).
