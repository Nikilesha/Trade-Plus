'use client';
import { useEffect, useRef } from "react";

const useTradingViewTapeWidget = (
    scriptUrl: string,
    config: Record<string, unknown>
) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.dataset.loaded) return;

        // Clear container
        containerRef.current.innerHTML = `
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank">
          <span class="blue-text">Ticker Tape</span>
        </a>
        <span class="trademark"> by TradingView</span>
      </div>
    `;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = "true";

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
                delete containerRef.current.dataset.loaded;
            }
        };
    }, [scriptUrl, config]);

    return containerRef;
};

export default useTradingViewTapeWidget;
