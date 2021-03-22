import "./App.css";

// https://api.unsplash.com/
import Images from "./Images";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const API = `?client_id=${process.env.REACT_APP_UNSPLASH_API}`;
const baseUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos/";

// const d = [
//   {
//     id: "L2iZFRPaH1M",
//     created_at: "2021-01-19T17:35:55-05:00",
//     updated_at: "2021-03-21T11:18:46-04:00",
//     promoted_at: null,
//     width: 8037,
//     height: 5358,
//     color: "#d9c0c0",
//     blur_hash: "LqLD*}t8t7s;~qRjM{aeS$jFWAfk",
//     description: null,
//     alt_description: "woman in gray shirt looking at phone",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/L2iZFRPaH1M",
//       html: "https://unsplash.com/photos/L2iZFRPaH1M",
//       download: "https://unsplash.com/photos/L2iZFRPaH1M/download",
//       download_location:
//         "https://api.unsplash.com/photos/L2iZFRPaH1M/download?ixid=MnwyMTY2NTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 93,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: {
//       impression_urls: [],
//       tagline: "The #1 way to agree",
//       tagline_url: "https://www.docusign.com.au",
//       sponsor: {
//         id: "OaviEFA3-Cs",
//         updated_at: "2021-03-22T00:05:22-04:00",
//         username: "docusign",
//         name: "DocuSign",
//         first_name: "DocuSign",
//         last_name: null,
//         twitter_username: "DocuSign",
//         portfolio_url: "http://www.docusign.com",
//         bio: "The #1 way to agree.",
//         location: null,
//         links: {
//           self: "https://api.unsplash.com/users/docusign",
//           html: "https://unsplash.com/@docusign",
//           photos: "https://api.unsplash.com/users/docusign/photos",
//           likes: "https://api.unsplash.com/users/docusign/likes",
//           portfolio: "https://api.unsplash.com/users/docusign/portfolio",
//           following: "https://api.unsplash.com/users/docusign/following",
//           followers: "https://api.unsplash.com/users/docusign/followers",
//         },
//         profile_image: {
//           small:
//             "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//           medium:
//             "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//           large:
//             "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//         },
//         instagram_username: "docusign",
//         total_collections: 0,
//         total_likes: 1,
//         total_photos: 30,
//         accepted_tos: true,
//         for_hire: false,
//       },
//     },
//     user: {
//       id: "OaviEFA3-Cs",
//       updated_at: "2021-03-22T00:05:22-04:00",
//       username: "docusign",
//       name: "DocuSign",
//       first_name: "DocuSign",
//       last_name: null,
//       twitter_username: "DocuSign",
//       portfolio_url: "http://www.docusign.com",
//       bio: "The #1 way to agree.",
//       location: null,
//       links: {
//         self: "https://api.unsplash.com/users/docusign",
//         html: "https://unsplash.com/@docusign",
//         photos: "https://api.unsplash.com/users/docusign/photos",
//         likes: "https://api.unsplash.com/users/docusign/likes",
//         portfolio: "https://api.unsplash.com/users/docusign/portfolio",
//         following: "https://api.unsplash.com/users/docusign/following",
//         followers: "https://api.unsplash.com/users/docusign/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1605626799058-fc780cc2b8b7image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "docusign",
//       total_collections: 0,
//       total_likes: 1,
//       total_photos: 30,
//       accepted_tos: true,
//       for_hire: false,
//     },
//   },
//   {
//     id: "lYQAgS8nb0o",
//     created_at: "2021-03-21T16:31:20-04:00",
//     updated_at: "2021-03-21T20:34:53-04:00",
//     promoted_at: "2021-03-21T16:47:42-04:00",
//     width: 3648,
//     height: 5472,
//     color: "#262626",
//     blur_hash: "L255FA?H?bR+xu_3?bof~q?bxuxt",
//     description:
//       "Side entrance -- https://bds.photo/blog-galleries/2021-02-yonge-broadway/side-entrance",
//     alt_description: "black and yellow metal bench near brown wooden building",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616358266933-249f8cf6bf66?ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616358266933-249f8cf6bf66?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616358266933-249f8cf6bf66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616358266933-249f8cf6bf66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616358266933-249f8cf6bf66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/lYQAgS8nb0o",
//       html: "https://unsplash.com/photos/lYQAgS8nb0o",
//       download: "https://unsplash.com/photos/lYQAgS8nb0o/download",
//       download_location:
//         "https://api.unsplash.com/photos/lYQAgS8nb0o/download?ixid=MnwyMTY2NTF8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 58,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "JHfhhj8ZRzI",
//       updated_at: "2021-03-22T01:05:23-04:00",
//       username: "bdsphoto",
//       name: "BDS.Photo",
//       first_name: "BDS.Photo",
//       last_name: null,
//       twitter_username: "photo_bds",
//       portfolio_url: "http://bds.photo",
//       bio: "Original Photography by Brandon Da Silva // IG: @bds.photo",
//       location: "Toronto 🇨🇦",
//       links: {
//         self: "https://api.unsplash.com/users/bdsphoto",
//         html: "https://unsplash.com/@bdsphoto",
//         photos: "https://api.unsplash.com/users/bdsphoto/photos",
//         likes: "https://api.unsplash.com/users/bdsphoto/likes",
//         portfolio: "https://api.unsplash.com/users/bdsphoto/portfolio",
//         following: "https://api.unsplash.com/users/bdsphoto/following",
//         followers: "https://api.unsplash.com/users/bdsphoto/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "bds.photo",
//       total_collections: 8,
//       total_likes: 23,
//       total_photos: 93,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
//   {
//     id: "F5N-FUEUESg",
//     created_at: "2021-03-21T16:30:02-04:00",
//     updated_at: "2021-03-21T16:56:50-04:00",
//     promoted_at: "2021-03-21T16:46:27-04:00",
//     width: 6000,
//     height: 9000,
//     color: "#c08c73",
//     blur_hash: "LdKl{s%f#loy~UoyOXbHo|bHa#n%",
//     description: null,
//     alt_description: "white and blue high rise building",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616358529416-e86668fa6a74?ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616358529416-e86668fa6a74?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616358529416-e86668fa6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616358529416-e86668fa6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616358529416-e86668fa6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/F5N-FUEUESg",
//       html: "https://unsplash.com/photos/F5N-FUEUESg",
//       download: "https://unsplash.com/photos/F5N-FUEUESg/download",
//       download_location:
//         "https://api.unsplash.com/photos/F5N-FUEUESg/download?ixid=MnwyMTY2NTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 60,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "9UsvLEbNqKk",
//       updated_at: "2021-03-22T01:10:23-04:00",
//       username: "project2204",
//       name: "Leif Christoph Gottwald",
//       first_name: "Leif Christoph",
//       last_name: "Gottwald",
//       twitter_username: null,
//       portfolio_url: "http://www.project2204.com",
//       bio: null,
//       location: "Germany",
//       links: {
//         self: "https://api.unsplash.com/users/project2204",
//         html: "https://unsplash.com/@project2204",
//         photos: "https://api.unsplash.com/users/project2204/photos",
//         likes: "https://api.unsplash.com/users/project2204/likes",
//         portfolio: "https://api.unsplash.com/users/project2204/portfolio",
//         following: "https://api.unsplash.com/users/project2204/following",
//         followers: "https://api.unsplash.com/users/project2204/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1609792843284-f813055f8a61image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1609792843284-f813055f8a61image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1609792843284-f813055f8a61image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: null,
//       total_collections: 2,
//       total_likes: 26,
//       total_photos: 55,
//       accepted_tos: true,
//       for_hire: false,
//     },
//   },
//   {
//     id: "IrAm1JhykYU",
//     created_at: "2021-03-20T18:39:50-04:00",
//     updated_at: "2021-03-21T17:08:11-04:00",
//     promoted_at: "2021-03-21T16:45:58-04:00",
//     width: 4765,
//     height: 7144,
//     color: "#0c2626",
//     blur_hash: "LB8g{d4TaxV@-;ITx]WB4m%MogRj",
//     description: null,
//     alt_description: "man in gray crew neck t-shirt and white nike socks",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616279969745-a8289ee86330?ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616279969745-a8289ee86330?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616279969745-a8289ee86330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616279969745-a8289ee86330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616279969745-a8289ee86330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/IrAm1JhykYU",
//       html: "https://unsplash.com/photos/IrAm1JhykYU",
//       download: "https://unsplash.com/photos/IrAm1JhykYU/download",
//       download_location:
//         "https://api.unsplash.com/photos/IrAm1JhykYU/download?ixid=MnwyMTY2NTF8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 12,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "2GvufItCDLc",
//       updated_at: "2021-03-22T01:05:25-04:00",
//       username: "grahammansfield1",
//       name: "GRAHAM MANSFIELD",
//       first_name: "GRAHAM",
//       last_name: "MANSFIELD",
//       twitter_username: null,
//       portfolio_url: null,
//       bio: "✖️US | Lifestyle & Adventure ✖️Instagram // @GrahamcMansfield",
//       location: "denver, co",
//       links: {
//         self: "https://api.unsplash.com/users/grahammansfield1",
//         html: "https://unsplash.com/@grahammansfield1",
//         photos: "https://api.unsplash.com/users/grahammansfield1/photos",
//         likes: "https://api.unsplash.com/users/grahammansfield1/likes",
//         portfolio: "https://api.unsplash.com/users/grahammansfield1/portfolio",
//         following: "https://api.unsplash.com/users/grahammansfield1/following",
//         followers: "https://api.unsplash.com/users/grahammansfield1/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "grahamcmansfield",
//       total_collections: 0,
//       total_likes: 0,
//       total_photos: 80,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
//   {
//     id: "C74qcCH6NYw",
//     created_at: "2021-03-21T16:31:20-04:00",
//     updated_at: "2021-03-21T16:56:50-04:00",
//     promoted_at: "2021-03-21T16:45:27-04:00",
//     width: 3473,
//     height: 5209,
//     color: "#262626",
//     blur_hash: "L042C#TK57xC~qx]WBRP0LjusoRj",
//     description:
//       "Midnight oil -- https://bds.photo/blog-galleries/2021-02-yonge-broadway/midnight-oil",
//     alt_description: "brown concrete building during daytime",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616358208148-fe5edde75962?ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616358208148-fe5edde75962?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616358208148-fe5edde75962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616358208148-fe5edde75962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616358208148-fe5edde75962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/C74qcCH6NYw",
//       html: "https://unsplash.com/photos/C74qcCH6NYw",
//       download: "https://unsplash.com/photos/C74qcCH6NYw/download",
//       download_location:
//         "https://api.unsplash.com/photos/C74qcCH6NYw/download?ixid=MnwyMTY2NTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 57,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "JHfhhj8ZRzI",
//       updated_at: "2021-03-22T01:05:23-04:00",
//       username: "bdsphoto",
//       name: "BDS.Photo",
//       first_name: "BDS.Photo",
//       last_name: null,
//       twitter_username: "photo_bds",
//       portfolio_url: "http://bds.photo",
//       bio: "Original Photography by Brandon Da Silva // IG: @bds.photo",
//       location: "Toronto 🇨🇦",
//       links: {
//         self: "https://api.unsplash.com/users/bdsphoto",
//         html: "https://unsplash.com/@bdsphoto",
//         photos: "https://api.unsplash.com/users/bdsphoto/photos",
//         likes: "https://api.unsplash.com/users/bdsphoto/likes",
//         portfolio: "https://api.unsplash.com/users/bdsphoto/portfolio",
//         following: "https://api.unsplash.com/users/bdsphoto/following",
//         followers: "https://api.unsplash.com/users/bdsphoto/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "bds.photo",
//       total_collections: 8,
//       total_likes: 23,
//       total_photos: 93,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
//   {
//     id: "HJgaV1qjHS0",
//     created_at: "2021-02-08T19:47:19-05:00",
//     updated_at: "2021-03-21T16:28:18-04:00",
//     promoted_at: null,
//     width: 5030,
//     height: 4024,
//     color: "#d9c0a6",
//     blur_hash: "LSI#DM0L9G9at,VsE2WARjNHR,%L",
//     description: null,
//     alt_description: "person in blue long sleeve shirt using black Surface",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/HJgaV1qjHS0",
//       html: "https://unsplash.com/photos/HJgaV1qjHS0",
//       download: "https://unsplash.com/photos/HJgaV1qjHS0/download",
//       download_location:
//         "https://api.unsplash.com/photos/HJgaV1qjHS0/download?ixid=MnwyMTY2NTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 120,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: {
//       impression_urls: [
//         "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=8321357&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
//       ],
//       tagline: "Original by Design",
//       tagline_url: null,
//       sponsor: {
//         id: "N-JSeSTCz68",
//         updated_at: "2021-03-22T00:40:22-04:00",
//         username: "surface",
//         name: "Surface",
//         first_name: "Surface",
//         last_name: null,
//         twitter_username: "surface",
//         portfolio_url: "http://surface.com",
//         bio: "Follow us @Surface. #OriginalByDesign",
//         location: null,
//         links: {
//           self: "https://api.unsplash.com/users/surface",
//           html: "https://unsplash.com/@surface",
//           photos: "https://api.unsplash.com/users/surface/photos",
//           likes: "https://api.unsplash.com/users/surface/likes",
//           portfolio: "https://api.unsplash.com/users/surface/portfolio",
//           following: "https://api.unsplash.com/users/surface/following",
//           followers: "https://api.unsplash.com/users/surface/followers",
//         },
//         profile_image: {
//           small:
//             "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//           medium:
//             "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//           large:
//             "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//         },
//         instagram_username: "surface",
//         total_collections: 0,
//         total_likes: 0,
//         total_photos: 84,
//         accepted_tos: true,
//         for_hire: false,
//       },
//     },
//     user: {
//       id: "N-JSeSTCz68",
//       updated_at: "2021-03-22T00:40:22-04:00",
//       username: "surface",
//       name: "Surface",
//       first_name: "Surface",
//       last_name: null,
//       twitter_username: "surface",
//       portfolio_url: "http://surface.com",
//       bio: "Follow us @Surface. #OriginalByDesign",
//       location: null,
//       links: {
//         self: "https://api.unsplash.com/users/surface",
//         html: "https://unsplash.com/@surface",
//         photos: "https://api.unsplash.com/users/surface/photos",
//         likes: "https://api.unsplash.com/users/surface/likes",
//         portfolio: "https://api.unsplash.com/users/surface/portfolio",
//         following: "https://api.unsplash.com/users/surface/following",
//         followers: "https://api.unsplash.com/users/surface/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "surface",
//       total_collections: 0,
//       total_likes: 0,
//       total_photos: 84,
//       accepted_tos: true,
//       for_hire: false,
//     },
//   },
//   {
//     id: "zF2h2QHtwx0",
//     created_at: "2021-03-21T16:05:36-04:00",
//     updated_at: "2021-03-21T16:56:50-04:00",
//     promoted_at: "2021-03-21T16:44:28-04:00",
//     width: 3648,
//     height: 4694,
//     color: "#a6c0c0",
//     blur_hash: "LJG*=[Q,%LMwp{nNVsX7o~I;WURj",
//     description: null,
//     alt_description: "burger on brown wooden tray",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616356885544-36d0673944d9?ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616356885544-36d0673944d9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616356885544-36d0673944d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616356885544-36d0673944d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616356885544-36d0673944d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/zF2h2QHtwx0",
//       html: "https://unsplash.com/photos/zF2h2QHtwx0",
//       download: "https://unsplash.com/photos/zF2h2QHtwx0/download",
//       download_location:
//         "https://api.unsplash.com/photos/zF2h2QHtwx0/download?ixid=MnwyMTY2NTF8MHwxfGFsbHw3fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 27,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "zFO4uD8ji5I",
//       updated_at: "2021-03-22T01:00:25-04:00",
//       username: "tuvaloland",
//       name: "Tuva Mathilde Løland",
//       first_name: "Tuva Mathilde",
//       last_name: "Løland",
//       twitter_username: null,
//       portfolio_url: null,
//       bio: "Instagram: @tuvalolandphoto @tuvaloland",
//       location: "Oslo",
//       links: {
//         self: "https://api.unsplash.com/users/tuvaloland",
//         html: "https://unsplash.com/@tuvaloland",
//         photos: "https://api.unsplash.com/users/tuvaloland/photos",
//         likes: "https://api.unsplash.com/users/tuvaloland/likes",
//         portfolio: "https://api.unsplash.com/users/tuvaloland/portfolio",
//         following: "https://api.unsplash.com/users/tuvaloland/following",
//         followers: "https://api.unsplash.com/users/tuvaloland/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1594308148154-29066cb03ad9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1594308148154-29066cb03ad9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1594308148154-29066cb03ad9image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "tuvalolandphoto",
//       total_collections: 13,
//       total_likes: 20,
//       total_photos: 41,
//       accepted_tos: true,
//       for_hire: false,
//     },
//   },
//   {
//     id: "b7ypq4o9fNo",
//     created_at: "2021-03-20T17:42:09-04:00",
//     updated_at: "2021-03-21T17:08:11-04:00",
//     promoted_at: "2021-03-21T16:44:24-04:00",
//     width: 4814,
//     height: 7217,
//     color: "#d9f3f3",
//     blur_hash: "LpK1m|M{b^t6_NogxvNGyDozjEt6",
//     description: null,
//     alt_description: "man in brown shirt kissing woman in white floral dress",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616276510833-81a48adca72c?ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616276510833-81a48adca72c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616276510833-81a48adca72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616276510833-81a48adca72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616276510833-81a48adca72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/b7ypq4o9fNo",
//       html: "https://unsplash.com/photos/b7ypq4o9fNo",
//       download: "https://unsplash.com/photos/b7ypq4o9fNo/download",
//       download_location:
//         "https://api.unsplash.com/photos/b7ypq4o9fNo/download?ixid=MnwyMTY2NTF8MHwxfGFsbHw4fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 18,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "2GvufItCDLc",
//       updated_at: "2021-03-22T01:05:25-04:00",
//       username: "grahammansfield1",
//       name: "GRAHAM MANSFIELD",
//       first_name: "GRAHAM",
//       last_name: "MANSFIELD",
//       twitter_username: null,
//       portfolio_url: null,
//       bio: "✖️US | Lifestyle & Adventure ✖️Instagram // @GrahamcMansfield",
//       location: "denver, co",
//       links: {
//         self: "https://api.unsplash.com/users/grahammansfield1",
//         html: "https://unsplash.com/@grahammansfield1",
//         photos: "https://api.unsplash.com/users/grahammansfield1/photos",
//         likes: "https://api.unsplash.com/users/grahammansfield1/likes",
//         portfolio: "https://api.unsplash.com/users/grahammansfield1/portfolio",
//         following: "https://api.unsplash.com/users/grahammansfield1/following",
//         followers: "https://api.unsplash.com/users/grahammansfield1/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1616089242113-2eeca888d50bimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "grahamcmansfield",
//       total_collections: 0,
//       total_likes: 0,
//       total_photos: 80,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
//   {
//     id: "I-aqAgf0lzs",
//     created_at: "2021-03-21T03:31:47-04:00",
//     updated_at: "2021-03-21T17:08:11-04:00",
//     promoted_at: "2021-03-21T16:44:21-04:00",
//     width: 4000,
//     height: 3000,
//     color: "#c0a68c",
//     blur_hash: "LIMP~{DijvV?~pIUW=ofa#V@j[of",
//     description: null,
//     alt_description: "brown sand with shadow of person",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616311833609-e6f4e1d0761c?ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616311833609-e6f4e1d0761c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616311833609-e6f4e1d0761c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616311833609-e6f4e1d0761c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616311833609-e6f4e1d0761c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/I-aqAgf0lzs",
//       html: "https://unsplash.com/photos/I-aqAgf0lzs",
//       download: "https://unsplash.com/photos/I-aqAgf0lzs/download",
//       download_location:
//         "https://api.unsplash.com/photos/I-aqAgf0lzs/download?ixid=MnwyMTY2NTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTYxNjM5MDAzOQ",
//     },
//     categories: [],
//     likes: 19,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "Pl74vXoXYvY",
//       updated_at: "2021-03-22T00:50:24-04:00",
//       username: "f171pp0",
//       name: "Filippo Bortolotto",
//       first_name: "Filippo",
//       last_name: "Bortolotto",
//       twitter_username: null,
//       portfolio_url: null,
//       bio:
//         "Download free, beautiful high-quality photos curated by Filippo. INSTAGRAM @f171pp0",
//       location: "Padova, Italy",
//       links: {
//         self: "https://api.unsplash.com/users/f171pp0",
//         html: "https://unsplash.com/@f171pp0",
//         photos: "https://api.unsplash.com/users/f171pp0/photos",
//         likes: "https://api.unsplash.com/users/f171pp0/likes",
//         portfolio: "https://api.unsplash.com/users/f171pp0/portfolio",
//         following: "https://api.unsplash.com/users/f171pp0/following",
//         followers: "https://api.unsplash.com/users/f171pp0/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1615722940427-bcd267a68669image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1615722940427-bcd267a68669image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1615722940427-bcd267a68669image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "f171pp0",
//       total_collections: 0,
//       total_likes: 2,
//       total_photos: 10,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
//   {
//     id: "7nlvf1Wq2Pg",
//     created_at: "2021-03-21T16:31:20-04:00",
//     updated_at: "2021-03-21T16:56:50-04:00",
//     promoted_at: "2021-03-21T16:43:12-04:00",
//     width: 3407,
//     height: 5111,
//     color: "#262626",
//     blur_hash: "L13ul@_NInM{ozofofjuD%M{ofof",
//     description:
//       "On repeat -- https://bds.photo/blog-galleries/2021-02-yonge-broadway/on-repeat",
//     alt_description: "gray concrete building during daytime",
//     urls: {
//       raw:
//         "https://images.unsplash.com/photo-1616358197356-977680733784?ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk&ixlib=rb-1.2.1",
//       full:
//         "https://images.unsplash.com/photo-1616358197356-977680733784?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk&ixlib=rb-1.2.1&q=85",
//       regular:
//         "https://images.unsplash.com/photo-1616358197356-977680733784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk&ixlib=rb-1.2.1&q=80&w=1080",
//       small:
//         "https://images.unsplash.com/photo-1616358197356-977680733784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk&ixlib=rb-1.2.1&q=80&w=400",
//       thumb:
//         "https://images.unsplash.com/photo-1616358197356-977680733784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk&ixlib=rb-1.2.1&q=80&w=200",
//     },
//     links: {
//       self: "https://api.unsplash.com/photos/7nlvf1Wq2Pg",
//       html: "https://unsplash.com/photos/7nlvf1Wq2Pg",
//       download: "https://unsplash.com/photos/7nlvf1Wq2Pg/download",
//       download_location:
//         "https://api.unsplash.com/photos/7nlvf1Wq2Pg/download?ixid=MnwyMTY2NTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2MTYzOTAwMzk",
//     },
//     categories: [],
//     likes: 32,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     user: {
//       id: "JHfhhj8ZRzI",
//       updated_at: "2021-03-22T01:05:23-04:00",
//       username: "bdsphoto",
//       name: "BDS.Photo",
//       first_name: "BDS.Photo",
//       last_name: null,
//       twitter_username: "photo_bds",
//       portfolio_url: "http://bds.photo",
//       bio: "Original Photography by Brandon Da Silva // IG: @bds.photo",
//       location: "Toronto 🇨🇦",
//       links: {
//         self: "https://api.unsplash.com/users/bdsphoto",
//         html: "https://unsplash.com/@bdsphoto",
//         photos: "https://api.unsplash.com/users/bdsphoto/photos",
//         likes: "https://api.unsplash.com/users/bdsphoto/likes",
//         portfolio: "https://api.unsplash.com/users/bdsphoto/portfolio",
//         following: "https://api.unsplash.com/users/bdsphoto/following",
//         followers: "https://api.unsplash.com/users/bdsphoto/followers",
//       },
//       profile_image: {
//         small:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//         medium:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//         large:
//           "https://images.unsplash.com/profile-1574293028551-fa83a83f025cimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
//       },
//       instagram_username: "bds.photo",
//       total_collections: 8,
//       total_likes: 23,
//       total_photos: 93,
//       accepted_tos: true,
//       for_hire: true,
//     },
//   },
// ];

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");

  async function fetchImages() {
    setLoading(true);

    let finalUrl = `${baseUrl}${API}&page=${page}`;

    if (term !== "") {
      finalUrl = `${searchUrl}${API}&page=${page}&query=${term}`;
    }

    try {
      const res = await fetch(finalUrl);
      const data = await res.json();

      console.log(page, term);

      if (page > 0 && term === "") {
        setImages([...images, ...data]);
        console.log("no search");
      } else if (page > 0 && term !== false) {
        setImages([...images, ...data.results]);
        console.log("page > 0 search");
      } else if (term !== "" && page === 0) {
        setImages(data.results);
        console.log("only search");
      } else {
        setImages(data);
        console.log("default");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPage(() => {
      return 0;
    });
  }

  // function localData() {
  //   setLoading(true);

  //   if (page > 0) {
  //     setImages([...images, ...d]);
  //   } else if (term !== "") {
  //     setImages(d);
  //   } else {
  //     setImages(d);
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }

  useEffect(() => {
    fetchImages();
    // localData();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      let finalScroll = window.scrollY + window.innerHeight;
      let bodyHeight = document.body.scrollHeight - 3;

      let lastScrollTop = 0;
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        if (loading === false && finalScroll >= bodyHeight) {
          setPage((old) => {
            return old + 1;
          });
          setLoading(true);
        }
      } else {
        // upscroll code
      }
      // eslint-disable-next-line
    });

    return window.removeEventListener("scroll", event);
  }, []);

  let show =
    images.length === 0 ? (
      loading ? (
        <Loading />
      ) : (
        <h4 className="error">
          403 Error!! The Request limit to unsplash API is 50 per hour, Please
          reload after 50 min.
        </h4>
      )
    ) : (
      images.map((item, index) => {
        const {
          likes,
          urls: { small },
          user: {
            updated_at,
            profile_image: { medium },
          },
        } = item;

        const details = {
          likes,
          image: small,
          userImg: medium,
          updatedAt: new Date(updated_at).toLocaleDateString(),
        };

        return <Images key={index} {...details} />;
      })
    );

  return (
    <div className="container">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search image"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main className="grid">{show}</main>
      {loading && <Loading />}
    </div>
  );
}

export default App;
