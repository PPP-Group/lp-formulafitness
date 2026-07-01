import { Component } from 'react'
import './RouteErrorBoundary.css'

// Rede de segurança para erros ao carregar/renderizar uma rota.
// Sem isto, uma falha (ex.: chunk que não carrega) derruba a árvore React
// e a página fica em branco. Aqui mostramos uma mensagem com botão de recarregar.
export default class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error('Route render error:', error)
  }

  // Ao trocar de rota, tenta renderizar de novo em vez de manter o erro na tela.
  componentDidUpdate(prevProps) {
    if (prevProps.routeKey !== this.props.routeKey && this.state.hasError) {
      this.setState({ hasError: false })
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="route-error">
          <div className="route-error__inner">
            <h1 className="route-error__title">Something went wrong</h1>
            <p className="route-error__text">
              We couldn’t load this page. Please try again.
            </p>
            <button type="button" className="btn btn-primary" onClick={this.handleReload}>
              Reload page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
