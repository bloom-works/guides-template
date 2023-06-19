# Bloom Works Guides Starter Template

## Run Instructions

This requires Docker to be installed and running

1. Build the container: `docker build -t bloom-works/guides-template .`
1. Start the server: `docker run -it --rm -p "8080:8080" bloom-works/guides-template`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

## Developer Setup

### Docker Version

This sets up the site with a consistent runtime environment, and requires Docker to be installed and running.

1. Navigate to the base of this repo
1. Build the container: `docker build -t bloom-works/guides-template .`
1. Start a terminal inside the container: `docker run -it --rm -p "8080:8080" -v "$PWD:/app" bloom-works/guides-template bash`
1. Install dependencies (first time only or when `package.json` changes): `npm install`
1. Start server: `npm run serve`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

From here, changes to files locally will rebuild the site.

### Local Version

This uses whatever NPM and Node version you have installed on your machine, and might use fewer system resources than the Docker install (i.e. better for lower powered machines). If something is not working using this setup, use the Docker version to see if the problem exists there.

1. Navigate to the base of this repo
1. Install dependencies (first time only or when `package.json` changes): `npm install`
1. Start server: `npm run serve`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

From here, changes to files will rebuild the site.

### Design

![eleventy template themes text11ty](desktopshoot.png)

Desktop version

![eleventy template themes text11ty](mobileshoot.png)

Mobile Version

![eleventy template themes text11ty](lighthouse11ty.png)

Lighthouse test peform

--------------------------------------------------------------------------------------------------------------------


Documentation ⌨️ : [https://www.hockeycomputindo.com/2022/04/membuat-website-dengan-eleventy.html](https://www.hockeycomputindo.com/2022/04/membuat-website-dengan-eleventy.html)

Test drive Demo 🖥 : [https://text11ty.pages.dev/](https://text11ty.pages.dev/)

Demo with image 📷 : [visit demo → ](https://eleventy.web.app/)

Video 📽 : [https://www.youtube.com/watch?v=utuYZfoAFek](https://www.youtube.com/watch?v=utuYZfoAFek)
