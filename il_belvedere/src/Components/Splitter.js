import "./Splitter.css";

const Splitter = ({ icon, title, subtitle, subtitleServices }) => {
  return (
    <div className="splitter-container">
      <div className="splitter-bar">{icon}</div>
      <div className="splitter-title">{title}</div>
      <div className="splitter-subtitle">{subtitle}</div>
      <div className="splitter-subtitle-services">
        {subtitleServices &&
          subtitleServices.map((el) => {
            <div>
              {el.icon}
              {el.label}
            </div>;
          })}
      </div>
    </div>
  );
};

export default Splitter;
