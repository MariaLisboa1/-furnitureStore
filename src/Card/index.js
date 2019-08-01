import React from 'react';
import { Container } from './styles';
import table1 from '../assets/table1.png';
import table2 from '../assets/table2.png';
import chair2 from '../assets/chair2.png';
import chair1 from '../assets/chair1.png';
import wardrobe1 from '../assets/wardrobe1.png';
import bed1 from '../assets/bed1.png';

export default function Card() {
	return (
		<Container>
			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={table1} alt="" />
				<p className="itemDescription">MESA</p>
			</div>

			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={table2} alt="" />
				<p className="itemDescription">MESA</p>
			</div>

			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={chair2} alt="Chair" />
				<p className="itemChair">CADEIRA</p>
			</div>

			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={wardrobe1} alt="Wardrobe" />
				<p className="itemWardrobe">ARMARIO</p>
			</div>

			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={bed1} alt="Bed" />
				<p className="itemBed">CAMA</p>
			</div>

			<div className="card">
				<p className="lookItem">VER ITEM</p>
				<img src={chair1} alt="Chair" />
				<p className="itemChair">CADEIRA</p>
			</div>
		</Container>
	);
}
