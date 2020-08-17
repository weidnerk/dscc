/**
   * Get first item in semi-colon delimited string.
   */
export function getFirstInList(item: string | null): string | null {
    if (item) {
        var a = item.split(';');
        return a[0];
    }
    else {
        return null;
    }
}
