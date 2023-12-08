// Função que verifica se todos os itens da lista1 estão presentes na lista2
export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
  // Usa o método every para verificar se todos os itens de lista1 estão presentes em lista2
  return lista1.every((itemLista1) => lista2.includes(itemLista1));
}
