import React from 'react';
import PropTypes from 'prop-types';
import {FaAngleDoubleUp, FaAngleDoubleDown} from 'react-icons/lib/fa';

/*
Components are like JavaScript functions.
@name AccordionElement
@description Takes Props from Parent renders single accordion component
*/
class AccordionElement extends React.Component {
    constructor(props) {
        super(props);
		this.showOrHide = this.showOrHide.bind(this);
    }
	
	/** @function
 	* @name showOrHide 
	* @description Emits event with some values
	*/
	showOrHide() {
		const {event, index, show} = this.props;
		event.emit('showOrHide', {index: index, show: show});		
	}
	
	/** @function
 	* @name createMarkup 
	* @description dangerouslySetInnerHTML
	*/
	createMarkup( html ) {
	  return {__html: html};
	}
	
	render() {
		const {title, content, show} = this.props;

		return (
            <div className='accordion-children'>
				<div className='accordion-children-title clearfix ' onClick={this.showOrHide}>
					<h2>{title}</h2>
					<span>{show ? <FaAngleDoubleDown/ > : <FaAngleDoubleUp />}</span>
				</div>
				<div className={ show ? 'accordion-children-content show': 'accordion-children-content hide'} >
					<p dangerouslySetInnerHTML={this.createMarkup(content)}></p>
				</div>
			</div>
        )
    }
}

/*
* Validators that can be used to make sure the data you receive is valid. 
*/
AccordionElement.propTypes = {
  // An array of a PROPS type
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

//Provides export access for the component
export default AccordionElement;