import React from 'react';
import { ButtonDelete } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, deleteCont }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <ButtonDelete id={contact.id} onClick={deleteCont}>
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ul>
  );
};
