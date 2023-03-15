import{s as i,j as t,d as p,g as $,r as d,i as j,f as u}from"./index-855011f2.js";import{G as b}from"./iconBase-af38a13d.js";import{L as w}from"./Loader-3af67ec5.js";import{Q as C}from"./react-toastify.esm-ffc341bc.js";import{a as I}from"./rickandmorty-api-43a2f9f2.js";const S=i.main`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,E=i.img`
  margin: 73px 0 0 0;
  width: 150px;
  height: 148px;
  color: ${e=>e.theme.colors.informationIcon};
  border: ${e=>e.theme.borders.large};
  border-radius: ${e=>e.theme.radii.round};
  transition: all ${e=>e.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: ${e=>e.theme.boxShadow.shadowPrimary};
  }
  @media ${e=>e.theme.media.tablet} {
    width: 240px;
    height: 238px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 300px;
    height: 300px;
  }
`,T=i.h2`
  margin: 34px 0 0 0;
  color: ${e=>e.theme.colors.infoCharacterTitle};
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: ${e=>e.theme.lineHeights.informationTitle};
  @media ${e=>e.theme.media.tablet} {
    margin: 34px 0 0 0;
    font-size: ${e=>e.theme.fontSizes.xxl};
    font-weight: ${e=>e.theme.fontWeights.normal};
    line-height: ${e=>e.theme.lineHeights.characterTitle};
  }
  @media ${e=>e.theme.media.desktop} {
    margin: 16px 0 0 0;
  }
`,k=i.h3`
  margin: 34.37px 0 0 0;
  color: ${e=>e.theme.colors.informationTitle};
  font-size: ${e=>e.theme.fontSizes.l};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: ${e=>e.theme.lineHeights.informationTitle};
  @media ${e=>e.theme.media.tablet} {
    margin: 40px 0 0 0;
  }
  @media ${e=>e.theme.media.desktop} {
    margin: 48px 0 0 0;
  }
`,z=i.ul`
  margin: 16px 0 0 0;
  width: 100%;
  @media ${e=>e.theme.media.mobileMax} {
    margin: 40px 0 0 0;
    width: 312px;
  }
  @media ${e=>e.theme.media.tablet} {
    margin: 40px 0 0 0;
    width: 367px;
  }
  @media ${e=>e.theme.media.desktop} {
    margin: 48px 0 0 0;
    width: 413px;
  }
`,h=i.li`
  margin: 9px 0 0 16px;
`,m=i.h4`
  color: ${e=>e.theme.colors.infoCharacterTitle};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
`,c=i.p`
  margin: 9px 0 11px 0;
  color: ${e=>e.theme.colors.informationText};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: ${e=>e.theme.lineHeights.informationText};
  letter-spacing: ${e=>e.theme.letterSpacing.cardText};
`,l=i.div`
  width: 100%;
  color: ${e=>e.theme.colors.informationBorderLine};
  border-bottom: ${e=>e.theme.borders.normal};
`,B=({character:e})=>{const{image:a,name:r,gender:o,status:n,species:g,origin:s,type:f}=e;return t.jsxs(S,{children:[t.jsxs(y,{children:[t.jsx(E,{src:a,alt:r}),t.jsx(T,{children:r})]}),t.jsx(k,{children:"Informations"}),t.jsxs(z,{children:[t.jsxs(h,{children:[t.jsx(m,{children:"Gender"}),t.jsx(c,{children:o}),t.jsx(l,{})]}),t.jsxs(h,{children:[t.jsx(m,{children:"Status"}),t.jsx(c,{children:n}),t.jsx(l,{})]}),t.jsxs(h,{children:[t.jsx(m,{children:"Specie"}),t.jsx(c,{children:g}),t.jsx(l,{})]}),t.jsxs(h,{children:[t.jsx(m,{children:"Origin"}),t.jsx(c,{children:s.name}),t.jsx(l,{})]}),t.jsxs(h,{children:[t.jsx(m,{children:"Type"}),t.jsx(c,{children:f===""?"unknown":f}),t.jsx(l,{})]})]})]})};function v(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"}}]}]})(e)}const L=i.button`
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
`,D=i(v)``,H=()=>{const e=p(),a=$(),r=()=>{var o,n;(n=(o=e==null?void 0:e.state)==null?void 0:o.from)!=null&&n.location?a(e.state.from.location):a("/")};return t.jsxs(L,{type:"button",onClick:r,children:[t.jsx(D,{size:"24"}),"GO BACK"]})},G=i.main`
  padding: 32px 24px 85px 24px;
  margin: 0 auto;
  @media ${e=>e.theme.media.mobileMin} {
    width: 100%;
  }

  @media ${e=>e.theme.media.tablet} {
    max-width: 767px;
  }

  @media ${e=>e.theme.media.desktop} {
    padding: 32px 24px 142px;
    max-width: 1068px;
  }
`,x={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},W=()=>{const[e,a]=d.useState(),[r,o]=d.useState(""),{characterId:n}=j();return d.useEffect(()=>{(async()=>{try{o(x.PENDING);const s=await I(n);a(s),o(x.RESOLVED)}catch(s){o(x.REJECTED),console.log(s.message),C.error("Something broke, please try again!")}})()},[n]),t.jsxs(G,{children:[r==="pending"&&t.jsx(w,{}),r==="resolved"&&t.jsxs(t.Fragment,{children:[t.jsx(H,{}),t.jsx(B,{character:e})]}),r==="rejected"&&t.jsx(u,{})]})},A=W;export{A as default};
