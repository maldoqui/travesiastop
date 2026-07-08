import { Ship, Palmtree, Plane, Map, Users, MessageCircle, Star, ShieldCheck, CreditCard, Globe2, Phone, Mail, CalendarDays, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

const whatsappBase = 'https://wa.me/17874708140?text=';
const whatsapp = `${whatsappBase}${encodeURIComponent('Hola Edwin, quiero cotizar mis vacaciones con TravesiasTop.')}`;

const services = [
  { icon: Ship, title: 'Cruceros', text: 'Salidas desde San Juan, Florida y otros puertos principales con las mejores navieras.' },
  { icon: Palmtree, title: 'Resorts Todo Incluido', text: 'Punta Cana, Cancún, Colombia, Aruba, Costa Rica y otros destinos de playa.' },
  { icon: Plane, title: 'Asistencia en vuelos', text: 'Orientación para coordinar vuelos, conexiones y fechas convenientes.' },
  { icon: Map, title: 'Circuitos por Europa', text: 'España, Italia, Suiza, Turquía, Grecia y circuitos personalizados.' },
  { icon: Users, title: 'Viajes Grupales', text: 'Grupos familiares, iglesias, escuelas, empresas y amistades.' },
  { icon: Globe2, title: 'Viajes Personalizados', text: 'Diseñamos vacaciones según tu presupuesto, estilo y fechas.' },
];

const promos = [
  { title: 'Legend of the Seas', tag: '3 al 9 de enero 2027', price: 'Desde $1,149 pp en cabina doble', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1100&q=80', text: 'Western Caribbean & Perfect Day desde Fort Lauderdale.' },
  { title: 'Turquía Mágica', tag: 'Junio 2027', price: 'Circuito grupal', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1100&q=80', text: 'Estambul, Capadocia, Éfeso, Pamukkale, Bursa y más.' },
  { title: 'Punta Cana', tag: 'Escapadas al Caribe', price: 'Paquetes con resort y traslados', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=80', text: 'Vacaciones todo incluido para parejas, familias y grupos.' },
  { title: 'Europa 2027', tag: 'Viajes personalizados', price: 'Barcelona, Suiza, Italia y más', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1100&q=80', text: 'Experiencias a tu ritmo con hoteles, excursiones y traslados.' },
];

const groupTrips = [
  'Legend of the Seas • Enero 2027',
  'Turquía Mágica • Junio 2027',
  'España + Turquía • Junio 2027',
  'Cruceros desde San Juan • Temporada 2026-2027',
];

const quickWhatsapps = [
  ['Cotizar crucero', 'Hola Edwin, quiero cotizar un crucero con TravesiasTop.'],
  ['Resort todo incluido', 'Hola Edwin, quiero cotizar un resort todo incluido con TravesiasTop.'],
  ['Viaje grupal', 'Hola Edwin, quiero información sobre viajes grupales de TravesiasTop.'],
  ['Europa / circuito', 'Hola Edwin, quiero cotizar un viaje a Europa o circuito con TravesiasTop.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroOverlay" />
        <nav className="nav">
          <a className="brand" href="#top">Travesias<span>Top</span></a>
          <div className="navLinks">
            <a href="#servicios">Servicios</a>
            <a href="#promos">Promociones</a>
            <a href="#grupos">Viajes grupales</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="navCta" href={whatsapp} target="_blank">WhatsApp</a>
        </nav>

        <div id="top" className="heroContent">
          <p className="eyebrow">Agencia de viajes • Vega Alta, Puerto Rico</p>
          <h1>Haz realidad el viaje que siempre has soñado.</h1>
          <p className="subtitle">Cruceros, Europa, resorts todo incluido, viajes grupales y experiencias personalizadas con asesoría de principio a fin.</p>
          <div className="heroButtons">
            <a className="btn primary" href={whatsapp} target="_blank">Cotizar por WhatsApp</a>
            <a className="btn secondary" href="#promos">Ver promociones</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow dark">TravesiasTop</p>
          <h2>Vacaciones diseñadas para que solo tengas que disfrutarlas.</h2>
          <p>Te ayudo a planificar cada detalle de tu viaje con atención personalizada, opciones flexibles y acompañamiento antes y durante tu experiencia.</p>
        </div>
        <div className="stats">
          <div><strong>100%</strong><span>Atención personalizada</span></div>
          <div><strong>24/7</strong><span>Asistencia durante tu viaje</span></div>
          <div><strong>TOP</strong><span>Experiencias memorables</span></div>
        </div>
      </section>

      <section id="servicios" className="section">
        <p className="eyebrow dark">Lo que ofrecemos</p>
        <h2>¿Qué tipo de viaje buscas?</h2>
        <div className="grid services">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="promos" className="section promosSection">
        <p className="eyebrow dark">Ofertas destacadas</p>
        <h2>Promociones para tus próximas vacaciones</h2>
        <div className="grid promos">
          {promos.map((promo) => (
            <article className="promo" key={promo.title}>
              <img src={promo.image} alt={promo.title} />
              <div>
                <span>{promo.tag}</span>
                <h3>{promo.title}</h3>
                <p>{promo.text}</p>
                <strong>{promo.price}</strong>
                <a href={`${whatsappBase}${encodeURIComponent('Hola Edwin, quiero información sobre ' + promo.title + ' con TravesiasTop.')}`} target="_blank">Solicitar información</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="grupos" className="groups">
        <div>
          <p className="eyebrow">Viajes grupales</p>
          <h2>Experiencias para compartir y recordar.</h2>
          <p>Organiza tu grupo con asesoría para itinerarios, pagos, espacios, fechas y coordinación general.</p>
          <a className="btn light" href={`${whatsappBase}${encodeURIComponent('Hola Edwin, quiero organizar un viaje grupal con TravesiasTop.')}`} target="_blank">Organizar mi grupo</a>
        </div>
        <div className="groupList">
          {groupTrips.map((trip) => (
            <div key={trip}><CalendarDays /><span>{trip}</span></div>
          ))}
        </div>
      </section>

      <section className="why">
        <div>
          <p className="eyebrow">Por qué elegirnos</p>
          <h2>Viaja con confianza, respaldo y asesoría real.</h2>
        </div>
        <div className="whyGrid">
          <div><Star /><span>Experiencias seleccionadas</span></div>
          <div><CreditCard /><span>Planes de pago disponibles</span></div>
          <div><ShieldCheck /><span>Asistencia antes y durante el viaje</span></div>
          <div><Sparkles /><span>Servicio cercano y personalizado</span></div>
        </div>
      </section>

      <section className="quickContact">
        <p className="eyebrow dark">Contacto rápido</p>
        <h2>¿Qué deseas cotizar?</h2>
        <div className="quickGrid">
          {quickWhatsapps.map(([label, message]) => (
            <a key={label} href={`${whatsappBase}${encodeURIComponent(message)}`} target="_blank"><CheckCircle2 /> {label}</a>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact">
        <div>
          <p className="eyebrow dark">Solicita tu cotización</p>
          <h2>Hablemos de tu próximo viaje</h2>
          <p>Comunícate con Edwin Maldonado y comienza a planificar cruceros, resorts, Europa, viajes grupales o cualquier destino que tengas en mente.</p>
          <div className="contactList">
            <a href="tel:17874708140"><Phone /> 787-470-8140</a>
            <a href="mailto:info@travesiastop.com"><Mail /> info@travesiastop.com</a>
            <span><MapPin /> Vega Alta, Puerto Rico</span>
          </div>
        </div>
        <form className="form">
          <input placeholder="Nombre completo" />
          <input placeholder="Teléfono" />
          <input placeholder="Destino de interés" />
          <input placeholder="Fecha aproximada" />
          <input placeholder="Cantidad de viajeros" />
          <textarea placeholder="Presupuesto aproximado y detalles del viaje" />
          <a className="btn primary full" href={whatsapp} target="_blank">Enviar por WhatsApp</a>
        </form>
      </section>

      <footer>
        <div>
          <h3>TravesiasTop</h3>
          <p>Contratista Independiente de VMA Vega Alta, PR</p>
          <p>Lic: S-2026-74-CI | CTPR AV-189 | Lic. 260 | CLIA 00666381</p>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/travesiastop" target="_blank" aria-label="Instagram"><span>IG</span></a>
          <a href="https://www.facebook.com/profile.php?id=61579151881063" target="_blank" aria-label="Facebook"><span>FB</span></a>
          <a href="https://www.tiktok.com/@edwinmaldonado942" target="_blank" aria-label="TikTok"><span>TT</span></a>
        </div>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle /></a>
    </main>
  );
}
