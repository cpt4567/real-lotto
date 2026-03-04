import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const fallback = (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#0a0a12',
            color: '#fff',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
          }}
        >
          <h2>오류가 발생했습니다</h2>
          <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.875rem' }}>
            {this.state.error.message}
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={this.handleRetry}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#e6b800',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                color: '#1a1a2e',
              }}
            >
              재시도
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#2a2a3e',
                border: '1px solid #3d3d52',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              새로고침
            </button>
          </div>
        </div>
      );
      return this.props.fallback ?? fallback;
    }

    return this.props.children;
  }
}
