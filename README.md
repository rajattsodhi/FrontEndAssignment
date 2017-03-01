# FrontEndAssignment

This is a brief document that shows the process of the development on a website using HTML5, CSS and Javascript and the conssideration of relevant aspects/techniques. 

## Type of website

This is a personal profile website.

## Sketches

![alt sketch](/images/Sketch.jpg)

## Functionalities

### HTML5

HTML5 semantics have been used and tags such as video.

### CSS

The slider is completely developed using HTML and CSS only using also some tranitions. CSS3 animations are also used (Menu in small devices). Mobile first approach has been used.

### JavaScript

Javascript has been used for smooth scrolling. Additionally the weather widget also uses JavaScript to get JSON data from APIXU API.
Before OpenWeather API was used but it was not possible to send https requests and this led to mixed content error while trying to display the website on GitHub Pages.
Javascript has also been used to create animated progress bars that are displayed when the user clicks on the icons in the About section.
Additionally Hammer.js has been used to enable the users with touch screen devices to get the hoover effect.
Lastly the form submission displays a dialog using a polifyll.

## PARC principles

### Proximity

As each menu item is related to the other menu items they are grouped close together.

### Alignment

Each menu item is aligned near each other. As the weather is a separate element but still part of the header is positioned to the right allowing to distinguish the two elements (menu and widget).

### Repetition

Additionally as the menu an weather widget are part of the header they have the same font style and font colour. Same style has been used for the font (same style for headers) and same colours are used troughout the website.

### Contrast

This principle is applied to the sections by giving to one sectione the a grey colour as background and giving then to the following section a white background. This allows to easily distiguish the two sections and interpret them as different elements.

## Information Architecture

After looking the behaviour of real users it was clear that the section of education and experience was not correctly structured. The problem was related to the fact that each part of the section could not be easily distinguished. The solution to this problem a line has been added to separate each part of the section from the other.

![alt IA](/images/IA.jpg)

## Usability

After looking the behaviour of the users while trying to use the website and find the relevant information they needed, the majority of the users clicked on the logo expecting to see more content or expecting an event to occur. This is why the onclick event has been added to the logo so when the users click on the logo the website scrolls to the about section.

## Accessibility 

Accessibilty has been tested using wave.webaim online tool. There were problems related to the contrast between colours of the button used in the submission of the form.

### Incorrect contrast
![alt incorrect contrast](images/btn0.jpg)

### Correct contrast
![alt correct contrast](images/btn1.jpg)
