import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getBreedsList } from "../api/dogApi";

function AutocompleteSearch() {
  const [breedList, setStateBreedList] = useState([]);

  useEffect(() => {
    getBreedsList()
      .then(({ message }) => {
        const list = [];
        Object.keys(message).forEach(breed => {
          list.push({ title: breed });
          message[breed].forEach(subBreed => {
            list.push({ title: `${breed}-${subBreed}` });
          });
        });
        setStateBreedList(list);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSelectedOption = (event, option) => {
    console.log(option);
  };

  return (
    <StyledSearchContainer
      onChange={handleSelectedOption}
      options={breedList}
      open
      getOptionLabel={option => option.title}
      renderInput={params => (
        <TextField {...params} label="Search Dogs" variant="filled" />
      )}
    />
  );
}

const StyledSearchContainer = styled(Autocomplete)`
  width: 15%;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  background-color: #ffffff;
  @media screen and (max-width: 1000px) {
    width: 20%;
  }
  @media screen and (max-width: 900px) {
    right: 2%;
    top: 2%;
    width: 40%;
    transform: none;
  }
`;

export default AutocompleteSearch;
