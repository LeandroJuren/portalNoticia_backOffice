import React from 'react';
import styled from 'styled-components';

//FOOTER PRONTO

const FooterWrapper = styled.footer`
  margin-top: 15px;
  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  a {
    color: #ffffff;
    &:hover {
      color: #ff0000;
    }
  }
  li {
    margin-left: 15px;
    margin-right: 15px;
    a {
      display: block;
    }
  }
  svg {
    display: flex;
    justify-content: center;
    width: 35px;
    height: 35px;
    fill: currentColor;
    color: inherit;
    * {
      fill: inherit;
      color: inherit;
    }
  }
`;

function Footer(props) {
  const socialNetworks = [
    {
      name: 'youtube', url: 'https://www.youtube.com',
      svgPath: '<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#FF0000"/>',
    },
    {
      name: 'instagram', url: 'https://www.instagram.com',
      svgPath: '<path fill-rule="evenodd" fill="inherit" clip-rule="evenodd" d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/>',
    },
    {
      name: 'linkedin', url: 'https://www.linkedin.com/in',
      svgPath: '<path fill-rule="evenodd" clip-rule="evenodd" d="M.936 2.184C.5 3.04.5 4.16.5 6.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 001.748 1.748C3.54 20 4.66 20 6.9 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 001.748-1.748c.436-.856.436-1.976.436-4.216V6.4c0-2.24 0-3.36-.436-4.216A4 4 0 0018.316.436C17.46 0 16.34 0 14.1 0H6.9C4.66 0 3.54 0 2.684.436A4 4 0 00.936 2.184zm3.73 4.483v9.166h2.5V6.667h-2.5zM4.459 4.14c0 .812.654 1.47 1.459 1.47.806 0 1.458-.658 1.458-1.47 0-.812-.653-1.47-1.458-1.47-.805 0-1.458.658-1.458 1.47zm10.209 11.693h2.5v-5.632c0-4.378-4.67-4.219-5.834-2.064v-1.47h-2.5v9.166h2.5v-4.67c0-2.594 3.334-2.806 3.334 0v4.67z"/>',
    },
    {
      name: 'github', url: 'https://www.github.com',
      svgPath: '<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM1 10.2275C1 5.13166 5.02979 1 10 1C14.9702 1 19 5.13166 19 10.2275C19 14.3029 16.4237 17.7609 12.8499 18.9831C12.3939 19.0732 12.2302 18.786 12.2302 18.5404C12.2302 18.4395 12.2316 18.2626 12.2333 18.0261C12.2369 17.5499 12.2423 16.8324 12.2423 16.0082C12.2423 15.1477 11.9556 14.5867 11.6315 14.3006C13.6365 14.0719 15.7415 13.2913 15.7415 9.74654C15.7415 8.73841 15.3932 7.91613 14.8164 7.27014C14.9087 7.03696 15.2185 6.09923 14.7263 4.82809C14.7263 4.82809 13.9705 4.57916 12.2533 5.77427C11.5348 5.5687 10.7646 5.46621 9.99998 5.46282C9.23479 5.46621 8.46518 5.56759 7.74779 5.77315C6.02734 4.57916 5.27257 4.82697 5.27257 4.82697C4.78204 6.09698 5.09185 7.03584 5.18359 7.27014C4.60902 7.91613 4.258 8.73839 4.258 9.74654C4.258 13.2823 6.35968 14.0742 8.35754 14.3074C8.10096 14.5371 7.86805 14.9449 7.78625 15.5397C7.27428 15.7762 5.97021 16.184 5.16711 14.7737C5.16711 14.7737 4.69137 13.8872 3.78775 13.823C3.78775 13.823 2.90777 13.8117 3.7257 14.384C3.7257 14.384 4.31513 14.6678 4.72491 15.7334C4.72491 15.7334 5.25391 17.3791 7.75659 16.8215C7.75887 17.2215 7.76219 17.61 7.76486 17.9218C7.76732 18.2106 7.76923 18.4336 7.76923 18.5393C7.76923 18.7826 7.60498 19.0676 7.15509 18.9831C3.5785 17.7632 1 14.3051 1 10.2275Z" fill="#FF0000"/>',
    },
  ]

  return (
    <FooterWrapper>
      <div className="bg-black">
        <ul>
          {socialNetworks
            .filter((socialNetwork) => Boolean(props[socialNetwork.name]))
            .map((socialNetwork) => (
              <li key={socialNetwork.url}>
                <a href={`${socialNetwork.url}/${props[socialNetwork.name]}`} className="classA" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={socialNetwork.svgPath} className="mt-2 flex items-center">
                    <title>
                      {socialNetwork.name}
                    </title>
                    <g dangerouslySetInnerHTML={{ __html: socialNetwork.svgPath }} />
                  </svg>
                </a>
              </li>
            ))}
        </ul>
        <p className="align-middle">
          Nos sigam nas redes sociais! ;)<br />
          Desenvolvedor: <a href="https://www.instagram.com/f_lucas23" target="_blank">@f_lucas23</a>
        </p>
      </div>
    </FooterWrapper>
  );
}
export default Footer;