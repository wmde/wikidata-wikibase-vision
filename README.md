# Wikidata & Wikibase, Vision Diagram

Team owned and developed technical vision diagram for Wikidata & Wikibase.

You can interactively alter this diagram at https://wmde.github.io/wikidata-wikibase-vision/

Once you have made changes you can create a PR with the updated JSON.

Changes on master will render a new diagram image visible at https://wmde.github.io/wikidata-wikibase-vision/diagram.png once the Github action for the merge has fired (and cache has purged).

![](https://wmde.github.io/wikidata-wikibase-vision/diagram.png)

## Repo Utilities

`npm run serve` serves the index.html page (which is also hosted on GitHub pages)

`npm run build` renders a PNG version of the diagram into the `/out` directory that can be used for "releases".

## GoJs

GoJS is:

- https://gojs.net/latest/index.html
- Copyright 1998-2020 by Northwoods Software Corporation.
- Used with permission (in a Twitter DM with Addshore confirming we can use with the licence).
