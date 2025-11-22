import { list } from './list';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';

const Contacts = () => {
  
  const contactsList = [
    ...list, 
    {
      title: 'Contact Us',
      content: <ContactForm />
    }
  ];

  return (
    <div className='cont'>
      
      {contactsList.map((item, index) => (
        <ContactItem 
          key={index} 
          title={item.title} 
          content={item.content} 
        />
      ))}
    </div>
  );
};

export default Contacts;