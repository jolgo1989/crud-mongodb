import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(morgan('dev')); // Middleware para registrar solicitudes HTTP
app.use(express.json()); // Middleware para interpretar JSON

// Administrar rutas
app.use('/api', authRoutes); // app.use organiza y dirige las rutas a los controladores adecuados

export default app;
