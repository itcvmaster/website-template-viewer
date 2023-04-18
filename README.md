# Image Viewer #

## Table of Content:

- [About The App](#about-the-app)
- [Mandantory Requirements](#mandantory-requirements)
- [Bonus features](#bonus-features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Future Works](#future-works)

## About The App
This project is to develop a website template viewer, which is modeled after the filmstrip folder view in Windows Explorer.

## Mandantory Requirements ##
- Display the thumbnail images in a filmstrip view below the main large image
- Set the thumbnail to have a sliding window with 4 thumbnails visible in the window at a time. 
- Implement a "next" and "previous" link per the styles provided. The sliding window is not circular, when the first 4 thumbnails appear, the previous link should be disabled. When the end of the thumbnail set is reached, the next link should be disabled.
  Note: The sliding window may not have a total of 4 thumbnails if the total template count is not evenly divisible by 4. There are 15 templates in the reference data.
- Example: If there are 15 templates total, then the initial view would show 4 thumbnail images with previous disabled, then clicking "Next" would advance to the next 4 images, next would advance to the next 4, and so on. Finally, there wouild only be 3 images in the sliding window with next disabled and previous enabled.
- When clicking on a thumbnail, the large image corresponding to that thumbnail should appear in the main window, along with the meta data about that template (ID, Cost, Description, Thumbnail File Name, Image File Name)
- Per the reference styles and html, the thumbnail image should have a border when selected.

## Bonus features ##
I implemented some additional features for scalability.

- Routing using react-router
- Redux based state management using RTK(Redux-ToolKit).(But just a placeholder)
- Extensible api management using RTK including
- Caching & storing api response on Redux using RTK
- API response validation by adding my own type checking logic
  - If you run the app locally, you can see these logs in the console to notify you there are type mis-matches.
  ```
  Example Images Validation:
    [images][0].[cost] type should be [number], but it is [string].
    [images][0].[id] type should be [number], but it is [string].
    [images][1].[cost] type should be [number], but it is [string].
    [images][1].[id] type should be [number], but it is [string].
    [images][2].[cost] type should be [number], but it is [string].
    [images][2].[id] type should be [number], but it is [string].
    [images][3].[cost] type should be [number], but it is [string].
    [images][3].[id] type should be [number], but it is [string].
  ```
## Screenshots

![Snapshots](https://github.com/itcvmaster/website-template-viewer/blob/master/snapshots.gif)


## Technologies
Frontend: `React`, `Redux Toolkit`, `react-router`, `javascript`
Backend: `Node.js`, `Express.js`, `Typescript`

## Setup
- Download or clone the repository
- Follow this [document](./image-viewer/README.md) to run backend locally. 
- Follow this [document](./nodejs-backend/README.md) to run frontend locally. 

## Future Works
- CSS should be refined to make it look better
- Move assets to CDN and optimize them to reduce the loading time. (`*.webp` and `*.svg` are preferred )
- Extend Redux based state management for complex data flow