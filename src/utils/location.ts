import Page from 'models/page';

export function getPage(pathname: string): Page {
    const sanitized_pathname = pathname.trim().replace(/\//g, '');

    switch (sanitized_pathname) {
        case 'experience':
            return Page.EXPERIENCE;
        case 'projects':
            return Page.PROJECTS;
        case '/':
        default:
            return Page.ABOUT;
    }
}

export function getPath(page: Page): string {
    switch (page) {
        case Page.EXPERIENCE:
            return '/experience/';
        case Page.PROJECTS:
            return '/projects/';
        case Page.ABOUT:
        case Page.CONTACT:
        default:
            return '/';
    }
}
