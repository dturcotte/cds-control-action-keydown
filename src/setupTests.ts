// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// `window` is not defined in the vanilla config (i.e. not a browser)
// `if (window)` triggers still triggers `ReferenceError: window is not defined`
if (typeof window !== 'undefined') {
  const mockObserverAPI = () =>
    jest.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

  window.ResizeObserver = mockObserverAPI();
  window.IntersectionObserver = mockObserverAPI();
}
