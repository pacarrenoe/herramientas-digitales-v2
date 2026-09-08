# Herramientas digitales

Aplicación web construida con React y Vite que agrupa utilidades para visualizar y comparar PDF, convertir imágenes a Base64 y transformar texto en entidades HTML.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Arquitectura

El código fuente usa una arquitectura organizada por funcionalidades. De esta forma, cada herramienta mantiene juntas sus páginas, componentes, estilos, estado y utilidades, y se evita mezclar código de dominios diferentes.

```text
src/
├── app/                          # Configuración general de la aplicación
│   ├── App.jsx                   # Rutas principales
│   ├── layouts/                  # Estructuras visuales compartidas por rutas
│   └── styles/                   # Estilos globales
├── features/                     # Módulos independientes por funcionalidad
│   ├── home/                     # Página de inicio
│   ├── image-converter/          # Conversión entre imágenes y Base64
│   ├── pdf/                      # Lectura, comparación y visualización de PDF
│   └── text-entities/            # Conversión y previsualización de entidades HTML
├── shared/                       # Componentes reutilizables entre funcionalidades
│   └── components/
└── main.jsx                      # Punto de entrada de React
```

### Convenciones

- **`app/`** solo contiene el ensamblado de la aplicación: rutas, layouts y estilos globales.
- **`features/`** separa el código por dominio. Cada funcionalidad puede contener `pages/`, `components/`, `store/` o `utils/` según lo necesite.
- **`shared/`** contiene únicamente piezas reutilizadas por más de una funcionalidad o por la capa de aplicación.
- Los estilos específicos se colocan junto al componente o página que los utiliza y comparten su nombre (`PdfReaderPage.jsx` y `PdfReaderPage.css`).
- Los nombres de páginas terminan en `Page` y los layouts terminan en `Layout` para expresar claramente su responsabilidad.

## Añadir una herramienta

1. Crea un directorio dentro de `src/features/<nombre-de-la-herramienta>`.
2. Coloca su página principal en `pages/` y sus piezas internas en `components/`, `utils/` o `store/`.
3. Registra la nueva ruta en `src/app/App.jsx`.
4. Si debe aparecer en la navegación, agrega el enlace en `src/shared/components/TopBar.jsx`.
5. Ejecuta `npm run lint` y `npm run build` antes de integrar el cambio.
