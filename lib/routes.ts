// Definimos un array de rutas que no requieren autenticación
export const unprotectedRoutes = ["/", "/login", "/404", "/not-found"]

// Función para verificar si una ruta es no protegida
export function isUnprotectedRoute(path: string): boolean {
    return unprotectedRoutes.includes(path)
}
