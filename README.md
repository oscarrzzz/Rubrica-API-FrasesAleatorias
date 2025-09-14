API de Frases Motivacionales
Esta API devuelve frases motivacionales almacenadas en memoria, utilizando Node.js y Express.js.

Endpoints disponibles
1. Obtener todas las frases
Ruta:
GET /api/frases
Ejemplo de respuesta:
[
  "Cree en ti mismo y todo será posible.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Nunca es tarde para empezar de nuevo."
]

2. Obtener una frase aleatoria
Ruta:
GET /api/frases/aleatoria
Ejemplo de respuesta:
{
  "frase": "La disciplina vence al talento cuando el talento no tiene disciplina."
}

3. Agregar una nueva frase
Ruta:
POST /api/frases
Body (JSON):
{ "frase": "Aprender cada día te hace más fuerte" }
Ejemplo de respuesta:
{
  "msg": "Frase agregada",
  "frases": [
    "Cree en ti mismo y todo será posible.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Aprender cada día te hace más fuerte"
  ]
}
