import styled, { createGlobalStyle } from "styled-components";

const black = "#000000";
const white = "#c3d0e3";
const random = "#0748b0";
const bodyL = "#313133";
const bodyD = "#41a3ff";

const bannerLinear = {
  light: {
    background: "rgba(0, 77, 136, 0.5)",
    backgroundImg: `linear-gradient(
        to top, 
        rgba(0, 77, 136, 0.9) 0,
        rgba(0, 77, 136, 0.1) 50%,
        rgba(0, 77, 136, 0.9) 100%
      )`,
  },
  dark: {
    background: "rgba(0, 0, 0, 0.4)",
    backgroundImg: `linear-gradient(
    to top, 
    rgba(0, 0, 0, 0.9) 0,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 100%
  )`,
  },
};

const opacityWhiteAndDark = { light: "rgba(223, 223, 223, 0.6)", dark: black };
const greenAndDark = { light: random, dark: black };
const whiteAndDark = { light: white, dark: black };
const fontDarkAndWhite = { light: black, dark: white };
const backgroundSmoothAndDark = {
  light: "rgba(255, 218, 117, 0.8)",
  dark: "rgba(41, 41, 41, 0.8)",
};
const textBackgroundRgba = {
  light: "rgba(189, 39, 28, 0.5)",
  dark: "rgba(0, 0, 0, .8)",
};

export function disableBodyScroll() {
  const element = document.querySelector("#appBody");
  element.classList.add("stop-scroll");
}

export function enableBodyScroll() {
  const element = document.querySelector("#appBody");
  element.classList.remove("stop-scroll");
}

export const lightTheme = {
  body: bodyL,
  opacityWhiteAndDark: opacityWhiteAndDark.light,
  fontDarkAndWhite: fontDarkAndWhite.light,
  greenAndDark: greenAndDark.light,
  darkAndGreen: greenAndDark.dark,
  whiteAndDark: whiteAndDark.light,
  darkAndWhite: whiteAndDark.dark,
  backgroundSmoothAndDark: backgroundSmoothAndDark.light,
  backgroundDarkAndSmooth: backgroundSmoothAndDark.dark,
  textBackgroundRgba: textBackgroundRgba.dark,
  bannerLinear: bannerLinear.dark.backgroundImg,
  bannerBg: bannerLinear.dark.background,
};

export const darkTheme = {
  body: bodyD,
  opacityWhiteAndDark: opacityWhiteAndDark.dark,
  fontDarkAndWhite: fontDarkAndWhite.dark,
  greenAndDark: greenAndDark.dark,
  darkAndGreen: greenAndDark.light,
  whiteAndDark: whiteAndDark.dark,
  darkAndWhite: whiteAndDark.light,
  backgroundSmoothAndDark: backgroundSmoothAndDark.dark,
  backgroundDarkAndSmooth: backgroundSmoothAndDark.light,
  textBackgroundRgba: textBackgroundRgba.dark,
  bannerLinear: bannerLinear.light.backgroundImg,
  bannerBg: bannerLinear.light.background,
};

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${(p) => p.theme.body};
        position: relative;
        line-height: 1.4;
    }
`;
export const StyledApp = styled.div`
  color: ${(props) => props.theme.whiteAndDark};
`;
export const GreenAndDark = styled.div`
  background: ${(props) => props.theme.greenAndDark};
`;
export const DarkAndGreen = styled.div`
  background: ${(props) => props.theme.darkAndGreen};
`;
export const ProfileDiv = styled.div`
  background: ${(props) => props.theme.greenAndDark};
  color: ${(p) => p.theme.darkAndGreen};
`;
export const ProfileSomeInfo = styled.div`
  background: ${(p) => p.theme.backgroundSmoothAndDark};
  color: ${(p) => p.theme.darkAndWhite};
`;
export const P = styled.p`
  background: ${(p) => p.theme.backgroundSmoothAndDark};
`;
export const ImgBorder = styled.img`
  border: 6px solid ${(p) => p.theme.greenAndDark};
  border-radius: 999px;
`;
export const ImgBorderReverse = styled.img`
  border: ${(p) => p.theme.darkAndGreen};
`;
export const ImageBG = styled.img`
  background: ${(p) => p.theme.darkAndGreen};
`;
export const CommonButton = styled.button`
  background: ${(p) => p.theme.darkAndGreen};
  font-weight: 700;
`;
export const CommonButton2 = styled.button`
  background: ${(p) => p.theme.darkAndGreen};
`;
export const BannerBg = styled.div`
  background: ${(p) => p.theme.bannerBg};
  background-image: ${(p) => p.theme.bannerLinear};
`;
export const ProfileEach = styled.div`
  background: ${(props) => props.theme.darkAndGreen};
  color: #fff;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
`;
export const ProfileId = styled.h3`
  color: #fff;
  padding: 2px 4px;
  margin: 8px;
`;
export const CoursesBg = styled.div`
  background: ${(p) => p.theme.body};
`;
