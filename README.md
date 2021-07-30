![Logo](https://i.imgur.com/nBNPz8O.png)


# About Time2Gro

Time2Gro was created by Claudiu Manta, Natalie Pinnock and Ryan Brown to make growing vegetables easier for people. 

The website allows the user to either pick a vegetable from a long list of options or lets the user pick a vegetable to grow based on their experience level. 

The growing instructions are fetched from the Harvest Helper API so the user gets detailed instructions of how to grow their ideal vegetable. 

The website is built in React. 
 

## Time2Gro Presentation: 

https://vimeo.com/573357764/2196e92c27 
 

## Running the Project 

From the repo: 
* clone this project locally 
* cd into the project directory 
* run `npm install`
* run `npm start`


# Components

The main information for this APP can be found in the src folder. The below components can be found in the components folder

## App

This is the main component of the App. It has all the functions needed to: 
- Set Current Page
- Get the information from the API for the growing instructions
- Select growing difficulty level 
- Select type of vegetable 


## Pages

### HomePage

Home Page

This page includes: 
- Explanation about website, 
- Drop down box to select vegetable by name which takes you to the VegetablePage with the Growing Instructions on. 
- Button to select vegetable by difficulty level. The Select  button takes you to the QuestionPage to select your difficulty choice. 

(See Screenshot below)

### QuestionPage

Difficulty level Selection Page

User can select a vegetable to grow depending on its level of difficulty from Easy, Medium or Hard

### VegetableListPage

Vegetable Choice Page

After the user selects difficulty level, this page will give an option of vegetables to grow based on that level of difficulty

### VegetablePage

Growing Instructions Page

This is the page that has the growing instructions for the vegetable that the user has chosen. 

It also allows the user to return to the home page. 

(See Screenshot below)

## Reusuable Components

### Banner

Logo 

This is the component that includes the picture of the logo which is used at the top of pages. 

![Logo](https://i.imgur.com/nBNPz8O.png)

### SearchCard

Drop-down box 

This card can be found on the homepage, it  has a drop-down box with choices of vegetables on. 

### NoButtonCard

Text information in a card

This component is used when text needs to be shown to the user.

### ButtonCard

Button in a card 

This component is used when the user needs to click a button to advance to the next page. 

### Button

Buttons 

Home Button and Next page buttons can be found here

### Footer

Footer 

This is used on every page to inform user who made the website.

# Other Folders

## Img Folder
Images for the website are found her such as the logo and the "banner" which is the picture of vegetables that appears throughout the website. 

![Banner](https://i.imgur.com/qJetOVl.png
)

## Utils Folder
### Text.JS

All the Text for the website can be found here, which makes for easy editing. 

# CSS

The majority of CSS can be found in the App folded named App.CSS. 

There is also CSS in the footer component for the footer and index.css file for the font information.  

## Screenshots

### Home Page
![Home Page](https://i.imgur.com/ipYixU6.png)

### Growing Instructions
![Growing Instructions](https://i.imgur.com/sCkpeo9.png)

### API Information
![API Information](https://i.imgur.com/1AUQcZa.png)

# Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

API Information is fetched from [Harvest Helper](https://github.com/damwhit/harvest_helper)


## 🔗 Git Hub Links
* [Claudiu Manta](https://github.com/Claudyu04)
* [Natalie Pinnock](https://github.com/natpinnock)
* [Ryan Brown](https://github.com/RyanBrown870)

  Code Review and Documentation by 

* [Becki Floyd](https://github.com/nass84)

