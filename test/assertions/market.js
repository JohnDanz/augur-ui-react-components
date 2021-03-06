import {assert} from 'chai';
import assertFormattedNumber from '../../test/assertions/common/formatted-number';
import assertFormattedDate from './common/formatted-date';

export default function (market) {

	// market can be undefined
	if (!market.id) {
		return;
	}

	describe('augur-ui-react-components market state', () => {
		it('market', () => {
			assert.isDefined(market);
			assert.isObject(market);
		});

		it('market.id', () => {
			assert.isDefined(market.id);
			assert.isString(market.id);
		});

		it('market.author', () => {
			assert.isDefined(market.author);
			assert.isString(market.author);
		});

		it('market.type', () => {
			assert.isDefined(market.type);
			assert.isString(market.type);
		});

		it('market.description', () => {
			assert.isDefined(market.description);
			assert.isString(market.description);
		});

		it('market.resolution', () => {
			assert.isDefined(market.resolution);
			assert.isString(market.resolution);
		});

		it('market.extraInfo', () => {
			assert.isDefined(market.extraInfo);
			assert.isString(market.extraInfo);
		});

		it('market.endDate', () => {
			assert.isDefined(market.endDate);
			assertFormattedDate(market.endDate, 'market.endDate');
		});

		it('market.creationTime', () => {
			assert.isDefined(market.creationTime);
			assertFormattedDate(market.creationTime, 'market.creationTime');
		});

		it('market.endDateLabel', () => {
			assert.isDefined(market.endDateLabel);
			assert.isString(market.endDateLabel);
		});

		it('market.outstandingShares', () => {
			assert.isDefined(market.outstandingShares);
			assertFormattedNumber(market.outstandingShares, 'market.outstandingShares');
		});

		it('market.takerFeePercent', () => {
			assert.isDefined(market.takerFeePercent);
			assertFormattedNumber(market.takerFeePercent, 'market.takerFeePercent');
		});

		it('market.makerFeePercent', () => {
			assert.isDefined(market.makerFeePercent);
			assertFormattedNumber(market.makerFeePercent, 'market.makerFeePercent');
		});

		it('market.volume', () => {
			assert.isDefined(market.volume);
			assertFormattedNumber(market.volume, 'market.volume');
		});

		it('market.isOpen', () => {
			assert.isDefined(market.isOpen);
			assert.isBoolean(market.isOpen);
		});

		it('market.isPendingReport', () => {
			assert.isDefined(market.isPendingReport);
			assert.isBoolean(market.isPendingReport);
		});

		it('market.marketLink', () => {
			assert.isDefined(market.marketLink);
			assertMarketLink(market.marketLink);
		});

		const tags = market.tags;
		it('market.tags', () => {
			assert.isDefined(tags);
			assert.isArray(tags);

			tags.forEach((tag, i) => {
				it(`market.tags[${i}].name`, () => {
					assert.isDefined(tag.name);
					assert.isString(tag.name);
				});

				it(`market.tags[${i}].onCLick`, () => {
					assert.isDefined(tag.onClick);
					assert.isFunction(tag.onClick);
				});
			});
		});

		it('market.outcomes', () => {
			assert.isDefined(market.outcomes);
			assert.isArray(market.outcomes);

			market.outcomes.forEach((outcome, i) => {
				it(`market.outcomes[${i}]`, () => {
					assert.isDefined(outcome);
					assert.isObject(outcome);
				});

				it(`market.outcomes[${i}].id`, () => {
					assert.isDefined(outcome.id);
					assert.isString(outcome.id);
				});

				it(`market.outcomes[${i}].name`, () => {
					assert.isDefined(outcome.name);
					assert.isString(outcome.name);
				});

				it(`market.outcomes[${i}].marketID`, () => {
					assert.isDefined(outcome.marketID);
					assert.isString(outcome.marketID);
				});

				it(`market.outcomes[${i}].lastPrice`, () => {
					assert.isDefined(outcome.lastPrice);
					assertFormattedNumber(outcome.lastPrice, 'outcome.lastPrice');
				});

				it(`market.outcomes[${i}].lastPricePercent`, () => {
					assert.isDefined(outcome.lastPricePercent);
					assertFormattedNumber(outcome.lastPricePercent, 'outcome.lastPricePercent');
				});

				const trade = outcome.trade;
				it(`market.outcomes[${i}].trade`, () => {
					assert.isDefined(trade);
					assert.isObject(trade);
				});

				it(`market.outcomes[${i}].trade.side`, () => {
					assert.isDefined(trade.side);
					assert.isString(trade.side);
				});

				it(`market.outcomes[${i}].trade.numShares`, () => {
					assert.isDefined(trade.numShares);
					assert.isNumber(trade.numShares);
				});

				it(`market.outcomes[${i}].trade.limitPrice`, () => {
					assert.isDefined(trade.limitPrice);
					assert.isNumber(trade.limitPrice);
				});

				it(`market.outcomes[${i}].trade.tradeSummary`, () => {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					assert.isDefined(trade.tradeSummary);
					assert.isObject(trade.tradeSummary);
				});

				it(`market.outcomes[${i}].trade.updateTradeOrder`, () => {
					assert.isDefined(trade.updateTradeOrder);
					assert.isFunction(trade.updateTradeOrder);
				});

				const orderBook = outcome.orderBook;
				it(`market.outcomes[${i}].orderBook`, () => {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					assert.isDefined(orderBook);
					assert.isObject(orderBook);
				});

				it(`market.outcomes[${i}].orderBook.bids`, () => {
					assert.isDefined(orderBook.bids);
					assert.isArray(orderBook.bids);
				});

				it(`market.outcomes[${i}].orderBook.asks`, () => {
					assert.isDefined(orderBook.asks);
					assert.isArray(orderBook.asks);
				});

				it(`market.outcomes[${i}].orderBook.topBid`, () => {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					assert.isDefined(outcome.topBid);
				});

				it(`market.outcomes[${i}].orderBook.topAsk`, () => {
					// NOTE -- shallow check here due to deep check further down of the same selector method
					assert.isDefined(outcome.topAsk);
				});

				const userOpenOrders = outcome.userOpenOrders;
				it(`market.outcomes[${i}].userOpenOrders`, () => {
					assert.isDefined(userOpenOrders);
					assert.isArray(userOpenOrders);
				});

				it(`market.outcomes[${i}].userOpenOrders`, () => {
					assert.isDefined(userOpenOrders);
					assert.isArray(userOpenOrders);
				});

				userOpenOrders.forEach((openOrder, j) => {
					it(`market.outcomes[${i}].userOpenOrders[${j}]`, () => {
						assert.isDefined(openOrder);
						assert.isObject(openOrder);
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].id`, () => {
						assert.isDefined(openOrder.id);
						assert.isObject(openOrder.id);
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].marketID`, () => {
						assert.isDefined(openOrder.marketID);
						assert.isString(openOrder.marketID);
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].outcomeName`, () => {
						assert.isDefined(openOrder.outcomeName);
						assert.isString(openOrder.outcomeName);
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].type`, () => {
						assert.isDefined(openOrder.type);
						assert.isString(openOrder.type);
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].avgPrice`, () => {
						assert.isDefined(openOrder.avgPrice);
						assert.isObject(openOrder.avgPrice);
						assertFormattedNumber(openOrder.avgPrice, 'openOrder.avgPrice');
					});

					it(`market.outcomes[${i}].userOpenOrders[${j}].unmatchedShares`, () => {
						assert.isDefined(openOrder.unmatchedShares);
						assert.isObject(openOrder.unmatchedShares);
						assertFormattedNumber(openOrder.unmatchedShares, 'openOrder.unmatchedShares');
					});
				});
			});
		});

		it('market.reportableOutcomes', () => {
			// NOTE -- shallow check here due to deep check further down of the same selector method
			assert.isDefined(market.reportableOutcomes);
			assert.isArray(market.reportableOutcomes);
		});

		const indeterminateItem = market.reportableOutcomes[market.reportableOutcomes.length - 1];
		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem)', () => {
			assert.isDefined(indeterminateItem);
			assert.isObject(indeterminateItem);
		});

		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem.id)', () => {
			assert.isDefined(indeterminateItem.id);
			assert.isString(indeterminateItem.id);
		});

		it('market.reportableOutcomes[market.reportableOutcomes.length - 1] (indeterminateItem.name)', () => {
			assert.isDefined(indeterminateItem.name);
			assert.isString(indeterminateItem.name);
		});

		const tradeSummary = market.tradeSummary;
		it('market.tradeSummary', () => {
			assert.isDefined(tradeSummary);
			assert.isObject(tradeSummary);
		});

		it('market.tradeSummary.totalGas', () => {
			assert.isDefined(tradeSummary.totalGas);
			assertFormattedNumber(tradeSummary.totalGas, 'tradeSummary.totalGas');
		});

		const tradeOrders = tradeSummary.tradeOrders;
		it('market.tradeSummary.tradeOrders', () => {
			assert.isDefined(tradeOrders);
			assert.isArray(tradeOrders);
		});

		tradeOrders.map((trade, i) => {
			it(`market.tradeSummary.tradeOrders${i}.shares`, () => {
				assert.isDefined(trade.shares);
				assert.isObject(trade.shares);
				assertFormattedNumber(trade.shares, 'trade.shares');
			});

			it(`market.tradeSummary.tradeOrders${i}.limitPrice`, () => {
				assert.isDefined(trade.limitPrice);
				assert.isNumber(trade.limitPrice);
			});

			it(`market.tradeSummary.tradeOrders${i}.ether`, () => {
				assert.isDefined(trade.ether);
				assert.isObject(trade.ether);
				assertFormattedNumber(trade.ether, 'trade.ether');
			});

			it(`market.tradeSummary.tradeOrders${i}.gas`, () => {
				assert.isDefined(trade.gas);
				assert.isObject(trade.gas);
			});
			it(`market.tradeSummary.tradeOrders${i}.gas.value`, () => {
				assert.isDefined(trade.gas.value);
				assert.isNumber(trade.gas.value);
			});

			it(`market.tradeSummary.tradeOrders${i}.data`, () => {
				assert.isDefined(trade.data);
				assert.isObject(trade.data);
			});

			it(`market.tradeSummary.tradeOrders${i}.data.marketID`, () => {
				assert.isDefined(trade.data.marketID);
				assert.isString(trade.data.marketID);
			});

			it(`market.tradeSummary.tradeOrders${i}.data.outcomeID`, () => {
				assert.isDefined(trade.data.outcomeID);
				assert.isString(trade.data.outcomeID);
			});

			it(`market.tradeSummary.tradeOrders${i}.data.marketDescription`, () => {
				assert.isDefined(trade.data.marketDescription);
				assert.isString(trade.data.marketDescription);
			});

			it(`market.tradeSummary.tradeOrders${i}.data.outcomeName`, () => {
				assert.isDefined(trade.data.outcomeName);
				assert.isString(trade.data.outcomeName);
			});

			it(`market.tradeSummary.tradeOrders${i}.data.avgPrice`, () => {
				assert.isDefined(trade.data.avgPrice);
				assert.isObject(trade.data.avgPrice);
				assertFormattedNumber(trade.data.avgPrice, 'trade.data.avgPrice');
			});
		});

		it('[TODO] flesh out the full shape');

		it('market.priceTimeSeries', () => {
			assert.isDefined(market.priceTimeSeries);
			assert.isArray(market.priceTimeSeries);
		});

		const userOpenOrdersSummary = market.userOpenOrdersSummary;
		it('market.userOpenOrdersSummary', () => {
			assert.isDefined(market.userOpenOrdersSummary);
			assert.isObject(market.userOpenOrdersSummary);
		});

		it('market.userOpenOrdersSummary.openOrdersCount', () => {
			assert.isDefined(market.userOpenOrdersSummary.openOrdersCount);
			assertFormattedNumber(market.userOpenOrdersSummary.openOrdersCount, 'market.userOpenOrdersSummary.openOrdersCount');
		});

		const myPositionsSummary = market.myPositionsSummary;
		it('market.myPositionsSummary', () => {
			assert.isDefined(myPositionsSummary);
			assert.isObject(myPositionsSummary);
		});

		it('market.myPositionsSummary.numPositions', () => {
			assert.isDefined(myPositionsSummary.numPositions);
			assertFormattedNumber(myPositionsSummary.numPositions, 'myPositionsSummary.numPositions');
		});

		it('market.myPositionsSummary.qtyShares', () => {
			assert.isDefined(myPositionsSummary.qtyShares);
			assertFormattedNumber(myPositionsSummary.qtyShares, 'myPositionsSummary.qtyShares');
		});

		it('market.myPositionsSummary.purchasePrice', () => {
			assert.isDefined(myPositionsSummary.purchasePrice);
			assertFormattedNumber(myPositionsSummary.purchasePrice, 'myPositionsSummary.purchasePrice');
		});

		it('market.myPositionsSummary.totalValue', () => {
			assert.isDefined(myPositionsSummary.totalValue);
			assertFormattedNumber(myPositionsSummary.totalValue, 'myPositionsSummary.totalValue');
		});

		it('market.myPositionsSummary.totalCost', () => {
			assert.isDefined(myPositionsSummary.totalCost);
			assertFormattedNumber(myPositionsSummary.totalCost, 'myPositionsSummary.totalCost');
		});

		it('market.myPositionsSummary.shareChange', () => {
			assert.isDefined(myPositionsSummary.shareChange);
			assertFormattedNumber(myPositionsSummary.shareChange, 'myPositionsSummary.shareChange');
		});

		it('market.myPositionsSummary.gainPercent', () => {
			assert.isDefined(myPositionsSummary.gainPercent);
			assertFormattedNumber(myPositionsSummary.gainPercent, 'myPositionsSummary.gainPercent');
		});

		it('market.myPositionsSummary.netChange', () => {
			assert.isDefined(myPositionsSummary.netChange);
			assertFormattedNumber(myPositionsSummary.netChange, 'myPositionsSummary.netChange');
		});

		const myMarketSummary = market.myMarketSummary;
		it('market.myMarketSummary.endDate', () => {
			assert.isDefined(myMarketSummary.endDate);
			assertFormattedDate(myMarketSummary.endDate, 'myMarketSummary.endDate');
		});

		it('market.myMarketSummary.fees', () => {
			assert.isDefined(myMarketSummary.fees);
			assertFormattedNumber(myMarketSummary.fees, 'myMarketSummary.fees');
		});

		it('market.myMarketSummary.volume', () => {
			assert.isDefined(myMarketSummary.volume);
			assertFormattedNumber(myMarketSummary.volume, 'myMarketSummary.volume');
		});

		it('market.myMarketSummary.numberOfTrades', () => {
			assert.isDefined(myMarketSummary.numberOfTrades);
			assertFormattedNumber(myMarketSummary.numberOfTrades, 'myMarketSummary.numberOfTrades');
		});

		it('market.myMarketSummary.averageTradeSize', () => {
			assert.isDefined(myMarketSummary.averageTradeSize);
			assertFormattedNumber(myMarketSummary.averageTradeSize, 'myMarketSummary.averageTradeSize');
		});

		it('market.myMarketSummary.openVolume', () => {
			assert.isDefined(myMarketSummary.openVolume);
			assertFormattedNumber(myMarketSummary.openVolume, 'myMarketSummary.openVolume');
		});

		const report = market.report;
		it('market.report', () => {
			assert.isDefined(report);
			assert.isObject(report);
		});

		it('market.report.isUnethical', () => {
			assert.isDefined(report.isUnethical);
			assert.isBoolean(report.isUnethical);
		});

		it('market.report.onSubmitReport', () => {
			assert.isDefined(report.onSubmitReport);
			assert.isFunction(report.onSubmitReport);
		});

		const onSubmitPlaceTrade = market.onSubmitPlaceTrade;
		it('market.onSubmitPlaceTrade', () => {
			assert.isDefined(onSubmitPlaceTrade);
			assert.isFunction(onSubmitPlaceTrade);
		});

		function assertMarketLink(marketLink) {
			assert.isDefined(marketLink);
			assert.isObject(marketLink);
			assert.isDefined(marketLink.text);
			assert.isString(marketLink.text);
			assert.isDefined(marketLink.className);
			assert.isString(marketLink.className);
			assert.isDefined(marketLink.onClick);
			assert.isFunction(marketLink.onClick);
		}
	});
}
