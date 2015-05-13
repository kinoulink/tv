# Kinoulink public site

[ ![Codeship Status for kinoulink/site](https://codeship.com/projects/26214910-c8cc-0132-6f8a-1e9b8d507ee8/status?branch=master)](https://codeship.com/projects/75122)

![Kinoulink web site screenshot]
(http://j.mp/1GOapGA)

## Setup

### Requirements

- node
- grunt CLI
- bower
- compass (````gem install compass````)

````shell
git clone git@github.com:kinoulink/site.git
cd site
npm install
cd app
bower install
cd ..
grunt server
````

## Continous Delivery

This project is linked to CodeShip. Push to master will release it.

````shell
git push origin master
````
