import * as React from 'react'
import {
  FaMicrosoft,
  FaTeamspeak,
  FaCloud,
} from 'react-icons/fa'

type SvgProps = React.SVGProps<SVGSVGElement>

/**
 * These wrappers keep your existing prop signature (React.SVGProps<SVGSVGElement>),
 * so you don't need to change any calling code. Tailwind sizing like `w-10 h-10`
 * works via `className`.
 */

export const MicrosoftOfficeIcon: React.FC<SvgProps> = ({ className, ...props }) => (
  <FaMicrosoft
    aria-label="Microsoft Office"
    role="img"
    className={className}
    {...props}
  />
)

export const MicrosoftTeamsIcon: React.FC<SvgProps> = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    aria-label="Microsoft Teams"
    role="img"
    className={className}
    {...props}
  >
    <path fill="#5059c9" d="M44,22v8c0,3.314-2.686,6-6,6s-6-2.686-6-6V20h10C43.105,20,44,20.895,44,22z M38,16	c2.209,0,4-1.791,4-4c0-2.209-1.791-4-4-4s-4,1.791-4,4C34,14.209,35.791,16,38,16z"/>
    <path fill="#7b83eb" d="M35,22v11c0,5.743-4.841,10.356-10.666,9.978C19.019,42.634,15,37.983,15,32.657V20h18	C34.105,20,35,20.895,35,22z M25,17c3.314,0,6-2.686,6-6s-2.686-6-6-6s-6,2.686-6,6S21.686,17,25,17z"/>
    <circle cx="25" cy="11" r="6" fill="#7b83eb"/>
    <path d="M26,33.319V20H15v12.657c0,1.534,0.343,3.008,0.944,4.343h6.374C24.352,37,26,35.352,26,33.319z" opacity=".05"/>
    <path d="M15,20v12.657c0,1.16,0.201,2.284,0.554,3.343h6.658c1.724,0,3.121-1.397,3.121-3.121V20H15z" opacity=".07"/>
    <path d="M24.667,20H15v12.657c0,0.802,0.101,1.584,0.274,2.343h6.832c1.414,0,2.56-1.146,2.56-2.56V20z" opacity=".09"/>
    <linearGradient id="DqqEodsTc8fO7iIkpib~Na" x1="4.648" x2="23.403" y1="14.648" y2="33.403" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#5961c3"/>
      <stop offset="1" stopColor="#3a41ac"/>
    </linearGradient>
    <path fill="url(#DqqEodsTc8fO7iIkpib~Na)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"/>
    <path fill="#fff" d="M18.068,18.999H9.932v1.72h3.047v8.28h2.042v-8.28h3.047V18.999z"/>
  </svg>
)

export const MicrosoftAzureIcon: React.FC<SvgProps> = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    aria-label="Microsoft Azure"
    role="img"
    className={className}
    {...props}
  >
    <path fill="#035bda" d="M46 40L29.317 10.852 22.808 23.96 34.267 37.24 13 39.655zM13.092 18.182L2 36.896 11.442 35.947 28.033 5.678z"/>
  </svg>
)

/**
 * Copilot:
 * Using custom Microsoft Copilot SVG icon
 */
export const MicrosoftCopilotIcon: React.FC<SvgProps> = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    aria-label="Microsoft Copilot"
    role="img"
    className={className}
    {...props}
  >
    <linearGradient id="lfK0TEarAX_CVWY9eruXya" x1="18.179" x2="37.232" y1="6.205" y2="21.237" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#0837c4"/>
      <stop offset=".242" stopColor="#0b4bce"/>
      <stop offset=".738" stopColor="#1071df"/>
      <stop offset="1" stopColor="#127fe6"/>
    </linearGradient>
    <path fill="url(#lfK0TEarAX_CVWY9eruXya)" d="M21.676,19.303c0,0,0.814-3.255,4.691-3.399h11.777c0,0-3.399-0.287-4.069-4.404	c-0.67-4.117-2.441-5.745-4.931-5.793c-2.489-0.048-3.638,2.585-3.926,3.495C24.931,10.112,21.676,19.303,21.676,19.303z"/>
    <linearGradient id="lfK0TEarAX_CVWY9eruXyb" x1="8.61" x2="20.866" y1="36.864" y2="1.503" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#f8c704"/>
      <stop offset=".065" stopColor="#f1c609"/>
      <stop offset=".163" stopColor="#dcc319"/>
      <stop offset=".281" stopColor="#babe31"/>
      <stop offset=".415" stopColor="#8cb754"/>
      <stop offset=".561" stopColor="#50ae7f"/>
      <stop offset=".592" stopColor="#43ac89"/>
      <stop offset=".617" stopColor="#41ad93"/>
      <stop offset=".737" stopColor="#37b0be"/>
      <stop offset=".845" stopColor="#30b2dd"/>
      <stop offset=".936" stopColor="#2cb4f0"/>
      <stop offset="1" stopColor="#2ab4f7"/>
    </linearGradient>
    <path fill="url(#lfK0TEarAX_CVWY9eruXyb)" d="M19.234,29.261l6.032-20.25	c0,0,1.149-3.399,3.878-3.303H14.016c0,0-2.585,0-4.452,2.968c0,0-2.872,3.734-4.548,11.394s-1.005,8.09-1.005,8.09	s-0.431,4.213,6.032,3.878h4.979C15.021,32.037,18.037,32.085,19.234,29.261z"/>
    <path d="M28.887,6.707l2.471-0.404c-0.596-0.358-1.31-0.544-2.05-0.584l-0.199-0.011 c-0.004,0-0.007,0-0.011-0.001c-0.016,0-0.031,0.002-0.048,0.002c-0.175-0.001-0.34,0.015-0.502,0.039 c-0.069,0.01-0.136,0.023-0.202,0.037c-0.105,0.023-0.206,0.052-0.305,0.084c-0.452,0.149-0.848,0.386-1.186,0.677 c-0.117,0.102-0.225,0.209-0.329,0.32c-0.761,0.811-1.182,1.833-1.34,2.334c-0.039,0.125-0.139,0.416-0.274,0.808l-2.218,7.444 c0.086-0.092,0.198-0.179,0.297-0.269c0.056-0.051,0.108-0.103,0.168-0.152c0.088-0.072,0.18-0.139,0.277-0.208 c0.166-0.118,0.341-0.231,0.537-0.333c0.025-0.013,0.043-0.03,0.069-0.043l2.131-7.154C26.174,9.296,27.066,6.787,28.887,6.707z" opacity=".05"/>
    <path d="M28.864,6.207l1.476-0.34c0,0-0.686-0.176-1.252-0.155c-0.42,0.015-0.802,0.072-1.147,0.203	c-0.027,0.011-0.056,0.019-0.083,0.031c-0.081,0.033-0.159,0.073-0.236,0.112c-0.057,0.03-0.115,0.059-0.17,0.091	c-0.048,0.028-0.094,0.058-0.141,0.088c-0.085,0.056-0.169,0.114-0.249,0.176c-0.017,0.013-0.033,0.026-0.049,0.039	c-0.429,0.346-0.773,0.767-1.039,1.168c-0.006,0.009-0.012,0.017-0.017,0.026c-0.029,0.044-0.053,0.086-0.08,0.13	c-0.342,0.562-0.556,1.104-0.658,1.428c-0.018,0.058-0.05,0.152-0.091,0.274l-2.377,7.978c0.18-0.194,0.388-0.385,0.626-0.563	l2.305-7.738C25.685,9.143,26.684,6.292,28.864,6.207z" opacity=".07"/>
    <linearGradient id="lfK0TEarAX_CVWY9eruXyc" x1="9.38" x2="27.188" y1="35.55" y2="35.358" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#ffb155"/>
      <stop offset=".008" stopColor="#ffb055"/>
      <stop offset=".475" stopColor="#eb7447"/>
      <stop offset=".819" stopColor="#df4e3f"/>
      <stop offset="1" stopColor="#da403c"/>
    </linearGradient>
    <path fill="url(#lfK0TEarAX_CVWY9eruXyc)" d="M26.474,28.607	c0,0-0.814,3.255-4.691,3.399H10.006c0,0,3.399,0.287,4.069,4.404s2.441,5.745,4.931,5.793s3.638-2.585,3.926-3.495	C23.219,37.799,26.474,28.607,26.474,28.607z"/>
    <path d="M19.255,41.171l-2.471,0.404c0.596,0.358,1.31,0.544,2.05,0.584l0.199,0.011 c0.004,0,0.007,0,0.011,0.001c0.016,0,0.031-0.002,0.048-0.002c0.175,0.001,0.34-0.015,0.502-0.039 c0.069-0.01,0.136-0.023,0.202-0.037c0.105-0.023,0.206-0.052,0.305-0.084c0.452-0.149,0.848-0.386,1.186-0.677 c0.117-0.102,0.225-0.209,0.329-0.32c0.761-0.811,1.182-1.833,1.34-2.334c0.039-0.125,0.139-0.416,0.274-0.808l2.218-7.444 c-0.086,0.092-0.198,0.179-0.297,0.269c-0.056,0.051-0.108,0.103-0.168,0.152c-0.088,0.072-0.18,0.139-0.277,0.208 c-0.166,0.118-0.341,0.231-0.537,0.333c-0.025,0.013-0.043,0.03-0.069,0.043l-2.131,7.154 C21.969,38.582,21.077,41.091,19.255,41.171z" opacity=".05"/>
    <path d="M19.278,41.671l-1.476,0.34c0,0,0.686,0.176,1.252,0.155c0.42-0.015,0.802-0.072,1.147-0.203	c0.027-0.011,0.056-0.019,0.083-0.031c0.081-0.033,0.159-0.073,0.236-0.112c0.057-0.03,0.115-0.059,0.17-0.091	c0.048-0.028,0.094-0.058,0.141-0.088c0.085-0.056,0.169-0.114,0.249-0.176c0.017-0.013,0.033-0.026,0.049-0.039	c0.429-0.346,0.773-0.767,1.039-1.168c0.006-0.009,0.012-0.017,0.017-0.026c0.029-0.044,0.053-0.086,0.08-0.13	c0.342-0.562,0.556-1.104,0.658-1.428c0.018-0.058,0.05-0.152,0.091-0.274l2.377-7.978c-0.18,0.194-0.388,0.385-0.626,0.563	l-2.305,7.738C22.457,38.736,21.458,41.586,19.278,41.671z" opacity=".07"/>
    <linearGradient id="lfK0TEarAX_CVWY9eruXyd" x1="28.874" x2="37.108" y1="43.472" y2="12.068" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#ffb152"/>
      <stop offset=".531" stopColor="#f36284"/>
      <stop offset=".994" stopColor="#a355e9"/>
    </linearGradient>
    <path fill="url(#lfK0TEarAX_CVWY9eruXyd)" d="M28.915,18.65l-6.07,20.263	c0,0-1.111,3.386-3.839,3.29h15.128c0,0,2.585,0,4.452-2.968c0,0,2.872-3.734,4.548-11.394c1.676-7.66,1.005-8.09,1.005-8.09	s0.431-4.213-6.032-3.878h-4.979C33.128,15.873,30.112,15.826,28.915,18.65z"/>
  </svg>
)

