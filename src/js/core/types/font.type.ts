export type FontSettings = {
    size: string,
    color: string,
    family?: FontFamily,
    opacity?: number,
    shadow?: string,
    weight?: FontWeight,
}

export enum FontFamily {
    Inter = 'Inter',
    Roboto = 'Roboto',
    Montserrat = 'Montserrat',
    // Lato = 'Lato',
    // OpenSans = 'Open Sans',
}

export enum FontWeight {
    Hairline = 'hairline',
    Thin = 'thin',
    Light = 'light',
    Normal = 'normal',
    Medium = 'medium',
    Bold = 'bold',
    Semibold = 'semibold',
    Extrabold = 'extrabold',
    Black = 'black',
}