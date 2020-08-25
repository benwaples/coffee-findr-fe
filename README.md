# Project Details:

## Name of the Project: 
No Stars, No Bucks

## Names of the Team Members:
Adrian Simental
Nate Kruckenberg
Joel Perez
Brian McPhillips
Ben Waples

## Description of The Project:
An app that helps you find good coffee in a given location. Starbucks is always filtered out of the results.

With a page dedicated to educating the user on what coffee drinks are what.

## Problem Domain:
It is hard to find good coffee in new places, especially when you don't want to drink coffee from chain coffee shops. We also wanted a place to keep track of our favorite coffee shops with notes about what drinks are good there. 

## List of Libraries and packages we used:
React Router
Superagent
Express
Supertest

## Instructions for users to use:
link to netlify

## Clearly Defined Endpoints: 
### get('/api/favorites')
get all users favorites

### get(/api/favorites/:id)
get more info on a specific favorites

### get(/api/coffeeList)
receive a location and get a list of coffee shops in that given location

### post('/api/favorites')
add a users favorites coffee shops

### put('/api/favorites/:id')
edit a users notes on a specific coffee shops

### delete('/api/favorites/:id')
delete a coffee shop from a users list of favorites coffee shops

## Clearly Defined database schema
{
biz_id: 'YaUGYnfBjq1V-sI0BSokSQ-uniqueId',
title: 'Coffee Shop',
img: 'http://placekitten.com/200/300',
address: 'asdfsdf',
is_closed: false,
rating: 5.0,
notes: 'your notes go here',
yelp_url: 'https://www.yelp.com/biz/ovation-coffee-and-tea-portland?adjust_creative=1kvmc9F-97bT0bHKFMMEUQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1kvmc9F-97bT0bHKFMMEUQ',
lat: 'string',
lon: 'string',
city_lat: 'string',
city_lon: 'string'
}


