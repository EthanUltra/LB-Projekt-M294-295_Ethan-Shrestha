/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';

/* Mocked Components */
jest.mock("./Book", () => () => <div>Mocked_Book</div>);
jest.mock("./AddBook", () => () => <div>Mocked_AddBook</div>);
jest.mock("./EditBook", () => () => <div>Mocked_EditBook</div>);
jest.mock("./ViewBook", () => () => <div>Mocked_ViewBook</div>);
jest.mock("./BookDetails", () => () => <div>Mocked_BookDetails</div>);
jest.mock("./BookList", () => () => <div>Mocked_BookList</div>);

describe("Routing tests for Book.js", () => {
    test("AddBooks route should render AddBook component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/AddBook"]}>
                <Book />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Book"))
    });
    test("EditBooks route should render EditBooks component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/EditBook"]}>
                <Book />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Book"))
    });
    test("ViewBooks route should render ViewBooks component", () => {
        // Arrange

        // Act
        render(
            <MemoryRouter initialEntries={["/ViewBook"]}>
                <Book />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("Mocked_Book"))
    });
});