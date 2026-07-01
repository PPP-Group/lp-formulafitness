import { lazy } from 'react'

// Envolve React.lazy com retry + auto-reload.
//
// Por que: as páginas são chunks carregados sob demanda. Quando um deploy novo
// troca os nomes com hash dos arquivos, uma aba já aberta pode pedir um chunk
// que não existe mais → o import() rejeita e a página fica em branco.
//
// Estratégia:
//  1. Tenta importar. Se falhar, retenta algumas vezes com um pequeno intervalo
//     (cobre falhas transitórias de rede).
//  2. Se ainda assim falhar, provavelmente o chunk é antigo (pós-deploy):
//     força UM reload da página para buscar o manifesto de assets atualizado.
//     Uma flag em sessionStorage evita loop de reload.
export default function lazyWithRetry(importFn, { retries = 2, interval = 400 } = {}) {
  return lazy(async () => {
    const reloadKey = 'chunk-reload-attempted'

    try {
      const module = await attempt(importFn, retries, interval)
      // Sucesso: limpa a flag para permitir um novo reload em falhas futuras.
      sessionStorage.removeItem(reloadKey)
      return module
    } catch (error) {
      // Já tentamos recarregar antes? Então desiste e deixa o ErrorBoundary agir.
      if (sessionStorage.getItem(reloadKey)) {
        throw error
      }
      // Primeira falha persistente: recarrega uma vez para pegar assets novos.
      sessionStorage.setItem(reloadKey, '1')
      window.location.reload()
      // Retorna uma promise pendente para não renderizar nada antes do reload.
      return new Promise(() => {})
    }
  })
}

async function attempt(importFn, retries, interval) {
  try {
    return await importFn()
  } catch (error) {
    if (retries <= 0) throw error
    await new Promise((resolve) => setTimeout(resolve, interval))
    return attempt(importFn, retries - 1, interval)
  }
}
