'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from 'react';

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      {isMounted && <Player autoplay loop src={path}></Player>}
    </div>
  );
};

export default ShowLottie;
