export interface Chart {
    title: string;
    column: string;
    type: 'line' | 'bar' | 'hzbar' | 'pie' | 'donut' | 'candleBar';
    data: any;
}

