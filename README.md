# Phantom boot

## But first, what is a Phantom site?
I describe a phantom site as a sliced and styles version of a full site, that one can click through and navigate. The catch is that is not rendering any real data. It is simply mock HTML.

### Motivation
In my experience iterating through the design and development (psypher.co.za) process for client websites, I often find that the design phase quickly becomes harder to deal with when trying to draw the 
full site out in an editor like Photoshop. I find that a quick initial draft in Photoshop is enough, but it is then easier to actually start coding the HTML and CSS and refine the design
further from there. 

### Benefits
- Gives everyone involved a clickable "live" version of the design very early in the process.
- Much easier to collaborate on than a PDS file or whatever design formal used.
- One ends up with the HTML and CSS already sliced and ready to be converted to a Wordpress theme or whatever format planned.

### Ultimately - I find it very efficient to "design" in HTML and CSS, rather than Photoshop
Yes, this might be that I am just not that skilled in Photoshop yet, but when it comes to running a business and trying to keep momentum on multiple projects, this approach feels more
natural.

## So what is this phantom-boot, anyway?
This repo is basically a starting project with a few basics set up and ready to go. This is motivated by https://github.com/coryhouse/react-slingshot, but is in no way near the complexity
or maturity. This repo is also more catered towards a phantom site that will eventually become a custom Wordpress theme, thus contains some basic PHP includes handling.

## What's included?
- Grunt setup (Yes, chill, I'm also a webpack fan, but this specific case felt more natural with a simple grunt flow)
- SASS compilation
- Connect + PHP webserver
- Livereload

## Installation

1. Install NodeJS
    - Windows
        - https://nodejs.org/en/ - Download and install latest, currently (v6.2.1)
    - Other OS
        - Install NVM globally - https://github.com/creationix/nvm
        - Run "nvm install" - This project already contains a .nvmrc file specifying the required node version
        - Run "nvm use"
2. Run "npm install"

## Development
1. Run "npm run dev"
2. Browse to http://localhost:3000/

## Production
1. Run "npm run build"

This deployment process is still under construction, but will soon contain all optimizations and whatnot expected from any modern website.

