/* import { useEffect, useRef } from "react";
import { Typed } from "typed.ts";

interface TypedTextProps {
  strings: string[];
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  className,
}) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed({el: el.current, strings});

    return () => {
      typed.destroy();
    };
  }, [strings]);
  return <span ref={el} className={className}></span>;
}

export default TypedText; */