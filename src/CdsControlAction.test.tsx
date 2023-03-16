import {
  ClarityIcons,
  timesCircleIcon,
  timesCircleIconName,
} from '@cds/core/icon';
import { CdsButton } from '@cds/react/button';
import { CdsIcon } from '@cds/react/icon';
import { CdsControlAction } from '@cds/react/forms';
import { CdsSearch } from '@cds/react/search';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

ClarityIcons.addIcons(timesCircleIcon);

test('CdsControlAction keydown does not happen', async () => {
  const onClearKeyDown = jest.fn();
  const onClearClick = jest.fn();

  render(
    <>
      <CdsSearch>
        <label cds-layout="display:screen-reader-only">Search</label>
        <input placeholder="Search" type="search" />
        <CdsControlAction
          action="suffix"
          aria-label="Clear"
          onClick={onClearClick}
          onKeyDown={onClearKeyDown}
        >
          <CdsIcon cds-layout="align:right" shape={timesCircleIconName} />
        </CdsControlAction>
      </CdsSearch>
    </>,
  );

  expect(await screen.findByLabelText('Search')).toBeInTheDocument();

  // CdsControlAction click events are fine
  userEvent.click(await screen.findByRole('button', { name: 'Clear' }));
  await waitFor(() => expect(onClearClick).toHaveBeenCalled());

  // CdsControlAction keydown events never fire
  userEvent.type(screen.getByRole('button', { name: 'Clear' }), '{Space}');
  await waitFor(() => expect(onClearKeyDown).toHaveBeenCalled());
});


test('CdsButton keydown does not happen', async () => {
  const onCdsButtonKeyDown = jest.fn();

  render(
      <CdsButton onKeyDown={onCdsButtonKeyDown}>CdsButton</CdsButton>
  );
  
  // CdsButton keydown events never fire
  userEvent.type(
    await screen.findByRole('button', { name: 'CdsButton' }),
    '{Space}',
  );

  await waitFor(() => expect(onCdsButtonKeyDown).toHaveBeenCalled())
});


test('<button> keydown is fine', async () => {
  const onRegularButtonKeyDown = jest.fn();

  render(
    <button type="button" onKeyDown={onRegularButtonKeyDown}>
      Regular Button
    </button>
  );

  // keyboard events on a regular button are fine
  userEvent.type(
    screen.getByRole('button', { name: 'Regular Button' }),
    '{Space}',
  );
  
  expect(onRegularButtonKeyDown).toHaveBeenCalled();
});
