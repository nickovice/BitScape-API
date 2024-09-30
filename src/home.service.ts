/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHello(): string {
    return `
        <html>
            <head>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh; /* Hace que ocupe toda la altura de la ventana */
                        margin: 0;
                        font-family: 'Arial', sans-serif;
                        background: linear-gradient(135deg, #001f3f, #004080); /* Fondo en diagonal */
                        background-size: 200% 200%; /* Para el efecto de movimiento */
                        animation: gradientAnimation 10s ease infinite; /* Animación suave */
                    }

                    @keyframes gradientAnimation {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    .saludo {
                        text-align: center;
                        padding: 40px;
                        border: 2px solid #
#4c4c4c; /* Delineado blanco */
                        border-radius: 20px; /* Bordes más redondeados */
                        background-color: #212529; /* Fondo oscuro para el saludo */
                        color: white; /* Texto en blanco para contraste */
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Sombra más pronunciada */
                        z-index: 1; /* Mantenerlo arriba de los decorados */
                    }

                    h1 {
                        color: #007bff; /* Color azul para el título */
                        margin: 0; /* Sin margen */
                    }

                    p {
                        color: #ccc; /* Color gris claro para el texto */
                        font-size: 18px; /* Tamaño de fuente para el texto */
                    }

                    img {
                        margin-top: 20px;
                        border-radius: 10px; /* Bordes redondeados para la imagen */
                        max-height: 90px; /* Altura máxima de la imagen */
                        width: auto;
max-width: 240px; /* Mantiene la proporción de la imagen */
                    }
                </style>
            </head>
            <body>
                <div class="saludo">
                    <h1>Hola!</h1>
                    <p>Llegaste a la API del sitio. Carga los endpoints según lo que necesites</p>
                    <img src="https://camo.githubusercontent.com/3d8c19507139233d73e522e49b9954a60f2c2d948aeeb62215c8dd6830ef2d9c/68747470733a2f2f692e696d6775722e636f6d2f764465526273432e706e67" alt="Imagen de Bienvenida">
                </div>
            </body>
        </html>
    `;
  }
}