'use client';
import React, { memo } from "react";
import useTradingViewTapeWidget from "@/hooks/useTradingViewTapeWidget";

interface TickerTapeProps {
    config: Record<string, unknown>;
    scriptUrl: string;
    className?: string;
}

const TickerTape = ({ config, scriptUrl, className }: TickerTapeProps) => {
    const containerRef = useTradingViewTapeWidget(scriptUrl, config);

    return (
        <div
            className={`tradingview-widget-container ${className || ""}`}
            ref={containerRef}
            style={{ width: "100%" }}
        />
    );
};

export default memo(TickerTape);
