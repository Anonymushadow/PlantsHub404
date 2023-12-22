export let loginComponent = `
    <div class="form__container">
        <form class="login__form">
            <h3 class="login__form__title">Iniciar Sesion</h3>
            <div class="login__form__inputs__container">
                <input type="email" class="login__form__input login__form__input__email" placeholder="Correo electronico" required>
                <input type="password" class="login__form__input login__form__input__password" placeholder="Constraseña" required>
            </div>

            <div class="login__form__button__container">
                <input type="submit" class="login__form__send__button" value="Ingresar">
                <p class="login__register__link">¿No tienes una cuenta?</p>
            </div>
        </form>
    </div>`;