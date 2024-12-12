import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 TECAR. Todos los derechos reservados.</p>
      <nav className="footer-nav">
        <a href="#!" className="footer-link">Política de Privacidad</a>
        <a href="#!" className="footer-link">Términos y Condiciones</a>
        <a href="#!" className="footer-link">Contáctanos</a>
      </nav>
    </footer>
  );
};

export default Footer;
