Lazy loading is a technique where certain resources or elements (like images, components, or even entire pages) are only loaded when they are actually needed. Instead of loading everything upfront, which can slow down the initial page load time, lazy loading delays the loading of these resources until the user interacts with the page in a way that requires them.

<Suspense fallback={<div>Loading...</div>}> this is added so that if page is loading or taking time to come on client screen till that loading... will be displayed

Exactly! The <Suspense> component in React is used to handle the loading state when you're using React.lazy() for lazy loading components.

How <Suspense> Works:
fallback Prop: The fallback prop in the <Suspense> component defines what should be displayed while the lazy-loaded component is being fetched and rendered. It can be anything like a loading spinner, a message ("Loading..."), or even a custom loading component.

When It's Shown: The content specified in the fallback prop will be shown to the user until the lazy-loaded component is fully downloaded and ready to be rendered. Once the component is ready, the fallback content is replaced with the actual component.

Example: