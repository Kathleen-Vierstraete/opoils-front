import { render, screen } from '@testing-library/react';
import SearchUser from '../src/components/SearchPages/usersearch';
import '../src/components/SearchPages/styles.scss';


describe('SearchUser', () => {
  const members = [
    { id: 1, name: 'John', postal_code: 'Jura' },
    { id: 2, name: 'Jane', postal_code: 'Loiret' },
    { id: 3, name: 'Bob', postal_code: 'Loiret' },
  ];

  it('should filter members by searchInput and selectedDepartement', () => {
    const { container } = render(<SearchUser members={members} />);
    const searchInput = container.querySelector('input[type="text"]');
    const selectDepartement = container.querySelector('.location select');
    searchInput.value = 'John';
    selectDepartement.value = 'Jura';
    fireEvent.change(searchInput);
    fireEvent.change(selectDepartement);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.queryByText('Jane')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
    searchInput.value = '';
    selectDepartement.value = 'Loiret';
    fireEvent.change(searchInput);
    fireEvent.change(selectDepartement);
    expect(screen.queryByText('John')).not.toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });
});
