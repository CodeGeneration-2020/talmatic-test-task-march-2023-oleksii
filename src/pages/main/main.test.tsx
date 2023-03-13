import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import MainEntry from './main';

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

jest.mock('src/features/useSpells', () => ({
  __esModule: true,
  default: () => ({data: {results: [{index: '1', name: 'Spell 1', url: '/api/spells/1'}]}}),
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

describe('MainEntry', () => {
  it('renders a table with the spells data', () => {
    render(<MainEntry />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(1);
    expect(rows[0]).toHaveTextContent('Spell 1');
  });

  it('opens the spell description modal when clicking on a row', () => {
    render(<MainEntry />);
    const rows = screen.getAllByRole('row');
    act(() => {
      fireEvent.click(rows[0]);
    });
    const modal = screen.getByTestId('mock-spell-description-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Spell 1');
  });

  it('closes the spell description modal when clicking the Close button', () => {
    render(<MainEntry />);
    const rows = screen.getAllByRole('row');
    act(() => {
      fireEvent.click(rows[0]);
    });
    const modal = screen.getByTestId('mock-spell-description-modal');
    const closeButton = screen.getByText('Close');
    act(() => {
      fireEvent.click(closeButton);
    });
    expect(modal).not.toBeInTheDocument();
  });

  it('renders a drawer', () => {
    render(<MainEntry />);
    const drawer = screen.getByTestId('mock-drawer');
    expect(drawer).toBeInTheDocument();
  });
});
