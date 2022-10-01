
export interface Page {
    href: string;
    tabLabel: string;
    tabTitle: string;
}         

export interface PagesData {
    [key: string]: PageObject;
}

export interface PageObject {
    [key: string]: Page
}
export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
};