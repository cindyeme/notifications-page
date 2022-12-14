# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design design](./screenshots/desktop-design.jfif)
![Desktop-mark-all-read](./screenshots/all-read-design.jfif)
![Mobile design](./screenshots/mobile-design.jfif)
![Mobile-mark-all-read](./screenshots/mobile-mark.jfif)


### Links

- Solution URL: [GitHub URL here](https://github.com/cindyeme/notifications-page)
- Live Site URL: [Live site URL here](https://cindyeme-notifications.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to separate concerns and conditionally render visuals.

Code snippet on how I set all unread notifications to read and number of unread messages to zero:


```js
  const [unread, setUnread] = useState(true);
  const [notificationNum, setNotificationNum] = useState(3);

  // handle mark-all-as-read 
  const handleMarkAllRead = () => {
    setUnread(false);
    setNotificationNum(0);
  };
```

### Continued development

I will be building a multi-page space tourism website next.


## Author

- LinkedIn - [Emerenini Cynthia Ngozi](https://www.linkedin.com/in/emerenini-cynthia-ngozi)
- Frontend Mentor - [@cindyeme](https://www.frontendmentor.io/profile/cindyeme)
- Twitter - [@CynthiaENgozi1](https://www.twitter.com/cynthiaengozi1)
