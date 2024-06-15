import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
// import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols!')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required!'),
  password: Yup.string()
    .min(3, 'Minimum 6 symbols')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
});

export default function RegistrationForm() {
  // const dispatch = useDispatch();

  const fieldId = useId();

  // const handleSubmit = (values, actions) => {
  //   dispatch(addContact(values));

  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ContactSchema}
      // onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.thumb}>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.thumb}>
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={`${fieldId}-email`}
            placeholder="Email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.thumb}>
          <label className={css.label} htmlFor={`${fieldId}-password`}>
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={`${fieldId}-password`}
            placeholder="Password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
