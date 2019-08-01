import styled from 'styled-components';

export const Container = styled.div`
	padding: 50px 0 50px 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	.card {
		margin-left: 30px;
	}

	img:hover {
		opacity: 0.7;
		cursor: pointer;
	}

	.lookItem {
		display: block;
		text-align: center;
		position: relative;
		top: 45%;
		color: #bc9780;
		font-size: 20px;
		font-weight: bold;
	}

	.lookItem::after {
		content: '';
		display: block;
		height: 2px;
		width: 50px;
		background: #bc9780;
		margin: 0 auto;
	}

	.itemDescription,
	.itemChair,
	.itemWardrobe,
	.itemBed {
		margin: 0 0 10px 10px;
	}

	.itemDescription::before,
	.itemChair::before,
	.itemWardrobe::before,
	.itemBed::before {
		content: ' ';
		display: block;
		height: 10px;
		width: 10px;
		position: relative;
		top: 16px;
		right: 12px;
	}

	.itemDescription::before {
		background: #aa865c;
	}

	.itemChair::before {
		background: #0482f5;
	}

	.itemWardrobe::before {
		background: #5caa64;
	}

	.itemBed::before {
		background: #aa5c78;
	}

	/* MEDIA QUERY */
	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 760px) {
		grid-template-columns: repeat(1, 1fr);
		margin: 0 auto;
		img {
			margin: 0 auto;
		}
		.lookItem {
			right: 5%;
		}
	}
`;
