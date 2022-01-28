import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import GoogleMapComponent from "../GoogleMapComponent/GoogleMapComponent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AddressAutocompleteComponentstyle from "./addressAutocompleteComponent.styles";
import TypographyStyle from "../TypographyStyle/TypographyStyle";

function AddressAutocompleteComponent() {
  const classes = AddressAutocompleteComponentstyle();
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [showMap, setShowMap] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [saveStreet, setSaveStreet] = useState("");
  const [saveZipCode, setSaveZipCode] = useState("");
  const [saveCity, setSaveCity] = useState("");
  const [saveCountry, setSaveCountry] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
  };

  const handleEdit = () => {
    setShowMap(!showMap);
    setShowForm(!showForm);
  };

  const handleReturnToSearch = () => {
    setShowMap(!showMap);
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaveStreet(`${street}`);
    setSaveZipCode(`${zipCode}`);
    setSaveCity(`${city}`);
    setSaveCountry(`${country}`);
    setStreet("");
    setZipCode("");
    setCity("");
    setCountry("");
  };

  return (
    <>
      {showMap && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item md xs></Grid>
            <Grid item md={8} xs={10}>
              <Box>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <Box>
                      <TextField
                        fullWidth
                        {...getInputProps()}
                        id="outlined-basic"
                        label="Enter a location"
                        variant="outlined"
                        InputProps={{ style: { fontSize: 14 } }}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                      />
                      <Box
                        m={1}
                        className={classes.addressBoxStyle}
                        sx={{ textAlign: "start" }}
                      >
                        {address && <TypographyStyle text="Address" />}
                        <Typography
                          sx={{
                            fontSize: { lg: "1.5rem", xs: "1rem" },
                          }}
                        >
                          Can’t find your address?{" "}
                          <Link onClick={handleEdit} fontWeight={700} href="#">
                            Edit
                          </Link>{" "}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          ml={1}
                          mb={1}
                          sx={{
                            fontSize: { lg: "1.5rem", xs: "1rem" },
                            textAlign: "start",
                          }}
                        >
                          {address}
                        </Typography>
                      </Box>
                      <Box>
                        {loading && <Box>Loading...</Box>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          const style = suggestion.active
                            ? { backgroundColor: "gray", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <Box
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                              key={suggestion.description}
                            >
                              <TypographyStyle text={suggestion.description} />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  )}
                </PlacesAutocomplete>
              </Box>
              <Box className={classes.googleMapBox}>
                <GoogleMapComponent
                  latitude={coordinates.lat}
                  longitude={coordinates.lng}
                />
              </Box>
            </Grid>
            <Grid item md xs></Grid>
          </Grid>
        </Box>
      )}

      {showForm && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item lg sm xs></Grid>
              <Grid item lg={6} sm={8} xs={10}>
                <Box>
                  <Box mb={2} className={classes.addressBoxStyle}>
                    <Box className={classes.showFormAddressBoxStyle}>
                      <TypographyStyle text="Address" />
                      <TypographyStyle
                        text={saveStreet && `Street: ${saveStreet}`}
                      />
                      <TypographyStyle
                        text={saveZipCode && `Zip-code: ${saveZipCode}`}
                      />
                      <TypographyStyle text={saveCity && `City: ${saveCity}`} />
                      <TypographyStyle
                        text={saveCountry && `Country: ${saveCountry}`}
                      />
                    </Box>
                    <Typography sx={{ fontSize: { lg: "1.5rem", xs: "1rem" } }}>
                      Return to{" "}
                      <Link
                        ml={0.5}
                        onClick={handleReturnToSearch}
                        sx={{ fontWeight: { lg: "700" } }}
                        fontWeight={700}
                        href="#"
                      >
                        address search
                      </Link>
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <form onSubmit={handleSubmit}>
                      <Grid container>
                        <Grid mb={1} item xs={12}>
                          <Box className={classes.streetBoxStyle}>
                            <Typography
                              mb={1}
                              sx={{
                                fontSize: { lg: "1.5rem", xs: "1rem" },
                                display: "flex",
                              }}
                            >
                              Street:
                            </Typography>
                            <input
                              name="street"
                              type="text"
                              value={street}
                              onChange={(e) => setStreet(e.target.value)}
                            />
                          </Box>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                          <Box
                            mb={1}
                            mr={1}
                            className={classes.zipCodeBoxStyle}
                            sx={{ marginRight: { sm: "8px", xs: "0px" } }}
                          >
                            <Typography
                              mb={1}
                              sx={{
                                fontSize: { lg: "1.5rem", xs: "1rem" },
                                display: "flex",
                              }}
                            >
                              Zip Code:
                            </Typography>

                            <input
                              name="zipcode"
                              type="text"
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)}
                            />
                          </Box>
                        </Grid>

                        <Grid item sm={8} xs={12}>
                          <Box mb={1} className={classes.cityBoxStyle}>
                            <Typography
                              sx={{
                                fontSize: { lg: "1.5rem", xs: "1rem" },
                                display: "flex",
                                marginBottom: { xs: "8px" },
                              }}
                            >
                              City:
                            </Typography>
                            <input
                              name="city"
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </Box>
                        </Grid>

                        <Grid mb={1} item xs={12}>
                          <Box className={classes.countryBoxStyle}>
                            <Typography
                              mb={1}
                              sx={{
                                fontSize: { lg: "1.5rem", xs: "1rem" },
                                display: "flex",
                              }}
                            >
                              Country
                            </Typography>
                            <input
                              name="country"
                              type="text"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                          </Box>
                        </Grid>
                        <Grid mt={2} item xs={12}>
                          <button className={classes.buttonStyle}>
                            Submit
                          </button>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg sm xs></Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

export default AddressAutocompleteComponent;
