import "bootstrap/dist/css/bootstrap.min.css";
function ImageCard({ item }) {
  let tags = item.tags.split(",");

  return (
    <>
      <div className="card col-xl-3 col-lg-4 col-sm-6 col-12 p-2 my-2">
        <div className="w-100" style={{ height: "210px" }}>
          <img
            src={item.webformatURL}
            className="card-img-top rounded w-100 h-100 object-fit-cover"
            alt="..."
          />
        </div>
        <div className="card-body w-100 p-10">
          <h5 className="card-title mb-3 ">Photo by {item.user}</h5>
          <ul className="list-group mb-3">
            <li className="list-group-item">
              <strong>Views:</strong> {item.views}
            </li>
            <li className="list-group-item">
              <strong>Downloads:</strong> {item.downloads}
            </li>
            <li className="list-group-item">
              <strong>Likes:</strong> {item.likes}
            </li>
          </ul>
          {tags.map((tag, index) => (
            <a
              key={index}
              className="btn btn-primary my-1 m-1 py-1 px-2 "
              href="#"
              role="button"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageCard;
