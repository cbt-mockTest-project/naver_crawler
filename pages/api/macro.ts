import { waitFor } from "./../../src/lib/utils/index";
// pages/api/pdf.ts
import { NextApiHandler } from "next";
import { load } from "cheerio";
import puppeteer from "puppeteer";

type PostLink = {
  href: string;
  title: string;
};

const macro: NextApiHandler = async (req, res) => {
  try {
    const { blogUrl } = req.body;
    const postLinkClass = ".link__iGhdI";
    const postTitleClass = ".title__tl7L1";
    const postAuthorClass = ".blog_author";
    const browser = await puppeteer.launch({
      headless: true,
      devtools: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto(blogUrl);
    await page.waitForSelector(postLinkClass);
    const content = await page.content();
    const $ = load(content);
    const postLinks: PostLink[] = [];
    const postLinksCheerio = $(postLinkClass);
    postLinksCheerio.each((index, link) => {
      const href = $(link).attr("href");
      const title = $(link).find(postTitleClass).text();
      if (href && title) {
        postLinks.push({ title, href });
      }
    });
    let i = 0;
    while (true) {
      if (i >= postLinks.length) break;
      await page.goto(
        `https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${postLinks[i].title}`
      );
      await waitFor(5000);
      await page.goto(postLinks[i].href);
      await page.waitForSelector(postAuthorClass);
      await waitFor(10000);
      await page.evaluate(() => {
        console.log("cookie");
        document.cookie =
          "NNB=; domain=.naver.com; expires=Thu, 01Jan 1999 00:00:10 GMT;";
      });
      await waitFor(10000);
      i++;
    }
    browser.close();
    res.send("success");
  } catch {
    res.send("fail");
  }
};

export default macro;
