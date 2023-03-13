import {render, screen, fireEvent} from '@testing-library/react';
import CustomDrawer from './drawer';

describe('CustomDrawer', () => {
  const onClose = jest.fn();
  const onOpen = jest.fn();
  const children = <div>test</div>;
  const defaultProps = {
    isOpen: true,
    onClose,
    onOpen,
    children,
  };

  it('should render the icon and children', () => {
    render(<CustomDrawer {...defaultProps} />);
    const icon = screen.getByRole('button', {name: /menuopenoutlinedicon/i});
    const child = screen.getByText('test');
    expect(icon).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  it('should call onClose when the close icon is clicked', () => {
    render(<CustomDrawer {...defaultProps} />);
    const closeIcon = screen.getAllByRole('button', {name: /menuopenoutlinedicon/i})[1];
    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onOpen when the menu icon is clicked', () => {
    render(<CustomDrawer {...defaultProps} />);
    const menuIcon = screen.getByRole('button', {name: /menuopenoutlinedicon/i});
    fireEvent.click(menuIcon);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
});
