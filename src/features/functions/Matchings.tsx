import { Member } from "../../shared/shared";
import { Matching } from "../features";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AutoMatching = () => {
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.post('https://fofo/match/auto');
            navigate('/match/result', { state: { responseData: response.data } });
        } catch (error) {
            console.error('err:', error);
        }
    };

    useEffect(() => {
        
        fetchData();
    }, [navigate]);

    const btnData = {
        btnName: '자동매칭',
        btnType: 'manual'
    };
    return <Matching data={btnData} />;
};

export const IndividualMatching = () => {
    const navigate = useNavigate();

    const fetchData = async (members?: Member[]) => {
        try {
            const response = await axios.post('https://fofo/match/auto', members);
            navigate('/match/result', { state: { responseData: response.data } });
        } catch (error) {
            console.error('err:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const btnData = {
        btnName: '개별매칭',
        btnType: 'auto'
    };
    return <Matching data={btnData} />;
};

export const ManualMatching = () => {
    const navigate = useNavigate();

    const fetchData = async (members?: Member[]) => {
        try {
            const response = await axios.post('https://fofo/match/manual', members);
            navigate('/match/result', { state: { responseData: response.data } });
        } catch (error) {
            console.error('err:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [navigate]); // navigate를 의존성 배열에 추가

    const btnData = {
        btnName: '수동매칭',
        btnType: 'manual'
    };
    return <Matching data={btnData} />;
};