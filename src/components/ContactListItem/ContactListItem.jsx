import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactListItem.module.css"

class ContactListItem extends Component {
 
render() {
    return (
    <div className={css.listBlock}>
    <li className={css.listItem}>{this.props.name}: {this.props.number}</li>
        <button className={css.buttonDelete} id={this.props.keyIndex} onClick={this.props.handleContactDelete}>Delete</button>
    </div>
    )
    }}
export default ContactListItem;

ContactListItem.propTypes = {
  keyIndex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number:PropTypes.string.isRequired,
  handleContactDelete: PropTypes.func.isRequired
}