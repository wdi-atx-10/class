# React Native Lab

## Building a Contact List App

This afternoon we are going to put our React skills to the test in this new environment by building an application to help manage some contacts. This app will push us to use many of the APIs React Native provides for doing common tasks such as collecting user input, rendering lists of data, and updating the UI based on state changes.

We will be meeting back at 3 separate checkpoints throughout the afternoon to review together. Please stay on slack to receive notifications!

## Project Initialization

Use the react-native-cli tool to generate a new project.

```bash
$ react-native init ContactApp
$ cd ContactApp
```

#### Imports and Building Blocks

At the top of the file, we see that we are loading in the `React` library and the`Component` base class from `React` just like before, but then we are also importing some predefined methods and components from the `React-Native` library:

> [**AppRegistery**](https://facebook.github.io/react-native/docs/appregistry.html) - is the JS entry point to running all React Native apps. App root components should register themselves with `AppRegistry.registerComponent`, then the native system can load the bundle for the app

> [**View**](https://facebook.github.io/react-native/docs/view.html) - the most fundamental component for building a UI, `View` is a container that supports compossible layout, meaning a`View` is designed to be nested inside other views and can have 0 to many children of any type.

> [**Text**](https://facebook.github.io/react-native/docs/text.html) - a React component for displaying text.

> [**StyleSheet**](https://facebook.github.io/react-native/docs/stylesheet.html) -  is an abstraction similar to CSS StyleSheets. Using StyleSheet to create style objects to be used inline by components leads to higher performance and code quality.

These are the fundamental building blocks used to construct our own components, and represent the parts
of the React Native that we need to quickly bootstrap a React Native application.

Now to compile our application and view it in the simulator, we can run:

```bash
$ react-native run-iOS
```

This should build our app and open it up in an iOS simulator powered by XCode.

## `ContactApp` Component

Let's begin by looking at a quick mockup of what we are going for:

![Contact-App-Mockup](https://s21.postimg.org/b0n1x0vlz/contact_App.png)

Our Contacts app can be broken down into two main components: a `ContactApp` container component, a `ContactList` list component. All of our app's state will live in the container component, and  the `ContactList` component will be broken down into multiple presentational components, namely `Row`, and `Search`.

To start, let's get rid of the generated code in our app's root component, and define our basic structure and state.

### Structuring State and Component Outline

Before we start building our application, with the design of our components in mind - let's try to brainstorm all of the important changing data we will need to track in our users' flow.

- What pieces of state should we keep track of as we build our application?
- What will be the way primary ways we will update our app's state?

---

Since our application will be focused on contacts, we will need to store information about all contacts and the user search term for filtering contacts. Let's go ahead and map the pieces of data we will need to track by initializing some default state for our `ContactApp`:

<details>
<summary>Solution</summary>

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ContactApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      searchTerm: '',
    }
  }

  render() {
    return (
    	<View>
        <ContactList>
          <ContactSearch />
          <Row />
        </ContactList>
      </View>
    )
  }
}

AppRegistery.registerComponent( 'ContactApp', () => ContactApp )
```
</details>

> **Note**: In our render function, we are rendering our `ContactList` component which itself has several children components. While we have yet to define these yet, we will do so momentarily.

Great, now that we have a good idea of the structure and data of our application, let's get to work building out the rest of our components with some actual data.

## Using `ListView` to Render Scrollable Lists

For our dataset, we've taken advantage of the great free service [Random User Generator](https://randomuser.me/) to create some fake user data that [we've included](https://github.com/wdi-atx-10/class/blob/master/w08/d02/afternoon/contactsData.json) for our use. The JSON seed data is structured as an array of objects containing metadata such as `firstName`, `lastName`, `email`, `phoneNumber`, and `imageUrl` for each fake contact.

First, create a file in our project's root directory to hold all of our data, let's call that file `contactsData.json`:

Then, go ahead and copy the contents of the [seed data](https://github.com/wdi-atx-10/class/blob/master/w08/d02/afternoon/contactsData.json) and place it into that file.

In order to render this data, we are going to use the pre-built `ListView` React Native component, which specializes in displaying dynamic scrollable data. To use it, we need to first import the component from React Native, and import our seed data.

<details>
  <summary>Solution:</summary>
  In `index.iOS.js`:

  ```js
  import React, {Component} from 'react'
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
  } from 'react-native'

  import contactsData from './contactsData'
  ```
</details>

Great, now that we have those pieces in place, let's define our `ContactList` component which we will use to render a `ListView` and which will receive the correct data as props.

## `ContactList` Component

Let's put our new component definition after our imports, and before our `ContactApp` component definition (or in a new file entirely - make sure to create a components directory if you go this route)

<details>
  <summary>Solution:</summary>

  ```jsx
  // ContactList component
  class ContactList extends Component {
    render() {
      return (
        <ListView
          dataSource={this.props.dataSource}
        {/* data represents each item in the array passed as the dataSource - in this each contact  */}
          renderRow={data => <Text>{data.firstName}</Text>}
          />
      )
    }
  }
  ```
</details>

> **Note**: all `ListView`'s must have a `renderRow()`method defined as a prop, which is in charge of the rendering of each item in the passed in dataset. Right now, we are simply rendering each contact's first name as text inline, but in the future we will break this out into its own component so to have more control over the display.

As you can see, we need to satisfy the value for the prop `dataSource` which is currently coming from `this.props.dataSource`. Let's actually pass this component some data, when we render it in our `ContactApp`.

## Setting a Data Source

Our `ContactApp` component is in charge of all our app's state and rendering our other components. Let's go in, and update that component's definition so that it will pass the correct data to the `ContactList`.

First, when our app is initialized we need to use `ListView.DataSource()` to configure how the data is structured, and specifically, to define how to differentiates between rows:

<details>
<summary>Solution:</summary>

```jsx
// index.iOS.js

export default class ContactApp extends Component {
  constructor(props) {
    super(props)
    // initialize a dataSource where a row is defined to be different from the previous one
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    this.state = {
      contacts: contactsData, // update state to pull from the seed data
      dataSource: ds.cloneWithRows(contactsData), // need to format our seed data correctly
      searchTerm: '',
    }
  }

  render() {
    return (
    	<View>
          {/* Pass the updated dataSource as a prop */}
          <ContactList dataSource={this.state.dataSource} />
      	</View>
    )
  }
}
```

</details>

> [`ListView.DataSource`](https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/ListView/ListViewDataSource.js) does a lot of things behind the scenes that allow us to have an efficient data blob that the `ListView` component can understand, all from a simple array. Also important to note, we need to treat the data we pass as a dataSource as **immutable**.


If we now reload in the simulator, we should see all of our contacts' first names rendered on the screen! Next up, let's work on adding some styles and a little more markup to each `Row` in the list.


# CHECKPOINT ONE

----
----

## Refactoring To Use a Row Component

Now that we have our basic app structure in place, it's a good time to take the opportunity to refactor and add some styles to our rendered data.

Specifically, let's take that little bit of rendered UI from the `renderRow()` method in our `ContactList` component, and break it out into its own `Row` component that we will render instead. This will leave our `renderRow()`looking something like this we we are done:

<details>
<summary>Solution:</summary>
```jsx
// ContactList
<ListView
  dataSource={this.props.dataSource}
  renderRow={data => <Row contact={data} />} />
```
</details>

**Your task is to define our `Row` component**

You should:

- Render your new `Row` component in the `renderRow()` method in the `ListView`
  - Pass in the data as a `contact` prop
- Render a `View` containing the contact 's profile picture with an `Image` component
- Render the full name of the contact in a `Text`

<details>
<summary>Solution:</summary>
```jsx
// Row component
const Row = props => {
  let {imageUrl, firstName, lastName } = props.contact
  let name = `${firstName} ${lastName}`
  return (
    <View style={styles.rowContainer}>
      <Image style={styles.rowPhoto} source={{uri: imageUrl}} />
      <Text style={styles.rowText}>{name}</Text>
    </View>
  )
}
```
</details>

## Adding Styles with React Native

Once you have your initial markup, try adding some inline styles to your `Row` Component:

- Use `Stylesheet.create()` to create a `styles` object with computed javascript `CSS` rules defined
- Define `rowContainer`, `rowPhoto`, and `rowText` rules and apply them to their respective bit of UI in the `Row` render method

<details>
<summary>Solution:</summary>
```jsx
// App Styles
const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 12,
    fontSize: 16,
  },
  rowPhoto: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
})

```
</details>

## Add a Row Separator

Now that our UI for our initial view is starting to come together, let's add a nice visual separator between our rendered rows. Luckily, the `ListView` component has a `renderSeparator()` method that can help us display a separator between components in our list.

To do this, we need to define a new style and add tiny bit of UI:

<details>
<summary>Solution:</summary>
```jsx
class ContactList extends Component {
  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={data => <Row contact={data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
       />
    )
  }
}

/* ... */

const styles = {
  /* ... */
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
}
```
</details>


> **Note**: the `rowId` is passed as a prop in to the `renderSeparator` method, which works well as a key
>
> The `StyleSheet.hairlineWidth` property is defined as [the width of a thin line](https://facebook.github.io/react-native/docs/stylesheet.html#hairlinewidth) on the platform. It can be used as the thickness of a border or division between two elements.

Now, you might be asking why not just tack on a border bottom on the component returned by *renderRow*? One main reason is that *renderSeparator* is smart! It won’t render the separator on the last element in the section.

# CHECKPOINT TWO

----
----

## Adding Search UI to Filter Contacts
Let's continue implementing our outlined features and add a way for users to filter our contacts by name.

We'll start by adding a new component `ContactSearch`, which we will render as the header in the `ListView`. To do this, we'll utilize the `renderHeader()` method, following a similar pattern we've been doing so far.

However, before we can begin writing our new component, we need a way to collect user input, and thus we'll have to import another native component, `TextInput`. This will allow us to track changes to the input, and update our app's state accordingly.

With our data in mind, the `ContactSearch` component will receive the `searchTerm` and necessary event handlers as `props` that we will define and pass down in our `ContactApp` container component.

#### Adding UI

First up, let's focus on creating the necessary UI before we worry about wiring up the input to the app's state:

<details>
<summary>Solution:</summary>
```jsx
/* after our imports but before our ContactApp definition */

// ContactSearch component
const ContactSearch = props => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
     />
  </View>
)
```
</details>


Now we just need to define the styles we're referencing and then render it in the `ContactList` component via the `renderHeader()` method:

<details>
<summary>Solution:</summary>
```jsx
// ContactList component
class ContactList extends Component {
  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={data => <Row contact={data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <ContactSearch />}
       />
    )
  }
}

/* ... */

const styles = {
  /* ... */
  searchContainer: {
   flex: 1,
   padding: 8,
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#C1C1C1',
  },
  input: {
   height: 30,
   flex: 1,
   paddingHorizontal: 8,
   fontSize: 15,
   backgroundColor: '#FFFFFF',
   borderRadius: 2,
  }
}
```
</details>

If we refresh our app in the simulator, we should see our search UI added to the top of the screen, but it doesn't do any thing...yet!

Let's use some state to track user input and update our app accordingly.

## Filter Contacts

In order to wire up our `ContactSearch`, we will need to pass down some data and handlers from the container component.

If you remember from when we defined our app's initial state, we already have a piece of state in the `ContactApp` we've called `searchTerm`.  We will pass that data and an `onSearchInput` handler down the chain from `ContactApp` to `ContactList` to `ContactSearch` via props.

Ok, so it might seem like there's a lot going on in this step, but this is the same pattern we saw in React where we are passing state down between components as props, and letting the container component be in charge of responding to user input.

<details>
<summary>Solution:</summary>
```jsx
// ContactSearch component
const ContactSearch = props => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      value={props.searchTerm}
      onChangeText={text => props.onSearchInput(text) } />
  </View>
)

// ContactList component
class ContactList extends Component {
  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={data => <Row contact={data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => (
          <ContactSearch
            searchTerm={this.props.searchTerm}
            onSearchInput={this.props.onSearchInput} />
        )}
      />
    )
  }
}

// ContactApp component
export default class ContactApp extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      contacts: contactsData,
      dataSource: ds.cloneWithRows(contactsData),
      searchTerm: '',
    }

    // bind methods to instance
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  render() {
    return (
      <View>
        <ContactList
          dataSource={this.state.dataSource}
          onSearchInput={this.handleSearchInput}
          searchTerm={this.state.searchTerm}
        />
      </View>
    )
  }
}
```
</details>

When we refresh our app in the simulator and if we are using the debugger, we should be able to see the user's input logged to our console in the debugger UI tab.

This is a great sign, that we can proceed to use that input to perform the necessary filtering.

## How can we move the view down so the timestamp on the phone isn't overtop our content?

<details>
<summary>Solution:</summary>
We added an inline style prop `style={{top:18}}` to the ContactApp's container to help with the list header's display.

```jsx
<View style={{top: 18}}>
  <ContactList
    dataSource={this.state.dataSource}
    onSearchInput={this.handleSearchInput}
    searchTerm={this.state.searchTerm}
  />
</View>
```
</details>

## 'Filtering the Contacts' Logic

All that's left is to update our `handleSearchInput` method in the `ContactApp` and write the logic to filter by a contact's full name.

<details>
<summary>Solution:</solution>

In the `handleSearchInput` method, we filter our contacts by the full name based on the search term, and then we call `this.setState` to update the `dataSource` property which is in charge of what is rendered by our `ListView`. Important to note, during this step we make use of the nature of `.slice()` to ensure that we don't mutate our data source directly.

After all that, if we go reload in the simulator now, we should be able to search for a contact by either first or last name, and watch as the list dynamically renders the results!

```jsx
// ContactApp component
export default class ContactApp extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      contacts: contactsData,
      dataSource: ds.cloneWithRows(contactsData),
      searchTerm: '',
    }

    // bind method to instance
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(searchTerm) {
    // given a contact, see if the search term in that contact's full name
    let filterbyFullName = contact => {
      let fullName = `${contact.firstName} ${contact.lastName}`
      return fullName.includes(searchTerm.toLowerCase())
    }

    // filter our list of contacts, making sure to preserve immutability
    let updatedContacts = this.state.contacts.slice().filter(filterbyFullName)

    // if there's no search results, return a copy of original dataset
    updatedContacts = updatedContacts.length ? updatedContacts : this.state.contacts.slice()

    this.setState({
      ...this.state, // returns a copy of the previous state
      dataSource: this.state.dataSource.cloneWithRows(updatedContacts), // update the dataSource
      searchTerm, // update the searchTerm controlling the input
    })
  }

  render() {
    return (
      <View style={{top: 18}}>
        <ContactList
          dataSource={this.state.dataSource}
          onSearchInput={this.handleSearchInput}
          searchTerm={this.state.searchTerm}
        />
      </View>
    )
  }
}
```

</details>

# CHECKPOINT THREE

----
----
## REFACTOR!
If you're reached this step, it's time to pull out our components into separate files. Don't forget their styles too!
