import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG
} from "@/lib/constants";

const Home = () => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

    return (
        <div className="flex min-h-screen home-wrapper flex-col gap-10">

            {/* ROW 1: Market Overview (Left) + Top News (Right) */}
            <section className="grid w-full gap-8 home-section grid-cols-1 xl:grid-cols-3">

                {/* Market Overview - Big Left */}
                <div className="xl:col-span-2">
                    <TradingViewWidget
                        title="Market Overview"
                        scriptUrl={`${scriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className="custom-chart"
                        height={600}
                    />
                </div>

                {/* Top Stories - Right Side */}
                <div className="xl:col-span-1 mt-12">
                    <TradingViewWidget

                        scriptUrl={`${scriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        className="custom-chart"
                        height={600}
                    />
                </div>
            </section>

            {/* ROW 2: Heatmap (FULL WIDTH) */}
            <section className="w-full home-section">
                <TradingViewWidget
                    title="Stock Heatmap"
                    scriptUrl={`${scriptUrl}stock-heatmap.js`}
                    config={HEATMAP_WIDGET_CONFIG}
                    className="custom-chart"
                    height={600}
                />
            </section>

            {/* ROW 3: Market Quotes (FULL WIDTH) */}
            <section className="w-full home-section">
                <TradingViewWidget
                    title="Market Quotes"
                    scriptUrl={`${scriptUrl}market-quotes.js`}
                    config={MARKET_DATA_WIDGET_CONFIG}
                    className="custom-chart"
                    height={600}
                />
            </section>

        </div>
    )
}

export default Home;
