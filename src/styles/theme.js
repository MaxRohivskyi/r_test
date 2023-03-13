export const theme = {
  colors: {
    primary: "rgb(0,176,200)",
    accent: "rgb(182,254,167)",
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(0, 0, 0, 1)",
    searchText: "rgba(0, 0, 0, 0.5)",
    searchIcon: "rgba(0, 0, 0, 0.54)",
    cardTitle: "rgba(0, 0, 0, 0.87)",
    cardText: "rgba(0, 0, 0, 0.6)",
    informationIcon: "rgba(242, 242, 247, 1)",
    infoCharacterTitle: "rgba(8, 31, 50, 1)",
    informationTitle: "rgba(142, 142, 147, 1)",
    informationBorderLine: "rgba(33, 33, 33, 0.08)",
    informationText: "rgba(110, 121, 140, 1)",
  },

  media: {
    mobileMin: "(min-width: 360px)",
    mobileMax: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1020px)",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xs: "14px",
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "32px",
    xxl: "48px",
  },

  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 700,
  },

  lineHeights: {
    goBack: 1.16,
    characterTitle: 1.17,
    informationTitle: 1.2,
    informationText: 1.43,
    body: 1.5,
  },

  letterSpacing: {
    body: "0.15px",
    cardText: "0.25px",
  },

  borders: {
    none: "none",
    normal: "1px solid",
    large: "5px solid",
  },

  radii: {
    none: "0",
    normal: "4px",
    large: "8px",
    round: "50%",
  },

  boxShadow: {
    shadowCard:
      "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
    shadowAccent:
      "0px 1px 5px rgb(182,254,167, 1), 0px 3px 4px rgb(182,254,167, 0.9), 0px 2px 4px rgb(182,254,167, 0.8)",
    shadowPrimary:
      "0px 1px 5px rgb(0,176,200,1), 0px 3px 4px rgb(0,176,200,0.9), 0px 2px 4px rgb(0,176,200,0.8)",
  },

  fonts: {
    goBack: "Karla",
    main: "Roboto",
  },

  transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
};
