import { ContactForm, ContactData, ContactHeading, ContactInput, ContactInputMessage, ContactSubmit, ContactWrapper } from './ContactElements';

const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <ContactData>
          <ContactHeading>Get in Touch</ContactHeading>
          <ContactForm action="" onSubmit={(e) => e.preventDefault()}>
            <ContactInput name="Contact_Name" height="2.5rem" type="text" width="25rem" autoComplete="off" placeholder="Name..."/>
            <ContactInput name="Contact_Email" height="2.5rem" type="email" width="25rem" autoComplete="off" placeholder="Email..."/>
            <ContactInput name="Contact_Subject" height="2.5rem" type="text" width="25rem" autoComplete="off" placeholder="Subject..."/>
            <ContactInputMessage name="Contact_Message" height="8rem" type="text" width="25rem" autoComplete="off" placeholder="Message..."/>
            <ContactSubmit width="15rem" height="2.75rem">Submit</ContactSubmit>
          </ContactForm>
        </ContactData>
      </ContactWrapper>
    </>
  )
}

export default Contact;
