import { SearchHistoryView } from './orderhistory';

export class FilterSettings
{
    seller: string | null = null;
    rptNumber: number = 0;
    daysBack: number = 0;
    minSold: number = 0;
    minPrice: number | null = null;
    maxPrice: number | null = null;
    showNoOrders: string | null = null;
    lastScan: Date | null = null;
    showFilter = false;
    activeStatusOnly: boolean = false;
    nonVariation: boolean = false;
    calculateMatch: Date | null = null;
}
