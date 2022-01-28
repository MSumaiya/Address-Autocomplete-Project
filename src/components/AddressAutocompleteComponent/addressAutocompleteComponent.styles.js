import { makeStyles } from "@material-ui/core/styles";

const AddressAutocompleteComponentstyle = makeStyles(() => ({
  buttonStyle:{      
    width: "100%"
},
addressBoxStyle:{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
},
googleMapBox: {
  display: "flex",
  justifyContent: "end",
  alignItems: "center"
},
showFormAddressBoxStyle:{
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
},
streetBoxStyle:{
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
},
zipCodeBoxStyle:{
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
}, 
cityBoxStyle:{
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
}, 
countryBoxStyle:{
  display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  }
}));
export default AddressAutocompleteComponentstyle;

