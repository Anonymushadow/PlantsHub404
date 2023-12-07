export let registroComponent = `
    <div class="content__container">
        <div class="form__container">
            <form class="login__form">
                <h3 class="login__form__title">Registrarse</h3>
                <div class="login__form__inputs__container">
                    <input type="email" class="login__form__input login__form__input__email" placeholder="Correo electronico" required>
                    <input type="password" class="login__form__input login__form__input__password" placeholder="Constraseña" required>
                    <input type="text" class="login__form__input login__form__input__dni" placeholder="DNI" required>
                </div>

                <div class="login__form__button__container">
                    <button class="login__form__send__button">Registrarme</button>
                    <p class="login__register__link">¿Ya tienes una cuenta?</p>
                </div>
            </form>
        </div>
    </div>`;
