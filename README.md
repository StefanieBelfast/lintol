# Lintol
it is a test program which is running with Visual Studio Code and cypress
## need to install:
Github ->to push up

Visual Studio Code

**components:** nodejs, npm, (sudo npm install -g) @vue/cli

## Websites with informations:
[official cypress website](https://www.cypress.io/)

[example for tests](https://medium.com/geoman-blog/testing-maps-e2e-with-cypress-ba9e5d903b2b)

**answer/question for issue**

[stackoverflow](https://stackoverflow.com/)

[Github](https://github.com/)


**look in**

**/leaflet.pm-develop package.json** ->to see the dependencies & commands

**/leaflet.pm-develop/cypress/support index.js** ->is a "before each" loop
>meaning is this loop is running before each testing sequence (you can change it for your own testing;for example, i did everywhere a commanding except the Website, see Github index.js)
## deleting the test files from the example
**/leaflet.pm-develop/cypress/integration testfile.js**

**create a new test file**
## run test
**npm run cypress** ->test runs on cypress(gui)

**npm run test** ->test runs on terminal

**in npm-debug.log -> you will find the errors**

**/leaflet.pm-develop/cypress/screenshots ->you will find screenshots from error**

# TEST
I'm testing features on this website  ***

I did the test site by site, you have at the left hand side 5 buttons(my 5 tests) and an extra test for the Login Page
## login.js
**existing items**
 -testing items/words which should be there

**LINTOL login**
 -tests the login

## Data Profiles
**login**
 -login in website
        
**check items**
 -tests if certain words/logos exists

**count items**
counting items

**Add new Data Profile 1/2/3/4/5/6**
tests different ways to add a new Data Profile

## Resources
**check items**
tests if certain words/logos exists
       
**count items**
counting items
       
**click items/Add From URL**
tests add button
      
**click items/upload button**
tests upload button
    
**click items/checkbox**
tests if it possible to click on checkbox & if it is counting
       
**click Item Choose Funktion**
tests dropdown menus

## DataProcessors
**check items**
tests if certain words/logos exists

**count items**
counts items

## ValidationReports
**check items/dropdown**
tests if certain words/logos exists & tests the dropdown
 
**count items**
counts items


## Users
**check items**
tests if certain words/logos exists
        
       
