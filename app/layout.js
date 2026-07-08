import './globals.css'

export const metadata = {
  title: 'Travesías Top | Aventuras inolvidables',
  description: 'Cruceros, Europa, resorts todo incluido, viajes grupales y tours personalizados con Edwin Maldonado.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
