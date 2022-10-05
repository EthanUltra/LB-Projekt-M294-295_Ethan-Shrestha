import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* Mocked Components */
jest.mock("./", () => () => <div>Mocked_Home</div>);
jest.mock("./Account", () => () => <div>Mocked_Account</div>);
jest.mock("./BookDetails", () => () => <div>Mocked_BookDetails</div>);
jest.mock("./BookList", () => () => <div>Mocked_BookList</div>);
jest.mock("./Favourites", () => () => <div>Mocked_Favourites</div>);
jest.mock("./Footer", () => () => <div>Mocked_Footer</div>);
jest.mock("./Forums", () => () => <div>Mocked_Forums</div>);
jest.mock("./Genres", () => () => <div>Mocked_Genres</div>);
jest.mock("./Language", () => () => <div>Mocked_Language</div>);
jest.mock("./Navbar", () => () => <div>Mocked_Navbar</div>);
jest.mock("./Searchbar", () => () => <div>Mocked_Searchbar</div>);
jest.mock("./Rating", () => () => <div>Mocked_Rating</div>);
jest.mock("./Orders", () => () => <div>Mocked_Orders</div>);

describe("Routing test for App.js", () => {
  test("Default route should render Home component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter >
    );

    // Assert 
  expect(screen.getByText("Mocked_Home"))
  expect(screen.getByText("Mocked_GlobalNavigation"))
  });
}