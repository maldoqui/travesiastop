import './globals.css';

export const metadata = {
  title: 'TravesiasTop | Agencia de Viajes en Puerto Rico',
  description: 'Cruceros, resorts todo incluido, Europa, viajes grupales y vacaciones personalizadas con Edwin Maldonado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
