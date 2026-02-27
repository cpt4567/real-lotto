import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
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
            }}
          >
            <h2>오류가 발생했습니다</h2>
            <p style={{ marginTop: '1rem', color: '#888' }}>
              페이지를 새로고침 해주세요.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: '#e6b800',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              새로고침
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
