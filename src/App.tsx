import { ErrorBoundary } from './components/ErrorBoundary';
import { LottoRoulette } from './components';

function App() {
  return (
    <ErrorBoundary>
      <LottoRoulette />
    </ErrorBoundary>
  );
}

export default App;
