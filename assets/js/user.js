
  // Seleccionar el formulario
  const form = document.querySelector('.needs-validation');

  // Agregar el evento submit al formulario
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    // Validar el formulario manualmente
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Capturar los datos del formulario
    const userData = {
      name: document.querySelector('#yourName').value,
      surname: document.querySelector('#yourSurname').value,
      email: document.querySelector('#yourEmail').value,
      alias: document.querySelector('#yourAlias').value,
      password: document.querySelector('#yourPassword').value,
      agree: document.querySelector('#acceptTerms').checked
    };

    try {
      // Enviar los datos al backend
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.detail || 'Algo salió mal'}`);
      }

      const result = await response.json();
      console.log('Usuario creado:', result);

      // Mostrar un mensaje de éxito o redirigir
      alert('Usuario creado exitosamente.');
      window.location.href = 'pages-register.html'; // Redirige al login (opcional)

    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Hubo un problema al crear el usuario.');
    }
  });
