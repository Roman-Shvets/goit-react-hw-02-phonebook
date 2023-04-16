import React, { Component } from "react";
import ContactListItem from "../ContactListItem/ContactListItem"
import PropTypes from "prop-types";

class ContactList extends Component {
 
render() {
    return (
    <div>
      <ul>
          {this.props.contacts
            .filter((element)=>element.name.toLowerCase().includes(this.props.filter.toLowerCase()))
            .map((item) => {
            return (
            <ContactListItem
                key={item.id}
                keyIndex={item.id}
                name={item.name}
                number={item.number}
                handleContactDelete={this.props.handleContactDelete} />
            )
          })}
        </ul>
     </div>
    );
  }
}
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired })),
  filter:PropTypes.string.isRequired,
  handleContactDelete: PropTypes.func.isRequired
}