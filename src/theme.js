import { extendTheme} from "@chakra-ui/react";
const theme = extendTheme(
  {
    breakpoints : {
      xs:'0px',
      sm:"300px",
      tablet: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1500px",
      xxl: "1700px",
    },
    layerStyles: {
      base: {
        bg: 'gray.50',
        border: '2px solid',
        borderColor: 'gray.500',
      },
      selected: {
        minH:'200px',
        color:'white',
        bg: 'teal.500',
        borderColor: 'orange.500',
      },
    },
    textStyles: {
      h1: {
       
        fontSize: {base:'40px',tablet:'45px' ,lg:'48px',xl:'54px'},
        fontWeight: 'bold',
        lineHeight: '125%',
        
      },
      h2: {
        fontSize: {base:'30px',tablet:'30px' ,lg:'40px' ,xl:'48px'},
        fontWeight: 'bold',
         lineHeight: '125%',
       
      },
      h3: {
        fontSize: {base:'28px',tablet:'32px' ,lg:'36px' ,xl:'40px'},
        fontWeight: 'bold',
         lineHeight: '125%',
       
      },
      h4: {
        fontSize: {base:'24px',tablet:'25px' ,lg:'32px' ,xl:'36px'},
        fontWeight: 'bold',
         lineHeight: '125%',
       
      },
      h5: {
        fontSize: {base:'20px',tablet:'24px' ,lg:'28px' ,xl:'32px'},
        fontWeight: 'bold',
        lineHeight: '110%',
       
      },
      h6: {
        fontSize: {base:'20px',tablet:'20px' ,lg:'24px' ,xl:'24px'},
        fontWeight: 'bold',
        lineHeight: '110%',
       
      },
    },
    styles : {
      global: (props) => ({
        body: {
         
        },
        'button, input, optgroup, select, textarea':{
          padding:'0 10px',
        },
        h1:{
          
        }

        
      }),
    }
  },

);

export default theme;
