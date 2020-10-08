'use strict';

// Serve the page
require('./serve.js');

console.log("Taking screenshots of diagram (output in /out dir)")

// Take a screenshot from the hosted page
// From https://gojs.net/latest/intro/serverSideImages.html
const puppeteer = require('puppeteer');
const fs = require('fs');
const { exit } = require('process');

const parseDataUrl = (dataUrl) => {
  const matches = dataUrl.match(/^data:(.+);base64,(.+)$/);
  if (matches.length !== 3) {
    throw new Error('Could not parse data URL.');
  }
  return { mime: matches[1], buffer: Buffer.from(matches[2], 'base64') };
};

(async () => {
  const browser = await puppeteer.launch({
    headless:true,
    args: ['--font-render-hinting=medium']
  });
  const page = await browser.newPage();

  // From https://stackoverflow.com/a/48035121/4746236
  await page.setViewport({ width: 1920, height: 1080});

  // This does not have to be a page on the web, it can be a localhost page, or file://
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2' // ensures images are loaded
  });

  const imageData = await page.evaluate(() => {
    window.myDiagram.animationManager.stopAnimation();
    return window.myDiagram.makeImageData({
      background: "white"
    });
  });

  // Output the GoJS makeImageData as a .png:
  const { buffer } = parseDataUrl(imageData);
  fs.writeFileSync('diagram.png', buffer, 'base64');

  // Output a page screenshot
  await page.screenshot({ path: 'page.png' });
  await browser.close();

  // Stop everything (including the server)
  exit();
})();
