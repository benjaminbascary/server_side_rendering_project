import randomFortune from './fortuneCookies.js'
import { toursContext, currenciesContext, currencyContext, specialsUrlContext, priceContext } from './toursContext.js';

export const homePage = (req, res) => {res.render('home')};

export const aboutPage = (req, res) => res.render('about', {fortune : randomFortune});

export const toursPage = (req, res) => res.render('tours', {
    tours : toursContext,
    prices: priceContext,
})

export const notFound = (req, res) => res.render('404');

export const serverError = (err, req, res, next) => res.render('500');

export const toursRequest = (req, res) => res.json(tours);