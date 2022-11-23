import { describe, it, expect, vi, Mock } from 'vitest';
import { render } from '@testing-library/react';

import Home from '../Home';
import TestWrapper from '../../../utils/TestWrapper';
import useCharacters from '../../../hooks/useCharacters';

const mockedUseCharacters = useCharacters as Mock<any>;
vi.mock('../../../hooks/useCharacters');

describe('Toolbar component', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should render the elements on screen', () => {
    mockedUseCharacters.mockImplementation(() => ({
      data: {
        count: 10,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
      isFetching: false,
      refetch: vi.fn(),
      error: null,
    }));

    const { getByTestId } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );

    const header = getByTestId('app-header');
    const toolbar = getByTestId('app-toolbar');
    const table = getByTestId('character-table');

    expect(header).toBeVisible();
    expect(toolbar).toBeVisible();
    expect(table).toBeVisible();
  });

  it('should render elements on the table', () => {
    mockedUseCharacters.mockImplementation(() => ({
      data: {
        count: 10,
        next: null,
        previous: null,
        results: [
          {
            url: '',
            name: 'Luke Skywalker',
            gender: 'male',
            birth_year: '19BBY',
            eye_color: 'blue',
            hair_color: 'blond',
          },
        ],
      },
      isLoading: false,
      isFetching: false,
      refetch: vi.fn(),
      error: null,
    }));

    const { getByText, container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );

    const tableRows = container.querySelectorAll('tbody tr');
    const characterName = getByText('Luke Skywalker');
    const characterGender = getByText('male');
    const characterBirthYear = getByText('19BBY');
    const characterEyeColor = getByText('blue');
    const characterHairColor = getByText('blond');

    expect(tableRows).toHaveLength(1);
    expect(characterName).toBeVisible();
    expect(characterGender).toBeVisible();
    expect(characterBirthYear).toBeVisible();
    expect(characterEyeColor).toBeVisible();
    expect(characterHairColor).toBeVisible();
  });
});
