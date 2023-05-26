## Framework :

- Used SvelteKit due to its size and minimal runtime, which guarantees optimal performance.

## UI :

- Used class-based UI library ( tailwind ) rather than component-based library to give more flexibility for customization in the UI, in order to acheive better user experience.

## Data storage :

- Used local storage to support presistent client side storage.

- local storage is a synchronous API meaining that it'll block the browser main thread if a huge amount of data is being stored, so in order to enhance the user experience, I made use of the partytown library to offload the pin location to a separate service worker.



