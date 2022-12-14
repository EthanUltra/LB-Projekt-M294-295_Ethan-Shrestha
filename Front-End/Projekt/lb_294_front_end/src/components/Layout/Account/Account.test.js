/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Account from './Account';

/* Mocked Components */
jest.mock("./Account", () => () => <div>Mocked_Account</div>);
jest.mock("./AddAccount", () => () => <div>Mocked_AddAccount</div>);
jest.mock("./EditAccount", () => () => <div>Mocked_EditAccount</div>);
jest.mock("./ViewAccount", () => () => <div>Mocked_ViewAccount</div>);

describe("Routing tests for Account.js", () => {
    test("AddAccounts route should render AddAccount component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/AddAccount"]}>
                <Account />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Account"))
    });
    test("EditAccounts route should render EditAccount component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/EditAccount"]}>
                <Account />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Account"))
    });
    test("ViewAccounts route should render ViewAccount component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/ViewAccount"]}>
                <Account />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Account"))
    });
});