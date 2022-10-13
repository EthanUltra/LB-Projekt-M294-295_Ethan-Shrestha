/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Forums from './Forums';

/* Mocked Components */
jest.mock("./Forums", () => () => <div>Mocked_Forums</div>);
jest.mock("./AddForums", () => () => <div>Mocked_AddForums</div>);
jest.mock("./EditForums", () => () => <div>Mocked_EditForums</div>);
jest.mock("./ViewForums", () => () => <div>Mocked_ViewForums</div>);

describe("Routing tests for Forums.js", () => {
    test("AddForums route should render AddForums component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/AddForums"]}>
                <Forums />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Forums"))
    });
    test("EditForums route should render EditForumss component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/EditForums"]}>
                <Forums />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Forums"))
    });
    test("ViewForums route should render ViewForumss component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/ViewForums"]}>
                <Forums />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Forums"))
    });
});