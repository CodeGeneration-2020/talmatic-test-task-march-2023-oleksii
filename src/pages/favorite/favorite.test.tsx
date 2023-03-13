import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePage from './favorite';

jest.mock('src/components/drawer/drawer', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-drawer" />,
}));

jest.mock('src/components/table/table', () => ({
  __esModule: true,
  default: (props: any) => (
    <table>
      <tbody>
        {props.data.map((row: any) => (
          <tr key={row.id} onClick={() => props.onRowClick(row)}>
            <td>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}));

jest.mock('src/features/local-storage', () => ({
  __esModule: true,
  default: () => ({
    state: [
      {name: 'Spell 1', index: '1', url: '/api/spells/1'},
      {name: 'Spell 2', index: '2', url: '/api/spells/2'},
    ],
    saveLocalStorage: jest.fn(),
  }),
}));

jest.mock('src/features/components/spell-description/spell-description-modal', () => ({
  __esModule: true,
  default: (props: any) => (
    <div>
      {props.isVisible && (
        <div data-testid="mock-spell-description-modal">
          <button type="button" onClick={props.onClose}>
            Close
          </button>
          <div>{props.selectedSpell.name}</div>
        </div>
      )}
    </div>
  ),
}));

describe('FavoritePage', () => {
  it('renders a table with the favorite spells data', () => {
    render(<FavoritePage />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(2);
    expect(rows[0]).toHaveTextContent('Spell 1');
    expect(rows[1]).toHaveTextContent('Spell 2');
  });

  it('opens the spell description modal when clicking on a row', () => {
    render(<FavoritePage />);
    const rows = screen.getAllByRole('row');
    userEvent.click(rows[0]);
    const modal = screen.getByTestId('mock-spell-description-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Spell 1');
  });

  it('closes the spell description modal when clicking the Close button', () => {
    render(<FavoritePage />);
    const rows = screen.getAllByRole('row');
    userEvent.click(rows[0]);
    const modal = screen.getByTestId('mock-spell-description-modal');
    const closeButton = screen.getByText('Close');
    userEvent.click(closeButton);
    expect(modal).not.toBeInTheDocument();
  });

  it('renders a drawer', () => {
    render(<FavoritePage />);
    const drawer = screen.getByTestId('mock-drawer');
    expect(drawer).toBeInTheDocument();
  });
});
