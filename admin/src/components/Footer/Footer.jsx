const Footer = () => {
  return (
    <footer
      className="sa-app__footer d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "4rem",
        backgroundColor: "white",
        fontSize: "1.2rem",
        zIndex: "1000",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)"
      }}
    >
      copyright © 2024 - Baby Mania
    </footer>
  );
};

export default Footer;
