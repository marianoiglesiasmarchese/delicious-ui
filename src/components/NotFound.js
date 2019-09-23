import React from 'react';

// stateless component =>
// arrow function to avoid a plain function like "function NotFound(){return()};"
// this arrow function have an implicit return so because of that "{return};" vas removed
const NotFound = (props) => (
     <div align="center" style={{ padding: "25px"}}>
         <h2>Page not found</h2>
     </div>
);

export default NotFound;