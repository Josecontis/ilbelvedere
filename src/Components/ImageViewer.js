import "./ImageViewer.css";

const ImageViewer = ({ img }) => {

  function showing(el) {
    document.querySelector("#full-image") &&
      document.querySelector("#full-image").setAttribute("src", el);
    if (document.getElementById("image-viewer"))
      document.getElementById("image-viewer").style.display = "block";
  }

  function hiding() {
    document.getElementById("image-viewer").style.display = "none";
  }

  return (
    <>
      <div className="images">
        {img.map((el, index) => (
          <img
            key={index}
            onClick={()=>showing(el)}
            src={el}
            alt=""
            width="200"
            height="300"
          />
        ))}
      </div>

      <div id="image-viewer">
        <span className="close" onClick={hiding}>
          &times;
        </span>
        <img alt="" className="modal-content" id="full-image" />
      </div>
    </>
  );
};

export default ImageViewer;
