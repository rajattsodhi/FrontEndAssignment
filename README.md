# FrontEndAssignment

This is a brief document that shows the process of the development on a website using HTML5, CSS and Javascript and the conssideration of relevant aspects/techniques. 

## Type of website

This is a personal profile website.

## Sketches

![alt sketch](/images/Sketch.jpg)

## Functionalities

### HTML5

HTML5 semantics have been used and tags such as video,header,nav,main,section,article and footer.

Here is a picture of the validation of HTML.
![alt sketch](/images/validation.jpg)

As it possible to notice there is a warning about the header eleemnt not used in article.This is because article is a container for the slides but can be seen as an article with the controls button.

### CSS

The slider is completely developed using HTML and CSS only using also some transitions. CSS3 animations are also used (Menu in small devices). Mobile first approach has been used.
FlexBox has been used in the Contact section to solve the problem of same heigh of two floated elemnts (get the columns of same height). 
```css
  #contact .row{
    display: flex;
  }
```


### JavaScript

Javascript has been used for smooth scrolling. Additionally the weather widget also uses JavaScript to get JSON data from APIXU API.
Before OpenWeather API was used but it was not possible to send https requests and this led to mixed content error while trying to display the website on GitHub Pages.
Javascript has also been used to create animated progress bars that are displayed when the user clicks on the icons in the About section.
![alt sketch](/images/bar.jpg)
Additionally Hammer.js has been used to enable the users with touch screen devices to get the hoover effect.
Lastly the form submission displays a dialog using a polifyll.
![alt sketch](/images/dialog.jpg)

## PARC principles

### Proximity

As each menu item is related to the other menu items they are grouped close together. Further visual guidence is given with the current house style of the website, the white and gray background switching allows noticable differences between sections. 

### Alignment

Each menu item is aligned near each other. The weather widget is a separate element but still part of the header, it is positioned to the right allowing to distinguish the two elements (menu and widget). Within the about section of the website, all icons and their meter bars are perfectly alligned to give a professional feel. In the portfolio section all the images are of the same size in order to allow correct alignment.

### Repetition

Additionally as the menu an weather widget are part of the header they have the same font style and font colour. Same style has been used for the font (same style for headers) and same colours are used troughout the website.

### Contrast

This principle is applied to the sections by giving to one sectione the a grey colour as background and giving then to the following section a white background. This allows to easily distiguish the two sections and interpret them as different elements.

## Information Architecture

After looking the behaviour of real users it was clear that the section of education and experience were not correctly structured. The problem was related to the fact that each part of the section could not be easily distinguished. The solve this problem a line has been added to separate each part of the section from the other.

![alt IA](/images/IA.jpg)

## Usability

After looking the behaviour of the users while trying to use the website and find the relevant information they needed, the majority of the users clicked on the logo expecting to see more content or expecting an event to occur. This is why the onclick event has been added to the logo so when the users click on the logo the website scrolls to the about section.

## Accessibility 

Accessibilty has been tested using wave.webaim online tool. There were problems related to the contrast between colours of the button used in the submission of the form. Additionally in the form the for attribute has been added in order to make the website accessible from screen readers. All images have an alt attribute to explain what the image shows.

```html
<label for="name">Name:</label>
<input type="text" name="name" id="name" placeholder="Full name" required />
```

### Incorrect contrast
![alt incorrect contrast](images/btn0.jpg)

### Correct contrast
![alt correct contrast](images/btn1.jpg)

## Responsiveness
![alt responsiveness](images/responsive.jpg)
![alt responsiveness2](images/responsive2.jpg)
