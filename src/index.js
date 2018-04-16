import React from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'es6-eventemitter';
import AccordionElement from './element';

/*
* Components are like JavaScript functions.
* @name ReactAccordion
* @description Main Component, Takes and maniplulates User inputes and renders children accordion
*/
class ReactAccordion extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			indexNo: this.props.default ? 0:-1
		};
		this.events = new EventEmitter();
    }
	
	componentDidMount() {
		let indexNo = this.state.indexNo;
		
		this.events.on('showOrHide', (value) => { 
			indexNo = value.index;
			if(Math.abs(indexNo) === Math.abs(value.index) && value.show) {
				indexNo = -1;
			}
			this.setState({ indexNo: indexNo })
		});
	}

    render() {
		const {elements} = this.props;
		const indexNo = this.state.indexNo;
		
		const childrens = elements.map( (obj, index) => {
			let show = false;
			if(Math.abs(indexNo) === index) {
				if(indexNo < 0) {
					show = false;
				} else {
					show = true;
				}			
			}
       		return <AccordionElement key={index} title={obj.title} content={obj.content} event={this.events} show={show} index={index}/>
    	});
		
        return (
            <div className='accordion-container'>
                {childrens.length ?
					childrens : ''
				}
            </div>
        )
    }
}

/*
* Validators that can be used to make sure the data you receive is valid. 
*/
ReactAccordion.propTypes = {
  // An array of a PROPS type
  elements: PropTypes.arrayOf( (propValue, key, componentName, location, propFullName) => {
	  let obj = propValue[0];
	  let error = false;
	  
	  if( typeof obj !== 'object' ) {
		  error = true;
	  }
	  
	  if( obj.title === 'undefined' || obj.title === 'content' ) {
		  error = true;
	  }
	  
	  if( error ) {
		  return new Error(
			'Invalid prop supplied to' + componentName + '. Validation failed.'
		  );
	  }
	  
  }).isRequired,
  default: PropTypes.bool
};

/*
*Defult Prop set to true, used to initially render first element open
*If false provided All elements will be closed initially
*/
ReactAccordion.defaultProps = {
  default: true
};

//Provides export access for the component
export default ReactAccordion;
