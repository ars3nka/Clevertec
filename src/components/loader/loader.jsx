import Lottie from 'react-lottie';

import * as animationData from './loader.json';

export const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={69} height={69} />
    </div>
  );
};
