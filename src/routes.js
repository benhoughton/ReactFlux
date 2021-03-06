"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
        <Route name="authors" handler={require('./components/authors/authorPage')}></Route>
        <Route name="about" handler={require('./components/about/aboutPage')}></Route>
        <Route name="author" path="/authors/:authorId" />
        <NotFoundRoute handler={require('./components/404')}/>
        <Redirect from="about-us" to="about"/>
    </Route>
);

module.exports = routes;
