import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import Toolbar from '../Toolbar';
import TestWrapper from '../../../utils/TestWrapper';

describe('Toolbar component', () => {
  const mockedProps = {
    nameQuery: '',
    setNameQuery: () => {},
    currentPage: 1,
    totalPages: 1,
    goToNextPage: () => {},
    goToPreviousPage: () => {},
    canGoBack: false,
    canGoForward: false,
    isLoadingData: false,
    resetPageCounter: () => {},
  };

  it('should be defined', () => {
    expect(Toolbar).toBeDefined();
  });

  it('should render the elements correctly', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Toolbar {...mockedProps} />
      </TestWrapper>,
    );

    const searchInput = getByTestId('search-input');
    const paginationBackButton = getByTestId('navigation-back-button');
    const paginationNextButton = getByTestId('navigation-next-button');

    expect(searchInput).toBeVisible();
    expect(paginationBackButton).toBeVisible();
    expect(paginationNextButton).toBeVisible();
  });

  it('should not trigger the pagination actions based on props', () => {
    const props = {
      ...mockedProps,
      canGoBack: false,
      canGoForward: false,
      goToNextPage: vi.fn(),
      goToPreviousPage: vi.fn(),
    };
    const { getByTestId } = render(
      <TestWrapper>
        <Toolbar {...props} />
      </TestWrapper>,
    );

    const paginationBackButton = getByTestId('navigation-back-button');
    const paginationNextButton = getByTestId('navigation-next-button');

    fireEvent.click(paginationBackButton);
    fireEvent.click(paginationNextButton);

    expect(props.goToPreviousPage).not.toBeCalled();
    expect(props.goToNextPage).not.toBeCalled();
  });

  it('should trigger the pagination actions based on props', () => {
    const props = {
      ...mockedProps,
      canGoBack: true,
      canGoForward: true,
      goToNextPage: vi.fn(),
      goToPreviousPage: vi.fn(),
    };
    const { getByTestId } = render(
      <TestWrapper>
        <Toolbar {...props} />
      </TestWrapper>,
    );

    const paginationBackButton = getByTestId('navigation-back-button');
    const paginationNextButton = getByTestId('navigation-next-button');

    fireEvent.click(paginationBackButton);
    fireEvent.click(paginationNextButton);

    expect(props.goToPreviousPage).toBeCalledTimes(1);
    expect(props.goToNextPage).toBeCalledTimes(1);
  });
});
