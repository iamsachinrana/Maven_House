import React, { useState } from "react";

const DragDrop = ({ create }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  return (
    <div className="wrapper  flex justify-center items-center bg-white ">
      <label
        htmlFor="upload_document"
        className="drop_zone w-full min-h-[200px]  flex justify-center cursor-pointer items-center border-dashed rounded-xl border-[1.6px] border-theme-input "
        onDragOver={handleOndragOver}
        onDrop={handleOndrop}
      >
        {previewUrl ? (
          <div className="image flex flex-col gap-2 items-center">
            <img
              className="w-[150px] h-[150px] object-cover object-center"
              src={previewUrl}
              alt="image"
            />
            <span> {image.name} </span>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 items-center w-full">
              <img src="/images/icon_image/upload.png" alt="" />
              <p>
                Drag and drop an image, or <strong>Browse</strong>
              </p>
              <span className="text-theme-primary/30">
                Max 6MB each (12MB for videos)
              </span>
              {create && (
                <ul className="flex list-[disc] lg:justify-between justify-around w-full max-w-[400px] mx-auto">
                  <li>
                    <span className="text-13 text-theme-primary/50 font-semibold">
                      Aspect Ratio 16:9
                    </span>
                  </li>
                  <li>
                    <span className="text-13 text-theme-primary/50 font-semibold">
                      Aspect Ratio 16:9
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}
      </label>
      <input type="file" hidden name="document" id="upload_document" />
    </div>
  );
};
export default DragDrop;
