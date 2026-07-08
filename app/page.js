const whatsapp = 'https://wa.me/17874708140?text=Hola%20Edwin%2C%20quiero%20una%20cotizaci%C3%B3n%20con%20Traves%C3%ADasTop'

const promos = [
  {
    title: 'Legend of the Seas',
    subtitle: 'Recibe el 2027 y Día de Reyes en alta mar',
    date: '3 al 9 de enero 2027',
    price: 'Desde $1,149 p/p',
    image: '/images/legend.png'
  },
  {
    title: 'Turquía Mágica',
    subtitle: 'Estambul, Capadocia, Pamukkale, Éfeso y más',
    date: 'Junio 2027 · 9 días / 8 noches',
    price: 'Cupos limitados',
    image: '/images/turquia.png'
  },
  {
    title: 'Viajes a tu medida',
    subtitle: 'Cruceros, resorts, Europa, tours y grupos',
    date: 'Cotizaciones personalizadas',
    price: 'Planifica hoy',
    image: '/images/servicios.png'
  }
]

const services = ['Cruceros', 'Vacaciones todo incluido', 'Circuitos por Europa', 'Tours personalizados', 'Viajes grupales', 'Asistencia en vuelos']

export default function Home() {
  return (
    <main>
      <a className="whatsapp" href={whatsapp} target="_blank">WhatsApp</a>
      <nav className="nav">
        <img src="/images/logo.jpg" alt="TravesíasTop" />
        <div>
          <a href="#servicios">Servicios</a>
          <a href="#promos">Promociones</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay" />
        <div className="heroContent">
          <img className="heroLogo" src="/images/logo.jpg" alt="TravesíasTop" />
          <p className="eyebrow">Aventuras inolvidables desde Puerto Rico</p>
          <h1>Tu próxima aventura comienza con TravesíasTop</h1>
          <p className="lead">Creamos viajes perfectos para ti: cruceros, Europa, resorts todo incluido, vacaciones personalizadas y salidas grupales.</p>
          <div className="buttons">
            <a className="primary" href={whatsapp} target="_blank">Solicitar cotización</a>
            <a className="secondary" href="#promos">Ver promociones</a>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <p className="eyebrow">Todo tipo de viajes</p>
        <h2>Diseñamos experiencias para cada estilo de viajero</h2>
        <div className="grid services">
          {services.map((service) => <article key={service}>{service}</article>)}
        </div>
      </section>

      <section id="promos" className="section dark">
        <p className="eyebrow">Promociones destacadas</p>
        <h2>Ofertas y salidas que debes mirar primero</h2>
        <div className="grid promos">
          {promos.map((promo) => (
            <article className="card" key={promo.title}>
              <img src={promo.image} alt={promo.title} />
              <div>
                <span>{promo.date}</span>
                <h3>{promo.title}</h3>
                <p>{promo.subtitle}</p>
                <strong>{promo.price}</strong>
                <a href={whatsapp} target="_blank">Cotizar ahora</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Confianza y acompañamiento</p>
          <h2>Planificamos cada detalle para que viajes tranquilo</h2>
          <p>Recibe asesoría personalizada antes, durante y después de tu viaje. Te ayudamos a escoger la mejor alternativa según tu presupuesto, fechas, destino y estilo de viaje.</p>
        </div>
        <div className="features">
          <p>✓ Atención personalizada</p>
          <p>✓ Planes de pago disponibles</p>
          <p>✓ Cruceros, Europa, resorts y grupos</p>
          <p>✓ Respaldo y experiencia</p>
        </div>
      </section>

      <section id="contacto" className="cta">
        <h2>¿Listo para planificar tus próximas vacaciones?</h2>
        <p>Comunícate con Edwin Maldonado y asegura tus vacaciones.</p>
        <a href={whatsapp} target="_blank">Enviar mensaje por WhatsApp</a>
        <p className="phone">(787) 470-8140</p>
        <p className="socials">Instagram: @travesiastop · Facebook: TravesíasTop</p>
      </section>

      <footer>
        <img src="/images/logo.jpg" alt="TravesíasTop" />
        <p>Contratista Independiente de VMA Vega Alta, PR</p>
        <p>Lic: S-2026-74-CI | CTPR AV-189 | Lic. 260 | CLIA 00666381</p>
      </footer>
    </main>
  )
}
