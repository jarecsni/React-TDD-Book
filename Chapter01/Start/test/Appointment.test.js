import { Appointment } from '../src/Appointment';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';



describe('Appointment', () => {
    let container;
    let customer
    const render = (component) => {  
        act(() => {
            createRoot(container).render(component);
        });
    }
    beforeEach(() => {
        container = document.createElement('div');
    });
    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toContain('Ashley');
    });
    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toContain('Jordan');
    });
});