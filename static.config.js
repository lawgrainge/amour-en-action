import React from "react";
import axios from "axios";
import fs from "fs";
import path from "path";
import klaw from "klaw";

const getPagesData = () =>
  new Promise((resolve) => {
    const pagesPath = "./public/content/pages";
    let pagesData = {};

    if (fs.existsSync(pagesPath)) {
      klaw(pagesPath).on("data", (file) => {
        if (path.extname(file.path) === ".json") {
          const data = JSON.parse(fs.readFileSync(file.path, "utf8"));
          pagesData[data.title] = data;
        }
      });
    }
    resolve(pagesData);
  });

const getCMSData = (cmsPath) =>
  new Promise((resolve) => {
    let cmsData = [];

    if (fs.existsSync(cmsPath)) {
      klaw(cmsPath).on("data", (file) => {
        if (path.extname(file.path) === ".json") {
          const data = JSON.parse(fs.readFileSync(file.path, "utf8"));
          const slug = file.path.replace(/(.+\/)|(.json)/g, "");

          cmsData.push({ slug: slug, ...data });
        }
      });
    }

    resolve(cmsData);
  });

const getPageDataByName = (pages, name) =>
  pages.filter((p) => p.title === name)[0] || {};

export default {
  getSiteData: () => ({
    title: "Amour En Action",
  }),
  getRoutes: async () => {
    const pagesData = await getPagesData();
    const pages = await getCMSData("./public/content/pages");
    const testimonials = await getCMSData("./public/content/testimonials");
    const journalEntries = await getCMSData("./public/content/journal");
    const teamMembers = await getCMSData("./public/content/team");

    let test = {};

    for (let p = 0; p < pages.length; p++) {
      test["hello"] = "world";
    }

    return [
      {
        path: "/",
        component: "src/pages/Home/Home",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "home"),
          },
        }),
      },
      {
        path: "/about",
        component: "src/pages/About/About",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "about"),
            teamMembers,
          },
        }),
      },
      {
        path: "/journal",
        component: "src/pages/Journal/Journal",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "journal"),
            journalEntries,
          },
        }),
      },
      {
        path: "/testimonials",
        component: "src/pages/Testimonials/Testimonials",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "testimonials"),
            testimonials,
          },
        }),
      },
      {
        path: "/take-action",
        component: "src/pages/TakeAction/TakeAction",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "takeAction"),
          },
        }),
      },
      {
        path: "/contact",
        component: "src/pages/Contact/Contact",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "contact"),
          },
        }),
      },
      {
        path: "/contact/thanks",
        component: "src/pages/Contact/Contact",
        getData: () => ({
          pageData: {
            ...getPageDataByName(pages, "contact"),
          },
        }),
      },
      {
        is404: true,
        component: "src/pages/404/404",
      },
    ];
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="normalize.css" />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Serif:700i|Source+Sans+Pro:400,600"
          rel="stylesheet"
        />
        <script src="netlify-login.js"></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
