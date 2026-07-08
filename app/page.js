const redes = {
  facebook: 'https://www.facebook.com/profile.php?id=61579151881063',
  instagram: 'https://www.instagram.com/travesiastop',
  tiktok: 'https://www.tiktok.com/@edwinmaldonado942',
  whatsapp: 'https://wa.me/17874708140',
}

const servicios = [
  ['Cruceros', 'Navega por el Caribe, Europa o destinos exóticos con asesoría experta antes de reservar.'],
  ['Vacaciones Todo Incluido', 'Resorts, playas, traslados y experiencias listas para disfrutar sin complicaciones.'],
  ['Circuitos por Europa', 'Itinerarios por Suiza, Italia, España, Turquía y más destinos inolvidables.'],
  ['Viajes Grupales', 'Grupos acompañados, coordinación completa y momentos compartidos de principio a fin.'],
  ['Tours Personalizados', 'Diseñamos la ruta ideal según tus gustos, fechas y presupuesto.'],
  ['Asistencia en Vuelos', 'Apoyo para buscar alternativas de vuelo y organizar tu viaje completo.'],
]

const promociones = [
  { img: '/images/promo-legend.png', title: 'Legend of the Seas', text: 'Recibe el año nuevo y Día de Reyes navegando en una experiencia épica.' },
  { img: '/images/promo-turquia.png', title: 'Turquía Mágica', text: '9 días / 8 noches descubriendo Estambul, Capadocia, Pamukkale y más.' },
  { img: '/images/promo-general.png', title: 'El viaje perfecto', text: 'Cruceros, Europa, resorts, tours personalizados y viajes grupales.' },
]

const galeria = [
  ['/images/suiza-garganta.jpg', 'Paisajes de Suiza'],
  ['/images/suiza-banco.jpg', 'Vistas alpinas'],
  ['/images/florencia.jpg', 'Florencia, Italia'],
  ['/images/venecia.jpg', 'Venecia'],
  ['/images/milan-grupo.jpg', 'Grupo en Milán'],
  ['/images/malaga.jpg', 'Málaga, España'],
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio">
          <img src="/images/logo.jpg" alt="Travesías Top" />
          <span>Travesías Top</span>
        </a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#promos">Promociones</a>
          <a href="#grupales">Viajes grupales</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="socials">
          <a href={redes.facebook} target="_blank">Facebook</a>
          <a href={redes.instagram} target="_blank">Instagram</a>
          <a href={redes.tiktok} target="_blank">TikTok</a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroBg"></div>
        <div className="heroContent">
          <p className="eyebrow">Aventuras inolvidables desde Puerto Rico al mundo</p>
          <h1>Viaja más. Vive más. Descubre el mundo con Travesías Top.</h1>
          <p>Cruceros, Europa, resorts todo incluido, viajes grupales, tours personalizados y asistencia en vuelos.</p>
          <div className="actions">
            <a className="btn primary" href="#promos">Ver promociones</a>
            <a className="btn" href={redes.whatsapp} target="_blank">Cotizar por WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Lo hacemos por ti</p>
          <h2>Experiencias diseñadas a tu medida</h2>
        </div>
        <div className="cards">
          {servicios.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p><a href={redes.whatsapp} target="_blank">Solicitar información →</a></article>)}
        </div>
      </section>

      <section id="promos" className="section dark">
        <div className="sectionHead">
          <p className="eyebrow">Ofertas y salidas destacadas</p>
          <h2>Promociones Travesías Top</h2>
        </div>
        <div className="promoGrid">
          {promociones.map((p) => <article className="promo" key={p.title}><img src={p.img} alt={p.title}/><div><h3>{p.title}</h3><p>{p.text}</p><a className="miniBtn" href={redes.whatsapp} target="_blank">Reservar ahora</a></div></article>)}
        </div>
      </section>

      <section id="grupales" className="split">
        <img src="/images/grupo-suiza.jpg" alt="Viaje grupal Travesías Top en Suiza" />
        <div>
          <p className="eyebrow">Viajes grupales</p>
          <h2>Viajar acompañado es una experiencia inolvidable</h2>
          <p>Organizamos viajes grupales a Europa, cruceros y destinos especiales con planificación completa, orientación antes del viaje y apoyo durante la experiencia.</p>
          <a className="btn primary" href={redes.whatsapp} target="_blank">Preguntar por próximos grupos</a>
        </div>
      </section>

      <section id="galeria" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Experiencias reales</p>
          <h2>Galería de viajes</h2>
        </div>
        <div className="gallery">
          {galeria.map(([img, alt]) => <img src={img} alt={alt} key={img} />)}
        </div>
      </section>

      <section id="contacto" className="contact">
        <img src="/images/logo.jpg" alt="Travesías Top" />
        <h2>¿Listo para tu próxima aventura?</h2>
        <p>Comunícate con Edwin Maldonado y asegura tus vacaciones.</p>
        <a className="phone" href={redes.whatsapp} target="_blank">787 470 8140</a>
        <div className="footerSocials">
          <a href={redes.facebook} target="_blank">Facebook</a>
          <a href={redes.instagram} target="_blank">Instagram @travesiastop</a>
          <a href={redes.tiktok} target="_blank">TikTok</a>
        </div>
        <small>Contratista Independiente de VMA Vega Alta, PR · Lic: S-2026-74-CI · CTPR AV-189 · Lic. 260 · CLIA 00666381</small>
      </section>

      <a className="whatsapp" href={redes.whatsapp} target="_blank">WhatsApp</a>
    </main>
  )
}
