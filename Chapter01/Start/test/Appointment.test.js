import { Appointment } from '../src/Appointment';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

const render = (component, container) => {  
    act(() => {
        createRoot(container).render(component);
    });
}

describe('Appointment', () => {
    let container;
    let customer
    beforeEach(() => {
        container = document.createElement('div');
    });
    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };
        render(<Appointment customer={customer} />, container);
        expect(container.textContent).toContain('Ashley');
    });
    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' };
        render(<Appointment customer={customer} />, container);
        expect(container.textContent).toContain('Jordan');
    });
});