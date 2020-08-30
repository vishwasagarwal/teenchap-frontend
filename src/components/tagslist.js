import React, { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper'

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

export default function ServerAutoSuggest(props) {
  const [inputValue, setInputValue] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [value,Setvalue] = useState([]);

  const debounceOnChange = React.useCallback(
    debounce(value => {
      setInputSearch(value);
    }, 400),
    []
  );

  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  function handleChange(value) {
    setInputValue(value);
    debounceOnChange(value);
  }

  useEffect(() => {
    let active = true;

    (async () => {
      axios.get("http://localhost:8000/api/category/autocomplete/",{params:{search:inputValue,}}).then(response =>{
        setOptions([...response.data]);
      }).catch(err =>{
          console.log(err);
      })
    })();
  }, [inputSearch]);

  return (
    <React.Fragment>
     <Paper>
      <Autocomplete
        options={options}
        value={value}
        getOptionLabel={option => option}
        getOptionSelected={(option, value) => option === value}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        autoComplete
        freeSolo
        loading={loading}
        inputValue={inputValue}
        multiple
        onChange={(event, newValue) => {
          Setvalue(newValue);
          props.handleTags(newValue);
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Tags"
            variant="filled"
            style={{background:'#fff'}}
            onChange={event => handleChange(event.target.value)}
            fullWidth
          />
        )}
      />
     </Paper>
    </React.Fragment>
  );
}
