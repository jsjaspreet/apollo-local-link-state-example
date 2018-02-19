# Getting Started

```bash
$ yarn
$ yarn start
```

2/19/2018

I based this project off of `create-react-app`, so all you have to do is `yarn` and `yarn start` and the whole project is running. It uses GIPHY's public graphql API to randomly display memes, and uses `apollo-local-link-state` to keep a counter running of how many times you've clicked an "Add Meme" button on the page to figure out how many memes to show you (wait a few seconds in between clicking add meme, otherwise you'll get the same meme again).

The code in `graphql/client` I think is really similar to Redux, I think this clearly proves that you can replace vanilla redux with local link state, and if you're familiar with graphql, I suspect we'll see a lot of improvements keeping the mental model of how data access works both remotely and locally in the same graphql paradigm (ie I `query` data to figure out what it is, and `mutate` it to change it). No need to think about action creators and topics and normalizing data yourself in a redux store.

I thought more about `redux-saga` and looked through the typical usecases, I don't think especially with the addition of allowing async functions in the mutation resolver code that we'll really need it. I personally see the biggest reason to use Saga is to easily coordinate arbitrary asynchronous code blocks but I think it'll be a lot easier to reason about the codebase if we stick to basic async await and write individual blocks in separate functions that are used together for more complicated asynchronous actions.

This was pretty fun. As an aside, apollo-boost is a pretty nice way to get sane defaults out of the box when using Apollo Client and it was only merged like 5 days ago so whew we are really bleeding edge here! In any case, I won't really mind if we go forward with Redux and Saga, I understand this is probably a bigger change from  most people being really comfortable with Redux, though I do think local-link-state + async await will handle 99% of our use cases for our client apps in a way that is also very tractable for developers to reason about.
