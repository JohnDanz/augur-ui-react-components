import React from 'react';
import Positions from '../../../modules/my-positions/components/my-positions';

const PortfolioPositions = (p) => (
	<div className="positions-content" >
		{!!p.markets && !!p.markets.length && p.markets.map(market => (
			<div key={market.id} className="positions-container" >
				<span className="description">{market.description}</span>
				{!!market.myPositionOutcomes && !!market.myPositionOutcomes.length &&
					<Positions
						className="page-content positions-content"
						outcomes={market.myPositionOutcomes}
					/>
				}
			</div>
		))}
	</div>
);

PortfolioPositions.propTypes = {
	markets: React.PropTypes.array.isRequired
};

export default PortfolioPositions;
