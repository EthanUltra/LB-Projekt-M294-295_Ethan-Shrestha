/* eslint-disable jest/valid-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

/* Mocked Components */
jest.mock("./", () => () => <div>Mocked_Home</div>);
jest.mock("./components/Layout/Account/Account", () => () => <div>Mocked_Account</div>);
jest.mock("./components/Layout/Books/Book", () => () => <div>Mocked_Book</div>);
jest.mock("./components/Layout/Books/AddBook", () => () => <div>Mocked_AddBook</div>);
jest.mock("./components/Layout/Books/EditBook", () => () => <div>Mocked_EditBook</div>);
jest.mock("./components/Layout/Books/ViewBook", () => () => <div>Mocked_ViewBook</div>);
jest.mock("./components/Layout/Favourites/Favourites", () => () => <div>Mocked_Favourites</div>);
jest.mock("./components/Layout/Footer/Footer", () => () => <div>Mocked_Footer</div>);
jest.mock("./components/Layout/Forums/Forums", () => () => <div>Mocked_Forums</div>);
jest.mock("./components/Layout/Forums/AddForums", () => () => <div>Mocked_AddForums</div>);
jest.mock("./components/Layout/Forums/EditForums", () => () => <div>Mocked_EditForums</div>);
jest.mock("./components/Layout/Forums/ViewForums", () => () => <div>Mocked_ViewForums</div>);
jest.mock("./components/Layout/Navigation/Navbar", () => () => <div>Mocked_Navbar</div>);
jest.mock("./components/Layout/Searchbar/Searchbar", () => () => <div>Mocked_Searchbar</div>);
jest.mock("./components/Layout/Orders/Orders", () => () => <div>Mocked_Orders</div>);
jest.mock("./components/Layout/Account/AddAccount", () => () => <div>Mocked_AddAccount</div>);
jest.mock("./components/Layout/Account/EditAccount", () => () => <div>Mocked_EditAccount</div>);
jest.mock("./components/Layout/Account/ViewAccount", () => () => <div>Mocked_ViewAccount</div>);
jest.mock("./components/Layout/NotFound", () => () => <div>Mocked_NotFound</div>);

describe("Routing test for App.js", () => {
  test("Accounts route should render Account component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Account"]}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Account"))
    expect(screen.getByText("Mocked_Navbar"))
  });

  test("Books route should render Book component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Book"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Book"))
    expect(screen.getByText("Mocked_Navbar"))
  });

  test("Favourites route should render Favourite component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Favourites"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Favourites"))
    expect(screen.getByText("Mocked_Navbar"))
  });
  
  test("Forums route should render Forum component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Forums"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Forums"))
    expect(screen.getByText("Mocked_Navbar"))
  });

  test("Orders route should render Orders component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Orders"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Orders"))
    expect(screen.getByText("Mocked_Navbar"))
  });

  test("Searchbars route should render Searchbar component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/Searchbar"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_Searchbar"))
    expect(screen.getByText("Mocked_Navbar"))
  });

  test("Unknown path should trigger NotFound component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/NotFound"]}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("Mocked_NotFound"))
  });
  
});