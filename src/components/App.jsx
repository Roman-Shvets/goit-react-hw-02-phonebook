import React, { Component } from "react";
import ContactForm from "./Form/Form";
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"
import { nanoid } from 'nanoid'
import css from "./App.module.css"

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
 
  formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    if (this.state.contacts.find((item)=>item.name===data.name)) {
      alert(`${data.name} is already in contacts.`);
    }
    else {
      this.setState(prevState => ({
       contacts: [newContact, ...prevState.contacts]
      }));
    }
  };

  handleSearchChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleContactDelete = (evt) => {
    const indexToFind = this.state.contacts.findIndex(item => item.id === evt.target.id);
    this.setState(this.state.contacts.splice(indexToFind, 1));
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleSearchChange} value={this.state.filter}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} handleContactDelete={this.handleContactDelete} />
        </div>
    );
  }
}

export default App;