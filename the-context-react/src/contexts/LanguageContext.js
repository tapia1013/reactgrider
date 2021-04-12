// THE PURPOSE OF THIS FILE IS TO CREATE A CONTEXT OBJECT AND EXPORT IT
// WE'RE PUTTING IT ON A SEPERATE FILE CAUSE WE CAN IMPORT CONTEXT OBJECT INTO ONLY COMPONENT FILE THAT WE CARE ABOUT IN OUR APP
// WE ONLY WANT THIS CONTEXT ON THE APP AND BUTTON/FIELD COMPONENTS

import React from 'react';



// we put a default value in ()... we can set antything {}, [], true, '', number, as a default value
export default React.createContext('english');