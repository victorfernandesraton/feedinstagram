const { useState } = require("react");

import React, { useState, useEffect, useReducer, useCallback } from "react";
import { Button, Flastlist } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { reduceRight } from "lodash";
import { initialState } from "../Coment/Comment-reducer";
import { fetchPost } from "../Coment/Comment-action";
import { FlatList } from "react-native-gesture-handler";



const LikeView = ({ parentId, scenary = 'feed' }) => {
    const { navigate, setOptions } = useNavigation();

    const [{ data, metadata, loading, called }, dispatch] = useReducer(
        reduceRight,
        initialState
    );
    const { page, limit, total } = metadata;

    const onPost = useCallback((data) => {
        addLike(dispatch, { data: data, total });
    });

    const onButtonMore = useCallback(() => {
        if (scenary === 'feed') {
            navigate('single-feed', { id: parentId, scenary: 'single-feed' });
        } else {
            fetchPost(dispatch, {
                page,
                limit: scenary == 'single-feed' ? 5 : 2,
                loading,
                total,
                parentId,
            });
        }
    }, [page, limit, scenary, total, parentId]);

    useEffect(() => {
        if (!loading && !called) {
            fetchPost(dispatch, {
                page: 1,
                limit: scenary == 'single-feed' ? 5 : 2,
                loading,
                total,
                parentId,
            });
        }
    }, []);

    useEffect(() => {
        if (scenary == 'single-feed' && total) {
            setOptions({
                title: `Likes - ${total}`,
            });
        }
    }, [scenary, total]);

    return (
        <>
        <Flastlist 
            data={data}
            keyExtractor={(item) => String(`${parentId}-${item.id}`)}
            renderItem={(item)}
            ListFooterComponent={loading && <Loading />}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 10,
            }}
            ListFooterComponent={loading && <Loading />}
            showVerticalScrollIndicator={false}
        />

        {(scenary == 'single-feed' || total < limit || total == 0) && (
            <LikeView onPost={onPost} total={total} parent={{ id: parentId }} />
        )}
        {total >= limit && total != 0 && (
            <Button title='Ver curtidas' onPress={onButtonMore} />
        )}
        
        </>
    );
};

export default LikeView;