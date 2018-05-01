import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactAccordion from 'index';


const props = [{title:'test 1', content:'<h1>Heading 1</h1>'},{title:'test 2', content:'gaurav 2'}, {title:'test 3', content:'gaurav'}];

describe('<ReactAccordion /> renders without crashing', () => {
	
	it('renders correctly', () => {
		const rendered = renderer.create(
			<ReactAccordion elements={props} />
		);
		expect(rendered.toJSON()).toMatchSnapshot();
	});
	
	
});
