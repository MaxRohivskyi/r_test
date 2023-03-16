import{r as x,f as u,s as i,j as t,d as j,g as b,e as w}from"./index-d44b2552.js";import{Q as C}from"./react-toastify.esm-9ecedf69.js";import{a as I,p as a}from"./index-ef5ea8c1.js";import{G as y}from"./iconBase-89ca4df2.js";import{L as S}from"./Loader-cdb4ce27.js";const g={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},T=()=>{const[e,r]=x.useState(),[s,o]=x.useState(""),{characterId:n}=u();return x.useEffect(()=>{(async()=>{try{o(g.PENDING);const h=await I(n);r(h),o(g.RESOLVED)}catch(h){o(g.REJECTED),console.log(h.message),C.error("Something broke, please try again!")}})()},[n]),{character:e,status:s}},E=i.main`
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,k=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,z=i.img`
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
`,B=i.h2`
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
`,v=i.h3`
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
`,L=i.ul`
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
`,m=i.li`
  margin: 9px 0 0 16px;
`,c=i.h4`
  color: ${e=>e.theme.colors.infoCharacterTitle};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
`,d=i.p`
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
`,$=({character:e})=>{const{image:r,name:s,gender:o,status:n,species:p,origin:h,type:f}=e;return t.jsxs(E,{children:[t.jsxs(k,{children:[t.jsx(z,{src:r,alt:s}),t.jsx(B,{children:s})]}),t.jsx(v,{children:"Informations"}),t.jsxs(L,{children:[t.jsxs(m,{children:[t.jsx(c,{children:"Gender"}),t.jsx(d,{children:o}),t.jsx(l,{})]}),t.jsxs(m,{children:[t.jsx(c,{children:"Status"}),t.jsx(d,{children:n}),t.jsx(l,{})]}),t.jsxs(m,{children:[t.jsx(c,{children:"Specie"}),t.jsx(d,{children:p}),t.jsx(l,{})]}),t.jsxs(m,{children:[t.jsx(c,{children:"Origin"}),t.jsx(d,{children:h.name}),t.jsx(l,{})]}),t.jsxs(m,{children:[t.jsx(c,{children:"Type"}),t.jsx(d,{children:f===""?"unknown":f}),t.jsx(l,{})]})]})]})};$.propTypes={character:a.shape({name:a.string.isRequired,gender:a.string.isRequired,status:a.string.isRequired,species:a.string.isRequired,origin:a.object.isRequired,type:a.string.isRequired})};function R(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"}}]}]})(e)}const D=i.button`
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
`,H=i(R)``,G=()=>{const e=j(),r=b(),s=()=>{var o,n;(n=(o=e==null?void 0:e.state)==null?void 0:o.from)!=null&&n.location?r(e.state.from.location):r("/")};return t.jsxs(D,{type:"button",onClick:s,children:[t.jsx(H,{size:"24"}),"GO BACK"]})},W=i.main`
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
`,q=()=>{const{character:e,status:r}=T();return t.jsxs(W,{children:[r==="pending"&&t.jsx(S,{}),r==="resolved"&&t.jsxs(t.Fragment,{children:[t.jsx(G,{}),t.jsx($,{character:e})]}),r==="rejected"&&t.jsx(w,{})]})},A=q;export{A as default};
