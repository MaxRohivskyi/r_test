import{s as o,G as c,F as g,j as t,b as a,a as r}from"./index-d6ec8ce6.js";import{G as h}from"./iconBase-ebe5d37f.js";function p(e){return h({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}function x(e){return h({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"}}]})(e)}const f=o.div`
  padding: 20px;
  border-radius: ${e=>e.theme.radii.large};
  box-shadow: ${e=>e.theme.boxShadow.shadowPrimary};
  @media ${e=>e.theme.media.tablet} {
    padding: 30px;
  }
  @media ${e=>e.theme.media.desktop} {
    padding: 40px;
  }
`,$=o.h2`
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.fontSizes.l};
  font-weight: ${e=>e.theme.fontWeights.semiBold};

  @media ${e=>e.theme.media.tablet} {
    font-size: ${e=>e.theme.fontSizes.xl};
  }
  @media ${e=>e.theme.media.desktop} {
    font-size: ${e=>e.theme.fontSizes.xxl};
  }
`,u=o.h3`
  margin: 10px 0;
  color: ${e=>e.theme.colors.black};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.normal};

  @media ${e=>e.theme.media.tablet} {
    margin: 20px 0;
    font-size: ${e=>e.theme.fontSizes.s};
  }
  @media ${e=>e.theme.media.desktop} {
    margin: 20px 0;
    font-size: ${e=>e.theme.fontSizes.m};
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;

  @media ${e=>e.theme.media.tablet} {
    gap: 8px;
  }
  @media ${e=>e.theme.media.desktop} {
    gap: 10px;
  }
`,s=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 50px;
  color: ${e=>e.theme.colors.black};
  font-family: ${e=>e.theme.fonts.goBack};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.bold};
  line-height: ${e=>e.theme.lineHeights.goBack};
  background-color: ${e=>e.theme.colors.primary};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.large};
  transition: all ${e=>e.theme.transition};
  &:hover,
  :focus {
    color: ${e=>e.theme.colors.white};
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.primary};
    box-shadow: ${e=>e.theme.boxShadow.shadowCard};
    transform: scale(1.1);
  }
  @media ${e=>e.theme.media.tablet} {
    height: 60px;
    font-size: ${e=>e.theme.fontSizes.l};
  }
  @media ${e=>e.theme.media.desktop} {
    height: 70px;
    font-size: ${e=>e.theme.fontSizes.xl};
  }
`,w=o(p)`
  margin: 0 5px 0 0;
`,z=o(x)`
  margin: 0 5px 0 0;
  color: ${e=>e.theme.colors.facebook}; ;
`,S=()=>{const e=new c,d=async()=>{try{const n=(await a(r,e)).user.uid;localStorage.setItem("USER",n)}catch(i){console.log(i)}},l=new g,m=async()=>{try{const n=(await a(r,l)).user.uid;localStorage.setItem("USER",n)}catch(i){console.log(i)}};return t.jsx(t.Fragment,{children:t.jsxs(f,{children:[t.jsx($,{children:"Join Today"}),t.jsx(u,{children:"Sing in with one of the providers"}),t.jsxs(b,{children:[t.jsxs(s,{onClick:d,children:[t.jsx(w,{}),"Sign in with Google"]}),t.jsxs(s,{onClick:m,children:[t.jsx(z,{}),"Sign in with Facebook"]})]})]})})},k=o.main`
  padding: 32px 24px 223px 24px;
  margin: 0 auto;
  @media ${e=>e.theme.media.mobileMin} {
    width: 100%;
  }

  @media ${e=>e.theme.media.tablet} {
    padding: 75px 150px;
    max-width: 767px;
  }

  @media ${e=>e.theme.media.desktop} {
    padding: 100px 250px;
    max-width: 1068px;
  }
`,v=()=>t.jsx(k,{children:t.jsx(S,{})}),j=v;export{j as default};
