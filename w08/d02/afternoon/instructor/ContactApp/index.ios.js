/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TextInput
} from 'react-native';

import contactsData from './contactsData'

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

const Row = props => {
  // let {imageUrl, firstName, lastName } = props.contact
  // let name = `${firstName} ${lastName}`
  return (
    <View style={styles.rowContainer}>
      <Image style={styles.rowPhoto} source={{uri: props.contact.imageUrl}} />
      <Text style={styles.rowText}>{props.contact.firstName} </Text>
    </View>
  )
}


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

export default class ContactApp extends Component {
  constructor(props) {
    super(props)
    // initialize a dataSource where a row is defined to be different from the previous one
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    this.state = {
      contacts: contactsData, // update state to pull from the seed data
      dataSource: ds.cloneWithRows(contactsData), // need to format our seed data correctly
      searchTerm: ''
    }
    // bind methods to instance
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(searchTerm){
    console.log(searchTerm)
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
    );
  }
}

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
  },
  separator: {
  flex: 1,
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#8E8E8E',
},
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
})

AppRegistry.registerComponent('ContactApp', () => ContactApp);
