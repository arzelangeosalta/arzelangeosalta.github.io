# Arzelan Geo · Sitio web

Sitio institucional de **Arzelan Geo**: relevamientos, tecnología geoespacial e ingeniería aplicada. Salta, Argentina.

## Estructura

```
ArzelanGeo-Web/
├── index.html            # Página principal
├── assets/
│   ├── css/styles.css    # Estilos
│   ├── js/main.js        # Animaciones, contadores y formulario a WhatsApp
│   ├── img/              # Fotos e imágenes
│   └── video/            # Videos (portada, modelo 3D, agro)
├── package.json          # Scripts de Node/npm
└── .vscode/              # Configuración recomendada de VS Code
```

## Ver la web en la computadora

Opción 1, en VS Code: clic derecho en `index.html` → **Open with Live Server**.

Opción 2, con Node:

```bash
npm install
npm run dev
```

Se abre en `http://localhost:5500` y se recarga sola al guardar cambios.

## Guardar cambios con Git

```bash
git add .
git commit -m "Descripción corta del cambio"
git push
```

## Pendientes

- [ ] Correo institucional en la sección de contacto
- [ ] Link oficial de LinkedIn
- [ ] Fotos del equipo
- [ ] Logo original en SVG
- [ ] Confirmar volúmenes del caso de aplicación con Francisco
