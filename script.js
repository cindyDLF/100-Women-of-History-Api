import puppeteer from "puppeteer";
import fs from "fs";

let name = [];
let data = {};

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.thoughtco.com/top-women-of-history-3529519", {
      waitUntil: "load"
    });

    const selector = ".comp.mntl-sc-list-item.list-sc-item.mntl-block";
    name = await page.evaluate(selector => {
      let arr = [];
      let elements = Array.from(document.querySelectorAll(selector));
      let id = 0;
      elements.map(el => {
        const title = el.querySelector("h3");
        const description = el.querySelector(
          ".comp.mntl-sc-block.mntl-sc-block-html p"
        );
        const image = el.querySelector("img");
        let img;
        if (image !== null) {
          img = image.getAttribute("data-src");
        }
        id++;
        arr.push({
          id,
          name: title.innerText,
          description: description.innerText,
          img: img
        });
      });
      return arr;
    }, selector);

    data = { women: name };
    const dataJson = JSON.stringify(data);

    fs.writeFile("./data.json", dataJson, function(err, result) {
      if (err) console.log("error", err);
    });

    await browser.close();
    console.log("///end////");
  } catch (err) {
    console.log(err);
  }
})();
