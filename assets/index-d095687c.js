import{u as h,a as n,s as o,j as t}from"./index-326d19bf.js";import{L as d}from"./Loader-51620b8f.js";import{G as l}from"./iconBase-5879654e.js";const c=()=>{const[e,i]=h(n);return{user:e,loading:i,handleOnClick:()=>{localStorage.removeItem("USER"),n.signOut()}}};function x(e){return l({tag:"svg",attr:{viewBox:"0 0 16 17"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"}}]})(e)}const p=o.main`
  padding: 0 24px;
  margin: 0 auto 20px;
  @media ${e=>e.theme.media.tablet} {
    max-width: 767px;
  }

  @media ${e=>e.theme.media.desktop} {
    padding: 120px 24px 188px;
    max-width: 1068px;
  }
`,g=o.h1`
  margin: 40px auto;
  color: ${e=>e.theme.colors.black};
  font-size: ${e=>e.theme.fontSizes.l};
  font-weight: ${e=>e.theme.fontWeights.bold};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xl};
  }

  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,$=o.ul`
  margin: 0 auto 20px;
  gap: 5px;
  @media ${e=>e.theme.media.mobileMin} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media ${e=>e.theme.media.tablet} {
    max-width: 767px;
    gap: 60px;
  }

  @media ${e=>e.theme.media.desktop} {
    margin: 120px 0 188px;
    max-width: 1068px;
  }
`,r=o.a`
  display: inline-block;
  text-align: center;
  padding: 6px 12px;
  width: 100%;
  height: 35px;
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.radii.normal};
  box-shadow: ${e=>e.theme.boxShadow.shadowCard};
  &.active {
    color: ${e=>e.theme.colors.accent};
    background-color: ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.boxShadow.shadowAccent};
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: ${e=>e.theme.boxShadow.shadowPrimary};
  }
  @media ${e=>e.theme.media.tablet} {
    padding: 12px 20px;
    height: 50px;
    font-size: ${e=>e.theme.fontSizes.m};
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: 15px;
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,s=o.h2`
  margin-bottom: 10px;
  color: ${e=>e.theme.colors.black};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 15px;
    font-size: ${e=>e.theme.fontSizes.l};
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: 20px;
    font-size: ${e=>e.theme.fontSizes.xl};
  }
`,f=o.span`
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.bold};
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 15px;
    font-size: ${e=>e.theme.fontSizes.m};
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: 20px;
    font-size: ${e=>e.theme.fontSizes.xl};
  }
`,m=o.p`
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.bold};
  @media ${e=>e.theme.media.tablet} {
    margin-bottom: 35px;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.desktop} {
    margin-right: 50px;
    font-size: ${e=>e.theme.fontSizes.m};
  }
`,b=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 108px;
  height: 24px;
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.goBack};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: ${e=>e.theme.lineHeights.goBack};
  background-color: ${e=>e.theme.colors.white};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.normal};
  transition: all ${e=>e.theme.transition};
  &:hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    background-color: ${e=>e.theme.colors.primary};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.boxShadow.shadowCard};
    transform: scale(1.1);
  }
`,u=o(x)``,z=()=>{const{loading:e,user:i,handleOnClick:a}=c();return t.jsx("main",{children:e?t.jsx(d,{}):t.jsxs(p,{children:[t.jsxs(b,{onClick:a,children:[t.jsx(u,{}),"SingOut"]}),t.jsxs(g,{children:["Welcome to your dashboard: ",t.jsx("br",{}),t.jsx(f,{children:i.displayName})]}),t.jsxs($,{children:[t.jsxs("div",{children:[t.jsx(s,{children:"Hooray, you are authorized"}),t.jsx(m,{children:"Cucumber Rick gives you a reward:"}),t.jsx(r,{href:"https://youtu.be/3HIQx1eL6tU",children:"Your reward"})]}),t.jsxs("div",{children:[t.jsx(s,{children:"Update your web development today"}),t.jsx(m,{children:"Learn web development using the latest tech"}),t.jsx(r,{href:"https://youtu.be/zkz2HuNR_gk",children:"My reward"})]})]})]})})},k=z;export{k as default};
