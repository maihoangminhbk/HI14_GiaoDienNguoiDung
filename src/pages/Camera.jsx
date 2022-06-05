import React from 'react';
import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';

// const Camera = () => {
//   const videoConstraints = {
//     facingMode: 'user',
//   };

//   return (
//     <Webcam videoConstraints={videoConstraints} />
//   );
// };

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Camera = ({ submit }) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );
  return (
    <>
      <Button className="gradient-custom-2 mb-3" onClick={submit}>Check face</Button>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </>
  );
};

export default Camera;

