import React from 'react';

import Input from '../components/Input';
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE]} 
                errorText="Please enter a valid title" 
                element="input"
            />
        </form>
    );
}

export default NewPlace;
