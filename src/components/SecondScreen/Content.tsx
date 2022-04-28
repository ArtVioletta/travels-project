import React from "react";

function Content() {
  const targetRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const callbackFunction = (entries: any) => {
    console.log(entries);
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = React.useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);
}

export default Content;
