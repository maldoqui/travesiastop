import './globals.css'

export const metadata = {
  title: 'TravesíasTop | Agencia de Viajes en Puerto Rico',
  description: 'Cruceros, vacaciones todo incluido, circuitos por Europa, viajes grupales y experiencias personalizadas con Edwin Maldonado.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
