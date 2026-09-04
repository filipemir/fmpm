export function formatMonthYear(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric'
    }).format(date);
}

export function formatFullMonthYear(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format(date);
}

export function formatLongDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}
