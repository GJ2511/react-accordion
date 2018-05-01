# React Accordion Box

Accordion component for React.

## Install module
    > npm i react-accordion

## Usage
```js
import React from 'react';
import ReactAccordion from 'react-accordion';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const elements = [
            {title:'test 1', content:'<h1>Heading 1</h1>'},
            {title:'test 2', content:'gaurav 2'}, 
            {title:'test 3', content:'gaurav'}
        ];
        return (
            <div>
                <ReactAccordion elements={elements} />
            </div>
        )
    }
}
```

## Options/Props
The `ReactAccordion` component accepts the following props:

```js
{
  elements: [],//Required
  default: false //Optional
}
```

* **Elements**
    * Required Prop
    * Each entry refers to children of the accordion
    * Array of Objects with following keys:- 
        * _title_ :  Text for the title of the child
        * _content_ : Content string of the child

* **default**
    * Optional Prop
    * Default to false
    * If true then first child is expanded by default
