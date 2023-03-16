# Example for vmware/clarity issue <TBD>

Try it out with `yarn test CdsControlAction.test.tsx`

This repo was created with `npx create-react-app cds-control-action-keydown --template typescript`
Additional setup is the minimum necessary to test a @cds/react component.

[CdsControlAction.test.tsx](https://github.com/dturcotte/cds-control-action-keydown/blob/main/src/CdsControlAction.test.tsx) shows the issue when expecting keydown events on CdsControlAction and CdsButton compared to native <button>

Resulting test output:

```
 FAIL  src/CdsControlAction.test.tsx
  ✕ CdsControlAction keydown does not happen (1172 ms)
  ✕ CdsButton keydown does not happen (1024 ms)
  ✓ <button> keydown is fine (28 ms)

  ● CdsControlAction keydown does not happen

    TypeError: o.observe is not a function

      at e (node_modules/src/internal/utils/responsive.ts:27:14)
      at HTMLElement.setupPositioningListeners (node_modules/src/forms/control/control.element.ts:236:29)
      at HTMLElement.apply (node_modules/src/forms/control/control.element.ts:196:14)
      at HTMLElement.apply (node_modules/src/internal/decorators/query-slot.ts:44:36)
      at HTMLElement.apply (node_modules/src/internal/decorators/query-slot.ts:44:36)
      at HTMLElement.call (node_modules/src/internal/decorators/query-slot.ts:44:36)
      at HTMLElement.call (node_modules/src/internal/decorators/query-slot.ts:76:36)
      at HTMLElement.firstUpdated (node_modules/src/internal/decorators/query-slot.ts:76:36)
      at HTMLElement._$AE (node_modules/@lit/reactive-element/src/reactive-element.ts:1378:12)
      at HTMLElement.performUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1345:12)
      at HTMLElement.scheduleUpdate (node_modules/@lit/reactive-element/src/reactive-element.ts:1263:17)
      at HTMLElement._$Ej (node_modules/@lit/reactive-element/src/reactive-element.ts:1235:25)
      at s.hostConnected (node_modules/src/internal/controllers/responsive.controller.ts:20:5)

  ● CdsControlAction keydown does not happen

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

    Ignored nodes: comments, script, style
    <html>
      <head />
      <body
        cds-supports="js"
        cds-version="6.3.1"
      >
        <div>
          <cds-search
            cds-control=""
            control-width="stretch"
            responsive=""
            status="neutral"
          >
            <label
              cds-layout="display:screen-reader-only"
              for="_kdc4v83d9"
              slot="label"
            >
              Search
            </label>
            <input
              id="_kdc4v83d9"
              placeholder="Search"
              slot="input"
              type="search"
            />
            <cds-control-action
              action="suffix"
              aria-disabled="false"
              aria-label="Clear"
              cds-button-action=""
              role="button"
              slot="suffix"
              tabindex="0"
            >
              <cds-icon
                cds-layout="align:right"
                shape="times-circle"
              />
            </cds-control-action>
          </cds-search>
        </div>
      </body>
    </html>

      42 |   // CdsControlAction keydown events never fire
      43 |   userEvent.type(screen.getByRole('button', { name: 'Clear' }), '{Space}');
    > 44 |   await waitFor(() => expect(onClearKeyDown).toHaveBeenCalled());
         |                                              ^
      45 | });
      46 |
      47 |

      at src/CdsControlAction.test.tsx:44:46
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:127:77)
      at checkRealTimersCallback (node_modules/@testing-library/dom/dist/wait-for.js:121:16)
      at Timeout.task [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)

  ● CdsButton keydown does not happen

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

    Ignored nodes: comments, script, style
    <html>
      <head />
      <body
        cds-supports="js"
        cds-version="6.3.1"
      >
        <div>
          <cds-button
            action="solid"
            aria-disabled="false"
            loading-state="default"
            role="button"
            size="md"
            status="primary"
            tabindex="0"
          >
            CdsButton
          </cds-button>
        </div>
      </body>
    </html>

      59 |   );
      60 |
    > 61 |   await waitFor(() => expect(onCdsButtonKeyDown).toHaveBeenCalled())
         |                                                  ^
      62 | });
      63 |
      64 |

      at src/CdsControlAction.test.tsx:61:50
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:47:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:127:77)
      at checkRealTimersCallback (node_modules/@testing-library/dom/dist/wait-for.js:121:16)
      at Timeout.task [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   0 total
Time:        5.557 s, estimated 6 s
Ran all test suites matching /CdsControlAction.test.tsx/i.
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
