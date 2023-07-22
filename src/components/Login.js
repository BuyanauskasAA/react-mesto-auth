import React from 'react';
import FormValidator from '../utils/FormValidator';
import validationConfig from '../utils/validation-config';

function Login({ onAuthorize }) {
  const form = React.useRef();

  React.useEffect(() => {
    const formValidator = new FormValidator(validationConfig, form.current);
    formValidator.enableValidation();
    formValidator.enableSubmitButton();
  });

  const [formValue, setFormValue] = React.useState({ password: '', email: '' });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAuthorize(formValue.password, formValue.email);
  }

  return (
    <main className="content">
      <section className="registration">
        <div className="registration__container ">
          <h2 className="registration__title">Вход</h2>
          <form ref={form} onSubmit={handleSubmit} className="form" name="login-form" noValidate>
            <label className="form__field">
              <input
                id="input-user-email"
                className="form__input form__input_color_white"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formValue.email}
                onChange={handleChange}
              />
              <span className="form__error input-user-email-error"></span>
            </label>
            <label className="form__field">
              <input
                id="input-user-password"
                className="form__input form__input_color_white"
                type="password"
                name="password"
                placeholder="Пароль"
                minLength="2"
                required
                value={formValue.password}
                onChange={handleChange}
              />
              <span className="form__error input-user-password-error"></span>
            </label>
            <button
              className="button form__submit-button form__submit-button_color_white"
              type="submit"
            >
              Войти
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
