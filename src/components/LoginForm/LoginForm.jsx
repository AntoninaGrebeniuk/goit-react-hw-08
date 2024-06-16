import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required!'),
  password: Yup.string()
    .min(6, 'Minimum 6 symbols')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    // .unwrap()
    // .then(data => console.log(data))
    // .catch(() => alert('Registration error!'));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
