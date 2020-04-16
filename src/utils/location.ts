import Page from 'models/page';

export function getPage(location: Location): Page {
    const pathname = location.pathname.trim().replace(/\//g, '');

    switch (pathname) {
        case 'experience':
            return Page.EXPERIENCE;
        case 'projects':
            return Page.PROJECTS;
        case '/':
        default:
            return Page.ABOUT;
    }
}
