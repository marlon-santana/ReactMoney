import 'styled-components';


declare module 'styled-component' {
    export interface defaultTheme {
        title: string;

        colors: {
            primary: string,
            secundary:  string;

            background:  string,
            text:  string;
        }
    }
}