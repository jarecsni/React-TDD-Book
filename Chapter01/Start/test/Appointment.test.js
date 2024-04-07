import { Appointment } from '../src/Appointment';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const container = document.createElement('div');
        const root = createRoot(container);
        const customer = { firstName: 'Ashley' };
        act(() => {
            root.render(<Appointment customer={customer} />);
        });
        expect(container.textContent).toContain('Ashley');
    });
    it('renders another customer first name', () => {
        const container = document.createElement('div');
        const root = createRoot(container);
        const customer = { firstName: 'Jordan' };
        act(() => {
            root.render(<Appointment customer={customer} />);
        });
        expect(container.textContent).toContain('Jordan');
    });
});