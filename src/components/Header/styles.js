import styled from 'styled-components';
import header from '../../assets/header.png';
import { keyframes } from 'styled-components';

export const Container = styled.div`
	background: url(${header});
	.header {
		display: grid;
		grid-template-areas: 'logo logo logo' 'texto texto texto';
		justify-items: center;
	}
	img {
		padding-top: 20px;
		grid-area: logo;
		height: 60.48px;
		width: 346.97px;
	}

	h1 {
		padding-top: 20px;
		opacity: 0.8;
		color: white;
		grid-area: logo;
		font-size: 48px;
		font-style: italic;
	}

	h2 {
		padding: 80px 0 10px 0;
		/* top, right, bottom, left */
		grid-area: texto;
		opacity: 0.6;
		color: white;
		font-style: italic;
	}
`;
const keyFrameRebuild = keyframes`
   from {
    top: 30px;
  }

  to {
    top: 20px;
  }

`;

export const Arrow = styled.div`
	position: relative;
	color: #bc9780;
	text-align: center;
	animation: ${keyFrameRebuild} 0.5s ease-in 0s infinite alternate;
`;
