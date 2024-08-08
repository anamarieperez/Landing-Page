# creating landing page using react.js
Learning React.js, I chose to adhere to a YouTube tutorial and use the insights I gained to make a sample landing page. . I first create an empty folder and open it on VS Studio code editor then setup initial react project by typing the below command in the terminal.

npx create-react-app ./

For initial loading, I open the React app using browser by typing the below command in the terminal.

npm start

Then I deleted some files included in the “src” folder:
reportWebVitals.js
setupTests.js
logo.svg
Apptest.js
index.css
In index.js , I removed some this lines:
Line5 import reportWebVitals from “./reportWebVitals”; 
Line3 import ‘index.css’;
Line 17 reportWebVitals();

In app.js, I removed import Logo from ‘./logo.svg’; and header tag
Then clearup app.css

Imported:
Paste the code from fonts.google.com in index.html to embed a specific fonts

Installed
Extension:
ES7+ React/Redux/React-Native snippets
Libraries :
react-icons
mui.com
Package for icons

Under src folder i created a folder Components and add js files.
Home.js, About.js, Contact.js,Navbar.js, Footer.js,Testimonial.js, Work.js



