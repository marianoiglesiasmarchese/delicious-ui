import React from 'react';

// stateless component =>
// arrow function to avoid a plain function like "function NotFound(){return()};"
// this arrow function have an implicit return so because of that "{return};" vas removed
const NotFound = (props) => (
     <div>
         <h2>Not found page</h2>
     </div>
);

export default NotFound;