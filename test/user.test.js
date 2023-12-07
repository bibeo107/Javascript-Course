import { describe, it, expect, beforeEach } from '@jest/globals';
import welcomeUser from '../src/User/user';

beforeEach(() => {
    // arrange
    document.body.innerHTML = `
        <input type="text" id="fullName">
        <div id="user"></div>
    `;
});
describe('welcomeUser', () => {
    it('when full name is provided, then element show Welcome full name', () => {
        // Arrange
        const fullName = 'John Doe';
        document.getElementById('fullName').value = fullName;

        const userElement = document.getElementById('user');

        // Act
        welcomeUser();

        // Assert
        expect(userElement.textContent).toEqual(`Welcome ${fullName}!`);
    });

    it('when full name is not provided, then element show "Please enter full name"', () => {
        // Arrange
        const fullName = '';
        document.getElementById('fullName').value = fullName;
        const userElement = document.getElementById('user');

        // Act
        welcomeUser();

        // Assert
        expect(userElement.textContent).toEqual('Please enter full name');
    });
});
