import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root{
        --bg: #1C2431;
        --buttonBg: #202A3C;
        --primaryColor: #2ACFCF;
        --lightPrimaryColor: #AEF6F6;
        --accentColor : #003694;
        --white : #ffffef;
        --colorFont: #ffffef;
        --grey: #fafafa ;
        --greyDarken: #eeeeee ;
        --bodyRegular: 400 1rem Poppins;
        --bodyRegularSemiBold: 500 1.2rem Poppins;
        --titleFont: 600 1.5rem Poppins;

    }
    body {
        color: var(--black);
        font: var(--bodyRegular);
        margin: 0;
        background-image: url("assets/bg-wood.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        margin: 0;
        font: var(--titleFont);
        color: var(--accentColor);
        text-align: left;
    }

`



export default GlobalStylesStyled
