---
path: '/design-systems-and-monoliths'
date: '2018-02-28'
formattedDate: 'February 2019'
title: 'Design Systems And Monoliths'
author: 'Emma Wedekind'
description: 'It is the first KarlsruheJS of the year and we have some dope topics for you! '
---

# SLOT 1: Design Systems For Developers - Emma Wedekind

A design system is a set of reusable components and set of standards which allow teams to efficiently build consistent user interfaces. They're comprised of a design language, component library, and style guide.

In this talk, we'll delve into real-world design systems and break down the pieces you need to build a successful one. We'll examine the benefits and drawbacks of design systems as well as the reasons why you should build one in your company.

# SLOT 2: Breaking Up The Monolith by Sammy Braun

Maintaining a huge Single Page Application is hard. At Brandwatch we decided to modernize our app and as part of that move away from Backbone to React. We went through several iterations to figure out what the best solution would be to make use of React.

Initially we started with the idea of completely separate apps that are loaded into the main application. This caused a major maintenance overhead and wasn’t adopted within the company - after 1 year we had one app in production.

Our latest approach involves side-loading of a React build and executing it from within Backbone. But we aren’t done here - we want to further split the app to move in a direction of multiple smaller Single Page Applications that are running independent from each other.
