import * as React from 'react';
import './Contact.scss';
import contactData from '../../config/contact';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <section className='contact'>
      <div className='title'>
        <h3>Kontakt</h3>
        <div className='underline'></div>
      </div>
      <div className='content'>
        <div className='contact-form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
              <label htmlFor='name'>Imię</label>
              <input
                type='text'
                id='name'
                {...register('name', { required: true })}
              />
            </div>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                {...register('email', { required: true })}
              />
            </div>
            <div className='field'>
              <label htmlFor='message'>Wiadomość</label>
              <textarea
                id='message'
                {...register('message', { required: true })}
              ></textarea>
            </div>
            <button className='btn-fill' type='submit'>
              Wyślij
            </button>
          </form>
        </div>
        <div className='contact-details'>
          {contactData &&
            contactData.map(({ item, icon }) => (
              <div className='detail'>
                <>
                  {icon}
                  <span>{item}</span>
                </>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
