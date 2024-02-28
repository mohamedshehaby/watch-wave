import React from "react";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
}

function Heading({ as, children }: { as: string; children: string }) {
  if (as === "h1") return <h1></h1>;
  if (as === "h2")
    return (
      <h2 className="text-white  text-md md:text-xl lg:text-2xl font-semibold">
        {children}
      </h2>
    );
  if (as === "h3") return <h3></h3>;
  if (as === "h4") return <h4></h4>;
  if (as === "h5") return <h5></h5>;
  if (as === "h6") return <h6></h6>;

  return <div></div>;
}

export default Heading;
