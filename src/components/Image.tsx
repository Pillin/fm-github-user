

export const IMG = (props: {
  mobile: string;
  desktop: string;
  alt: string;
  style?: any;
}) => (
  <picture style={props.style || {}}>
    <source media="(max-width:768px)" srcset={props.mobile} />
    <source media="(min-width:769px)" srcset={props.desktop} />
    <img
      src={props.desktop}
      alt={props.alt}
      style={{
        objectFit: "cover"
      }}
    />
  </picture>
);

export const Icon = (props: { src: string; alt: string, style?: any }) => (
  <img
    src={props.src}
    alt={props.alt}
    style={{ width: "24px", height: "24px", margin: "0px 24px", ...props.style }}
  />
);
