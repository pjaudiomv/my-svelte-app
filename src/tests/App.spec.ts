import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import App from '../App.svelte';

describe('App.svelte', () => {
    test('renders the main content', () => {
        const { getByAltText, getByText, getByRole } = render(App);
        const viteLogo = getByAltText('Vite Logo');
        expect(viteLogo).toBeTruthy();
    });
});
