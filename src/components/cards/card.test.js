import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './card';

afterEach(cleanup);

test('card should render properly', () => {
    const card = JSON.parse('{"img":"src1", "location":"lctn1", "title": "desc1"}');
    const { getByAltText, container } = render(<Card card={card}></Card>);
    expect(container.querySelector('.desc')).toBeInTheDocument();
    expect(container.querySelector('.location')).toBeInTheDocument();
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('.desc').textContent).toBe('desc1');
    expect(container.querySelector('.location').textContent).toBe('lctn1');
    expect(getByAltText('desc1')).toBeInTheDocument();
    expect(container.querySelector('a img[src="src1"]')).toBeInTheDocument();
})
