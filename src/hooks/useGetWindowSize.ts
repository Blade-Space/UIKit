export function useGetWindowSize() {
    return () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
  }