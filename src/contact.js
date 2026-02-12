// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Deshabilitar el botón de envío
            const submitBtn = form.querySelector('.btn-enviar');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

            // Obtener los datos del formulario
            const formData = new FormData(form);

            try {
                // Enviar el formulario a Web3Forms
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Éxito
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                    form.reset();
                } else {
                    // Error del servidor
                    formStatus.className = 'form-status error';
                    formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
                }
            } catch (error) {
                // Error de red
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Error de conexión. Por favor, verifica tu internet e intenta de nuevo.';
            } finally {
                // Rehabilitar el botón
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            }
        });
    }
});
