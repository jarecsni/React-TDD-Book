import { Appointment, AppointmentsDayView } from '../src/Appointment';
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

describe('AppointmentsDayView', () => {
    let container;
    const render = (component) => {
        act(() => {
            createRoot(container).render(component);
        });
    }
    beforeEach(() => {
        container = document.createElement('div');
    });
    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });
    it('renders multiple appointments in an ol element', () => {
        const today = new Date();
        const appointments = [
            { startsAt: today.setHours(12, 0), customer: { firstName: 'Ashley' } },
            { startsAt: today.setHours(13, 0), customer: { firstName: 'Jordan' } }
        ];
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    });
});


