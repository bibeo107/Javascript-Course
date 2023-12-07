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
    it('should set userElement textContent to "Welcome {fullName}!" when fullName is provided', () => {
        // Arrange
        const fullName = 'John Doe';
        document.getElementById('fullName').value = fullName;

        const userElement = document.getElementById('user');

        // Act
        welcomeUser();

        // Assert
        expect(userElement.textContent).toEqual(`Welcome ${fullName}!`);
    });

    it('should set userElement textContent to "Please enter full name" when fullName is not provided', () => {
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
