import randomFortune from "./fortuneCookies.js";

export const homePage = (req, res) => {res.render('home')};

export const aboutPage = (req, res) => res.render('about', {fortune : randomFortune});

export const notFound = (req, res) => res.render('404');

export const serverError = (err, req, res, next) => res.render('500');