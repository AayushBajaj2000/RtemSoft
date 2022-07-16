import { useCallback, useRef, useEffect } from "react";

const useAnimationFrame = (callback) => {
  const requestRef = useRef(callback);

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        return cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};

export default useAnimationFrame;
