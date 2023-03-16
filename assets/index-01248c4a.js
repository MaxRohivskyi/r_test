import{s as o,j as t,N as d,u as h,a as m,r as c,O as l}from"./index-d44b2552.js";import{L as x}from"./Loader-cdb4ce27.js";import{k as p}from"./react-toastify.esm-9ecedf69.js";const g="/r_test/assets/logo-e8e980e1.png",$=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,f=o.p`
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.m};
  }
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,b=o.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  margin: 0 5px 0 0;
  width: 16px;
  height: 16px;
  background-image: url(${g});
  @media ${e=>e.theme.media.tablet} {
    margin: 0 10px 0 0;
    width: 24px;
    height: 24px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 32px;
    height: 32px;
  }
`,u=()=>t.jsx(t.Fragment,{children:t.jsxs($,{children:[t.jsx(b,{}),t.jsx(f,{children:"Rick & Morty"})]})}),j=o.div`
  display: none;
  @media ${e=>e.theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    background-color: ${e=>e.theme.colors.primary};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.primary};
    border-radius: ${e=>e.theme.radii.normal};
    box-shadow: ${e=>e.theme.boxShadow.shadowCard};
    &.active {
      color: ${e=>e.theme.colors.accent};
      background-color: ${e=>e.theme.colors.primary};
      box-shadow: ${e=>e.theme.boxShadow.shadowAccent};
    }
  }
`,w=o.img`
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.colors.accent};
  border: ${e=>e.theme.borders.large};
  border-radius: ${e=>e.theme.radii.round};
  transition: all ${e=>e.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: ${e=>e.theme.boxShadow.shadowPrimary};
  }
  @media ${e=>e.theme.media.tablet} {
    margin: 0 10px 0 0;
    width: 30px;
    height: 30px;
  }
  @media ${e=>e.theme.media.desktop} {
    width: 40px;
    height: 40px;
  }
`,s=o.div`
  color: ${e=>e.theme.colors.accent};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.normal};
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.s};
  }
`,y=({user:e})=>{const{photoURL:a,displayName:i,email:n}=e;return t.jsxs(j,{children:[t.jsx(w,{src:a,alt:"avatar",referrerPolicy:"no-referrer"}),t.jsxs("div",{children:[t.jsx(s,{children:i}),t.jsx(s,{children:n})]})]})},r=o(d)`
  padding: 6px 12px;
  margin-right: 15px;
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.bold};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.radii.normal};
  box-shadow: ${e=>e.theme.boxShadow.shadowCard};
  &:not(:last-child) {
    margin-right: 15px;
  }
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

    font-size: ${e=>e.theme.fontSizes.m};
  }
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.l};
  }
`,k=()=>{const[e,a]=h(m);return t.jsxs("nav",{children:[t.jsx(r,{to:"/",children:"Home"}),!e&&t.jsx(r,{to:"/auth",children:"Join now"}),e&&t.jsxs(t.Fragment,{children:[t.jsx(r,{to:"/dashboard",children:"Hooray"}),t.jsx(y,{user:e})]})]})},S=o.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin: 0 auto;
  > nav {
    display: flex;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 24px 24px 0;
    width: 1068px;
  }
`,z=()=>t.jsx(t.Fragment,{children:t.jsxs(S,{children:[t.jsx(u,{}),t.jsx(k,{})]})});const v=()=>t.jsxs(t.Fragment,{children:[t.jsx(z,{}),t.jsxs(c.Suspense,{fallback:t.jsx(x,{}),children:[t.jsx(p,{}),t.jsx(l,{})]})]}),W=v;export{W as default};
