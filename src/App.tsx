import { Background } from './components/background/Background';

function App() {
  return (
    <Background>
      <main className="flex min-h-screen w-full items-center justify-center">
        <img
          src="/Hotline_Miami_Logo.png"
          alt="Hotline Miami Logo"
          className="w-[80%] max-w-[650px] h-auto object-contain"
        />
      </main>
    </Background>
  );
}

export default App;