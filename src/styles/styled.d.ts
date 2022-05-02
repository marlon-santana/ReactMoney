import 'styled-components';


declare module 'styled-component' {
    export interface defaultTheme {
        title: string;
  
        colors: {
        red: string,
        blue: string,
        bluelight: string
        green: string
        shape: string
        texttitle: string
        textbody: string
        background: string
        },
    }
    
}