import {render, screen} from '@testing-library/react';
import App from './components/App/App';

test('renders title', () => {
    render(<App/>);
    const title = screen.getByText('Generate pictures');
    expect(title).toBeInTheDocument();
});
