## Crud App 
![ezgif com-video-to-gif (5)](https://github.com/disconnectuss/Crud_React_App/assets/129686850/390b37ec-2a11-4657-ba2b-4915884148a5)

Create Read Update Delete: A react app allowing the users to add, edit and remove the books, including npm toastify notifications. Add your books to the store and enjoy reading!!

- create the html codes of header and form elements | do the styling with bootstrap
- - watch the changes on the input element | make an error message and if there is an error render the error message
- - watch the submit events of the add button

- get the input elementsand send them to the state.
- - after submitting the books turn them into a object including book names, adding dates, id and isRead info
- - get another state with that object
- - after updating the state remove the info from the input | update the state

- create a new component for the books added to the form | import it to app.js | create html of the component
- - send the book prop and render it
 
- removing the book: 
- - when the delete button is clicked use the function of sending id
- - get a new modal to confirm the delete including yes/no confirmation
- - if yes, filter the array and send the book to the state

- isRead checking
- - when clicked on isRead button get the book values with a fuction
- - change the value(true/false)
- - find the book will be changed
- - remove the changed book and add the updated version
- - update the state..

- edit module:
- -  when clicked on edit button get a function to edit the book
- - send it to the state and show edit module
- - in module get an input with values
- - update the state according to the input values 
- - get two buttons: 
leave : close the module
save : edit function updating the book name by removing the prev
- - btw update the date again..

- react-toastfy : npm i react-toastfy
- - import the css and js library to index.js
- - import <toastcontainer> and {toast} function
- - enjoy the colorful notifications!!
