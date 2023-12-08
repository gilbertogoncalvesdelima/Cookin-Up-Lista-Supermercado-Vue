// Importa as interfaces ICategoria e IReceita
import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

// Função genérica para obter dados de uma URL
async function obterDadosURL<T>(url: string) {
  // Faz uma requisição para a URL usando fetch
  const resposta = await fetch(url);

  // Converte a resposta para JSON e a tipa como o tipo genérico T
  return resposta.json() as T;
}

// Função assíncrona para obter categorias
export async function obterCategorias() {
  // Chama a função genérica para obter dados de uma URL específica para categorias
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/86802bed06855cdccc9247dd1fa175c6ccea7dda/categorias.json');
}

// Função assíncrona para obter receitas
export async function obterReceitas() {
  // Chama a função genérica para obter dados de uma URL específica para receitas
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json');
}
