import { Member } from "../../shared/shared";
import { Matching } from "../features";
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export class findMember extends Component {
    fetchData = async () => {
        try {
            const navigate = useNavigate();
            const response = await axios.post('https://fofo/match/auto');
            navigate('http://fofo/match/result', { state: { responseData: response.data } });
        } 
        catch (error) {
            console.error('err:', error);
        }
    };
    render() {
        const btnData = {
            btnName: "자동매칭"
        };
        return (
            <Matching data={btnData} />
        );
    }
}