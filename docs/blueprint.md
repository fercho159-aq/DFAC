# **App Name**: DFAC Accesorios para Cimbras – Selector Interactivo de Puntales

## Core Features:

- Model Selection: Slider interactivo para elegir entre los modelos de puntal: 50/100, 70/120, 100/170, 160/290, 180/320, 200/360, 220/400. Cada cambio de modelo actualiza automáticamente la ficha técnica y los valores de carga.
- Dynamic Specs: Muestra en tiempo real la información técnica del puntal seleccionado: Altura mínima y máxima, Diámetro de tubos, tipo de acero, normas de producción, Carga máxima soportada según la altura seleccionada. Datos precargados en el cliente (JSON) a partir de la tabla del PDF.
- Height Selection: Selector numérico o slider para elegir la altura (en cm). Al cambiar la altura, se muestra automáticamente la carga máxima soportada para el modelo actual. Cálculo y filtrado de datos con JavaScript (client-side).
- Animated Transitions: Efectos suaves al cambiar modelo o altura: Fade in / fade out para imágenes y datos, Animación en los valores numéricos y tablas, Resaltado momentáneo de los valores nuevos.
- Contact CTA: Botón “Solicitar Cotización” siempre visible (sticky en móvil). Abre un formulario modal o redirige a la página de contacto. Inclusión de teléfono y WhatsApp.

## Style Guidelines:

- Primario: Azul – #03487F (tono industrial adaptado).
- Fondo: Beige claro – #F5F5DC (neutral y limpio).
- Acento: Gris metálico – #D71719 (para resaltar elementos interactivos).
- Fuente: 'Inter', sans-serif
- Títulos y valores técnicos en bold.
- Texto descriptivo en regular.
- Profesional e industrial.
- Responsive para escritorio y móvil.
- Íconos ligeros para cada especificación técnica.
- Duración de 0.3s a 0.5s.
- Transiciones con opacidad y desplazamiento.
- Scroll suave para navegación.