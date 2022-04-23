import "./ImageViewer.css";

const ImageViewer = ({ img }) => {
  function showing() {
    document.querySelector("#full-image") &&
      document
        .querySelector("#full-image")
        .setAttribute(
          "src",
          document.querySelector(".images img") &&
            document.querySelector(".images img").getAttribute("src")
        );
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
            onClick={showing}
            src={el}
            alt=""
            width="300"
            height="200"
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
